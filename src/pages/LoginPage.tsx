import { Button } from "@mui/material";
import { ethers } from "ethers";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAccount } from "../features/auth/authSlice";

const LoginPage = () => {
  const account = useSelector(selectAccount);

  if (account) {
    return <Navigate to="/details" replace />;
  }

  return (
    <Button
      onClick={async () => {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
        }
      }}
    >
      Metamask
    </Button>
  );
};
export default LoginPage;
