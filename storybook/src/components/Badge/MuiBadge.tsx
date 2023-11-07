import { Badge, BadgeProps } from "@mui/material";
import { MuiOmits } from "../../utils";

export interface MuiBadgeProps extends Omit<BadgeProps, MuiOmits> {
  content: string;
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
}

const MuiBadge = ({
  content,
  vertical,
  horizontal,
  ...rest
}: MuiBadgeProps) => {
  return (
    <Badge
      badgeContent={content}
      anchorOrigin={{ vertical, horizontal }}
      {...rest}
    >
      <div>Badge</div>
    </Badge>
  );
};

export default MuiBadge;
