import { Box } from "@mui/material";
import { DataGrid, DataGridProps, GridColumns } from "@mui/x-data-grid";
import GridCellWithImage from "../common/GridCellWithImage/GridCellWithImage";
import GridCellWithTooltip from "../common/GridCellWithTooltip/GridCellWithTooltip";
import { NFTMetadata } from "../ProjectImageUploadForm/ProjectImageUploadForm";

interface Props extends Omit<DataGridProps<NFTMetadata>, "columns"> {
  traits?: string[];
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
      rowsPerPageOptions={[10, 25, 50]}
      {...props}
      columns={[
        { field: "token_id", headerName: "Token ID", width: 80 },
        {
          field: "name",
          headerName: "Name",
          width: 200,
          renderCell: params => <GridCellWithTooltip value={params.value} />,
        },
        {
          field: "description",
          headerName: "Description",
          width: 300,
          renderCell: params => <GridCellWithTooltip value={params.value} />,
        },
        {
          field: "image",
          headerName: "Image",
          renderCell: params => <GridCellWithImage src={params.value} />,
        },
        ...((traits?.map(trait => ({
          field: trait,
          headerName: trait,
          valueGetter: params =>
            params.row.attributes.find(
              attribute => attribute.trait_type === trait
            )?.value,
          renderCell: params => <GridCellWithTooltip value={params.value} />,
        })) as GridColumns<NFTMetadata>) || []),
      ]}
    />
  );
};

export default NFTMetadataTable;
