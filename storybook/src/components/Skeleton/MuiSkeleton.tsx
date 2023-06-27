import { Skeleton, SkeletonProps } from "@mui/material";

const MuiSkeleton = ({ ...rest }: SkeletonProps) => {
  return <Skeleton width={210} height={118} {...rest} />;
};

export default MuiSkeleton;
