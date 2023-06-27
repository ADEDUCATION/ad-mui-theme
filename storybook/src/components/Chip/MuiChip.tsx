import { Chip, ChipProps } from "@mui/material";
import { MuiOmits } from "../../utils";

type ChipBaseProps = ChipProps;

export interface MuiChipProps extends Omit<ChipBaseProps, MuiOmits> {
  label: string;
}

export const MuiChip = ({ label, ...rest }: MuiChipProps) => <Chip label={label} {...rest} />;
