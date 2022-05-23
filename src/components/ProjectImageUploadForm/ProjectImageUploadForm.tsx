import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { sortBy, uniq } from "lodash";
import { NFTStorage } from "nft.storage";
import { useMemo, useRef, useState } from "react";
import { DropzoneOptions, DropzoneRef } from "react-dropzone";
import { useParams } from "react-router-dom";
import {
  useGetProjectQuery,
  useUpdateNftMetadataMutation,
} from "../../generated/graphql";
import readFileAsync from "../../utils/readFileAsync";
import Dropzone from "../common/Dropzone/Dropzone";

type Attribute = {
  trait_type: string;
  value: string;
};

type NFTMetadata = {
  name: string;
  description: string;
  attributes: Attribute[];
  image: string;
  external_url: string;
  imageFile: File;
};

const ProjectImageUploadForm = () => {
  const dropzoneRef = useRef<DropzoneRef>(null);
  const [nftMetadata, setNftMetadata] = useState<NFTMetadata[]>([]);
  const [updateNftMetadata] = useUpdateNftMetadataMutation();
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const { id } = useParams();
  const { data } = useGetProjectQuery({
    fetchPolicy: "cache-only",
    variables: { id },
  });

  const traits = useMemo(() => {
    return uniq(
      nftMetadata
        .flatMap(nft => nft.attributes)
        .map(attribute => attribute.trait_type)
    );
  }, [nftMetadata]);

  const handleUpload = async () => {
    const storage = new NFTStorage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY0MjMyOTREZDFGODMxRWJlRWNDNURFNWU2ODk1ODhiMjVGZjAwMTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MjkzODgxMTExNCwibmFtZSI6IlN3ZWVwIn0.PIim12IYdaaPFVDyO9Z3t7ZPh_gKc5m62QCh-OPHGuk",
    });

    setUploading(true);
    try {
      const imageCid = await storage.storeDirectory(
        nftMetadata.map(nft => nft.imageFile)
      );
      const metadataCid = await storage.storeDirectory(
        nftMetadata.map(
          (nft, index) =>
            new File(
              [
                JSON.stringify({
                  name: nft.name,
                  description: nft.description,
                  external_url: nft.external_url,
                  attributes: nft.attributes,
                  image: `ipfs://${imageCid}/${encodeURIComponent(nft.image)}`,
                }),
              ],
              index.toString()
            )
        )
      );
      await updateNftMetadata({ variables: { id, metadata_cid: metadataCid } });
    } catch (error) {
      setUploadError(error.message);
    }
    setUploading(false);
  };

  const handleDrop: DropzoneOptions["onDrop"] = async acceptedFiles => {
    const images = acceptedFiles.filter(
      file => file.type === "image/png" || file.type === "image/jpeg"
    );
    const imagesByName = images.reduce<Record<string, File>>((acc, file) => {
      acc[file.name] = file;
      return acc;
    }, {});

    const files = sortBy(
      acceptedFiles.filter(file => file.type === "application/json"),
      file => parseInt(file.name, 10)
    );
    const metadata: NFTMetadata[] = (
      await Promise.all(files.map(readFileAsync))
    ).flatMap(result => JSON.parse(result));

    setNftMetadata(
      metadata.map((nft, index) => ({
        ...nft,
        imageFile: imagesByName[nft.image],
        id: index,
      }))
    );
  };

  return (
    <Box sx={{ mx: 8 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Upload media
      </Typography>
      <Divider />
      <Stack spacing={2} sx={{ mt: 2 }}>
        {nftMetadata.length > 0 ? (
          <>
            <DataGrid
              autoHeight
              columns={[
                { field: "id", headerName: "Token ID" },
                { field: "name", headerName: "Name", width: 200 },
                { field: "description", headerName: "Description", width: 300 },
                {
                  field: "imageFile",
                  headerName: "Image",
                  renderCell: params => (
                    <Box
                      component="img"
                      src={URL.createObjectURL(params.value)}
                      sx={{
                        objectFit: "contain",
                        width: 40,
                        height: 40,
                        borderRadius: 1,
                        border: 1,
                        borderColor: theme => theme.palette.divider,
                      }}
                    />
                  ),
                },
                ...(traits.map(trait => ({
                  field: trait,
                  headerName: trait,
                  valueGetter: params =>
                    params.row.attributes.find(
                      attribute => attribute.trait_type === trait
                    )?.value,
                })) as GridColumns<NFTMetadata>),
              ]}
              rows={nftMetadata}
            />
            <Button onClick={() => setNftMetadata([])}>Reset</Button>
            <LoadingButton
              loading={uploading}
              variant="contained"
              onClick={handleUpload}
            >
              Upload
            </LoadingButton>
          </>
        ) : (
          <Dropzone
            ref={dropzoneRef}
            label="Upload images"
            onDrop={handleDrop}
            ContainerProps={{ sx: { borderRadius: 1 } }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default ProjectImageUploadForm;
