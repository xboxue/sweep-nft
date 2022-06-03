import { Button, Switch, Typography } from "@mui/material";
import { formatEther } from "ethers/lib/utils";
import { useParams } from "react-router-dom";
import { useContractRead, useContractWrite } from "wagmi";
import smartContract from "../../contracts/MyNFT.json";
import { useGetProjectQuery } from "../../generated/graphql";

const SmartContractDashboard = () => {
  const { id } = useParams();
  const { data: projectData } = useGetProjectQuery({
    variables: { id },
    fetchPolicy: "cache-only",
  });

  // const { data: tokenURI } = useContractRead(
  //   {
  //     addressOrName: "0xd91e8f27d377ae964b608bec13547b7d9f8042aa",
  //     contractInterface: smartContract.abi,
  //   },
  //   "tokenURI",
  //   { args: [0] }
  // );

  const { data: isPublicSaleActive } = useContractRead(
    {
      addressOrName: "0xd91e8f27d377ae964b608bec13547b7d9f8042aa",
      contractInterface: smartContract.abi,
    },
    "isPublicSaleActive"
  );

  const { write: setPublicSaleActive } = useContractWrite(
    {
      addressOrName: "0xd91e8f27d377ae964b608bec13547b7d9f8042aa",
      contractInterface: smartContract.abi,
    },
    "setPublicSaleActive"
  );

  const { write: setBaseURI } = useContractWrite(
    {
      addressOrName: "0xd91e8f27d377ae964b608bec13547b7d9f8042aa",
      contractInterface: smartContract.abi,
    },
    "setBaseURI"
  );

  const { write: withdraw } = useContractWrite(
    {
      addressOrName: "0xd91e8f27d377ae964b608bec13547b7d9f8042aa",
      contractInterface: smartContract.abi,
    },
    "withdraw"
  );

  return (
    <>
      <Typography>Public sale active</Typography>
      <Switch
        checked={isPublicSaleActive}
        onChange={event =>
          setPublicSaleActive({ args: [event.target.checked] })
        }
      />
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() =>
          setBaseURI({
            args: [`ipfs://${projectData?.project_by_pk?.metadata_cid}/`],
          })
        }
      >
        Set base URI
      </Button>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => withdraw()}>
        Withdraw
      </Button>
    </>
  );
};

export default SmartContractDashboard;
