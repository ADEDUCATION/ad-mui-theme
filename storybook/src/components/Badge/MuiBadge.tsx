import { Badge, BadgeProps } from "@mui/material";

const MuiBadge = ({ ...rest }: BadgeProps) => {
  return (
    <Badge badgeContent={4} color="primary" {...rest}>
      <div>Badge</div>
    </Badge>
  );
};

export default MuiBadge;
