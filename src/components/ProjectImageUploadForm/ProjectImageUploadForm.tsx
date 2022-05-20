import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NFTStorage } from "nft.storage";
import { useRef, useState } from "react";
import { DropzoneOptions, DropzoneRef } from "react-dropzone";
import AppHeader from "../AppHeader/AppHeader";
import Dropzone from "../common/Dropzone/Dropzone";

type NftMetadata = { name: string; description: string; image: string };

const ProjectImageUploadForm = () => {
  const dropzoneRef = useRef<DropzoneRef>(null);
  const [nfts, setNfts] = useState<NftMetadata[]>([]);

  const handleUpload = () => {
    const storage = new NFTStorage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY0MjMyOTREZDFGODMxRWJlRWNDNURFNWU2ODk1ODhiMjVGZjAwMTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MjkzODgxMTExNCwibmFtZSI6IlN3ZWVwIn0.PIim12IYdaaPFVDyO9Z3t7ZPh_gKc5m62QCh-OPHGuk",
    });
  };

  const handleDrop: DropzoneOptions["onDrop"] = async acceptedFiles => {
    const images = acceptedFiles.filter(
      file => file.type === "image/png" || file.type === "image/jpeg"
    );
    const imageUrls = images.reduce<Record<string, string>>((acc, file) => {
      acc[file.name] = URL.createObjectURL(file);
      return acc;
    }, {});

    const file = acceptedFiles.find(file => file.type === "application/json");
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", event => {
        const result = reader.result as string;
        setNfts(
          (JSON.parse(result) as NftMetadata[]).map((nft, index) => ({
            ...nft,
            imageUrl: imageUrls[nft.image],
            id: index,
          }))
        );
      });
      reader.readAsText(file);
    }
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Upload media
      </Typography>
      <Divider />
      <Stack spacing={2} sx={{ mt: 2 }}>
        {nfts.length > 0 ? (
          <>
            <DataGrid
              autoHeight
              columns={[
                { field: "id", headerName: "Token ID" },
                { field: "name", headerName: "Name", width: 200 },
                { field: "description", headerName: "Description", width: 300 },
                {
                  field: "imageUrl",
                  headerName: "Image",
                  renderCell: params => (
                    <Box
                      component="img"
                      src={params.value}
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
              ]}
              rows={nfts}
            />
            <Button onClick={() => setNfts([])}>Reset</Button>
            <Button onClick={handleUpload}>Upload</Button>
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
    </>
  );
};

export default ProjectImageUploadForm;
