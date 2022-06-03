import { Box, Button, Divider, Skeleton, Typography } from "@mui/material";
import { ContractFactory } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { useParams } from "react-router-dom";
import { useConnect, useSigner } from "wagmi";
import SmartContractDashboard from "../../components/SmartContractDashboard/SmartContractDashboard";
import smartContract from "../../contracts/MyNFT.json";
import {
  useGetProjectQuery,
  useGetProjectSmartContractSettingsQuery,
} from "../../generated/graphql";

const ProjectDeploySmartContractPage = () => {
  const { connect } = useConnect();

  const { data: signer, isError, isLoading } = useSigner();

  const { id } = useParams();
  const { data: projectData } = useGetProjectQuery({
    variables: { id },
    fetchPolicy: "cache-only",
  });
  const { data, loading, error } = useGetProjectSmartContractSettingsQuery({
    variables: { project_id: id },
  });

  const handleDeploy = async () => {
    const factory = new ContractFactory(
      smartContract.abi,
      smartContract.bytecode,
      signer
    );

    await factory.deploy(
      projectData?.project_by_pk?.name,
      projectData?.project_by_pk?.symbol,
      data?.nft_metadata_aggregate.aggregate?.count,
      data?.smart_contract_settings[0].presale_token_limit,
      parseEther(data?.smart_contract_settings[0].presale_mint_price || "0"),
      parseEther(data?.smart_contract_settings[0].mint_price || "0")
    );
  };

  if (loading) return <Skeleton />;

  return (
    <Box sx={{ maxWidth: 640, mx: "auto" }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Deploy smart contract
      </Typography>
      <Divider />
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => connect()}>
        Connect
      </Button>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleDeploy}>
        Deploy
      </Button>
      <SmartContractDashboard />
    </Box>
  );
};

export default ProjectDeploySmartContractPage;
