import { ethers } from "ethers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAccount } from "../features/auth/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.ethereum) {
      const connect = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const [account] = await provider.send("eth_accounts", []);
        if (account) {
          localStorage.setItem("account", account);
          dispatch(setAccount(account));
        }

        window.ethereum.on("accountsChanged", ([newAccount]: string[]) => {
          if (newAccount) {
            localStorage.setItem("account", newAccount);
            dispatch(setAccount(newAccount));
          } else {
            localStorage.removeItem("account");
            dispatch(setAccount(null));
          }
        });
      };

      connect();
    }
  }, [dispatch]);
};

export default useAuth;
