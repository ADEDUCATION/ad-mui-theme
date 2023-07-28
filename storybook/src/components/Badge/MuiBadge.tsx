import { Badge, BadgeProps } from "@mui/material";
import { MuiOmits } from "../../utils";

const MuiBadge = ({ ...rest }: Omit<BadgeProps, MuiOmits>) => {
  return (
    <Badge badgeContent={4} color="primary" {...rest}>
      <div>Badge</div>
    </Badge>
  );
};

export default MuiBadge;
