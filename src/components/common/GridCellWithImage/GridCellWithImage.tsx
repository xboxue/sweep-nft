import { Popover } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

interface Props {
  src: string;
}

const GridCellWithTooltip = ({ src }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const open = !!anchorEl;

  const handlePopoverOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Popover
        id="image-preview-popover"
        sx={{ pointerEvents: "none", lineHeight: 0 }}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <Box component="img" src={src} sx={{ width: 200 }} />
      </Popover>
      <Box
        component="img"
        src={src}
        sx={{
          objectFit: "contain",
          width: 40,
          height: 40,
          borderRadius: 1,
          border: 1,
          borderColor: theme => theme.palette.divider,
        }}
        aria-owns={open ? "image-preview-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
    </>
  );
};

export default GridCellWithTooltip;
