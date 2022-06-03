import { LoadingButton } from "@mui/lab";
import { parseEther } from "ethers/lib/utils";
import { useState } from "react";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import smartContract from "../../contracts/MyNFT.json";

const MintButton = () => {
  const [txHash, setTxHash] = useState<string | undefined>();

  const {
    write: mint,
    isLoading: minting,
    error,
  } = useContractWrite(
    {
      addressOrName: "0xd91e8f27d377ae964b608bec13547b7d9f8042aa",
      contractInterface: smartContract.abi,
    },
    "publicSaleMint",
    { onSuccess: ({ hash }) => setTxHash(hash) }
  );

  const {
    data,
    error: txError,
    isError: txIsError,
    isLoading: txLoading,
  } = useWaitForTransaction({
    hash: txHash,
  });

  return (
    <LoadingButton
      variant="contained"
      loading={minting || txLoading}
      onClick={() =>
        mint({ args: [1, { value: parseEther("0.1"), gasLimit: 200000 }] })
      }
    >
      Mint
    </LoadingButton>
  );
};

export default MintButton;
