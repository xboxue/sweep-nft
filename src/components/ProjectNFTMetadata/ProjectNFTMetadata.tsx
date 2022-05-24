import { Box, Divider, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetProjectNftMetadataQuery } from "../../generated/graphql";
import NFTMetadataTable from "../NFTMetadataTable/NFTMetadataTable";

const ProjectNFTMetadata = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetProjectNftMetadataQuery({
    variables: {
      project_id: id,
    },
  });

  return (
    <Box sx={{ mx: 8 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Upload media
      </Typography>
      <Divider />
      <Stack spacing={2} sx={{ mt: 2 }}>
        <NFTMetadataTable
          loading={loading}
          rows={
            data?.nft_metadata?.map(nft => ({
              ...nft,
              image: nft.image.replace(
                "ipfs://",
                "https://nftstorage.link/ipfs/"
              ),
              attributes: nft.nft_attributes,
            })) || []
          }
          traits={data?.nft_attribute_aggregate.nodes.map(
            node => node.trait_type
          )}
        />
      </Stack>
    </Box>
  );
};

export default ProjectNFTMetadata;
