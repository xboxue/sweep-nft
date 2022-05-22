import { useClerk, useSignIn, useSignUp } from "@clerk/clerk-react";
import { EmailCodeFactor } from "@clerk/types";
import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCodeForm from "../components/LoginCodeForm/LoginCodeForm";
import LoginForm from "../components/LoginForm/LoginForm";

const DEFAULT_ERROR = "Oops, something went wrong. Please try again.";

function LoginPage() {
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();
  const clerk = useClerk();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [codeError, setCodeError] = useState<string | null>(null);

  const [isSignUp, setIsSignUp] = useState(true);

  const verifyCode = async (code: string) => {
    if (!signIn || !signUp) throw new Error();

    setCodeError(null);
    try {
      if (isSignUp) {
        const signUpAttempt = await signUp.attemptEmailAddressVerification({
          code,
        });
        if (signUpAttempt.verifications.emailAddress.status === "verified") {
          await clerk.setSession(signUpAttempt.createdSessionId);
          navigate("/");
        }
      } else {
        const signInAttempt = await signIn.attemptFirstFactor({
          strategy: "email_code",
          code,
        });
        if (signInAttempt.status === "complete") {
          await clerk.setSession(signInAttempt.createdSessionId);
          navigate("/");
        }
      }
    } catch (error) {
      const clerkError = error?.errors?.[0];
      if (clerkError) setCodeError(clerkError.longMessage);
      setCodeError(error?.errors?.[0]?.longMessage || DEFAULT_ERROR);
    }
  };

  const signInVerifyEmail = async (email: string) => {
    if (!signIn) throw new Error();
    const signInAttempt = await signIn.create({
      identifier: email,
    });

    const emailCodeFactor = signInAttempt.supportedFirstFactors.find(
      ({ strategy }) => strategy === "email_code"
    ) as EmailCodeFactor;

    await signInAttempt.prepareFirstFactor({
      strategy: "email_code",
      emailAddressId: emailCodeFactor.emailAddressId,
    });
  };

  const signUpVerifyEmail = async (email: string) => {
    if (!signUp) throw new Error();
    const signUpAttempt = await signUp.create({
      emailAddress: email,
    });
    await signUpAttempt.prepareEmailAddressVerification();
  };

  const signInWithEmail = async (email: string) => {
    if (!signIn || !signUp) throw new Error();
    setIsSignUp(true);
    setEmailError(null);

    try {
      try {
        await signUpVerifyEmail(email);
        setStep(step + 1);
      } catch (error) {
        if (error?.errors?.[0]?.code === "form_identifier_exists") {
          setIsSignUp(false);
          await signInVerifyEmail(email);
          setStep(step + 1);
        } else {
          throw error;
        }
      }
    } catch (error) {
      setEmailError(error?.errors?.[0]?.longMessage || DEFAULT_ERROR);
    }
  };

  const signInWithGoogle = () => {
    if (!signIn) return;
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/oauth-callback",
      redirectUrlComplete: "/",
    });
  };

  return (
    <Box
    // sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {step === 0 && (
        <LoginForm
          signInWithEmail={signInWithEmail}
          signInWithGoogle={signInWithGoogle}
          error={emailError}
        />
      )}
      {step === 1 && (
        <LoginCodeForm
          onSubmit={verifyCode}
          onCancel={() => {
            setCodeError(null);
            setStep(0);
          }}
          error={codeError}
        />
      )}
    </Box>
  );
}

export default LoginPage;
