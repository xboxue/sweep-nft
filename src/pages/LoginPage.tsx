import { useClerk, useSignIn, useSignUp } from "@clerk/clerk-react";
import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCodeForm from "../components/LoginCodeForm/LoginCodeForm";
import LoginForm from "../components/LoginForm/LoginForm";

function LoginPage() {
  const { isLoaded: isSignInLoaded, signIn } = useSignIn();
  const { isLoaded: isSignUpLoaded, signUp } = useSignUp();
  const clerk = useClerk();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [isSignUp, setIsSignUp] = useState(true);

  const verifyCode = async (code: string) => {
    if (isSignUp) {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (signUpAttempt.verifications.emailAddress.status === "verified") {
        await clerk.setSession(signUpAttempt.createdSessionId);
        navigate("/");
      }
    } else {
      const signUpAttempt = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code,
      });
      if (signUpAttempt.status === "complete") {
        await clerk.setSession(signUpAttempt.createdSessionId);
        navigate("/");
      }
    }
  };

  const verifyEmail = async (email: string) => {
    try {
      const signUpAttempt = await signUp.create({
        emailAddress: email,
      });
      await signUpAttempt.prepareEmailAddressVerification();
    } catch (error) {
      if (
        error.errors[0].message ===
        "That email address is taken. Please try another."
      ) {
        setIsSignUp(false);
        const signInAttempt = await signIn.create({
          identifier: email,
        });

        await signInAttempt.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId: signInAttempt.supportedFirstFactors[0].emailAddressId,
        });
      } else {
        // formik.setErrors({ email: error.errors[0] });
      }
    }
    setStep(step + 1);
  };

  return (
    <Box
    // sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {step === 0 && <LoginForm onSubmit={verifyEmail} />}
      {step === 1 && <LoginCodeForm onSubmit={verifyCode} />}
    </Box>
  );
}

export default LoginPage;
