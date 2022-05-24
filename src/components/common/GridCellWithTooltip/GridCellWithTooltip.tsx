import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import { useRef } from "react";

interface Props {
  value: string;
}

const hasOverflow = (element: Element): boolean =>
  element.scrollHeight > element.clientHeight ||
  element.scrollWidth > element.clientWidth;

const GridCellWithTooltip = ({ value }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <Tooltip title={ref.current && hasOverflow(ref.current) ? value : ""}>
      <Box
        ref={ref}
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {value}
      </Box>
    </Tooltip>
  );
};

export default GridCellWithTooltip;
