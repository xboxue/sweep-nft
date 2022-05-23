import { Box } from "@mui/material";
import { DataGrid, DataGridProps, GridColumns } from "@mui/x-data-grid";
import { NFTMetadata } from "../ProjectImageUploadForm/ProjectImageUploadForm";

interface Props extends Omit<DataGridProps<NFTMetadata>, "columns"> {
  traits: string[];
}

const NFTMetadataTable = ({ traits, ...props }: Props) => {
  return (
    <DataGrid
      autoHeight
      initialState={{
        pagination: {
          pageSize: 10,
        },
      }}
      rowsPerPageOptions={[10, 25, 50, 100]}
      {...props}
      columns={[
        { field: "token_id", headerName: "Token ID" },
        { field: "name", headerName: "Name", width: 200 },
        { field: "description", headerName: "Description", width: 300 },
        {
          field: "image",
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
        ...(traits.map(trait => ({
          field: trait,
          headerName: trait,
          valueGetter: params =>
            params.row.attributes.find(
              attribute => attribute.trait_type === trait
            )?.value,
        })) as GridColumns<NFTMetadata>),
      ]}
    />
  );
};

export default NFTMetadataTable;
