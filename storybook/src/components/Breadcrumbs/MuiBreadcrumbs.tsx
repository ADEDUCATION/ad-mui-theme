import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";

const MuiBreadcrumbs = () => {
  const [path, setPath] = useState([
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Breadcrumbs" },
  ]);
  return (
    <Breadcrumbs
      separator={
        <NavigateNextIcon sx={{ color: "grey.400" }} fontSize="small" />
      }
      aria-label="breadcrumb"
    >
      {path?.map((el) =>
        el.href ? (
          <Link>
            <Typography
              variant="subtitleBold"
              sx={{
                color: "grey.400",
                textDecoration: "underline",
                transition: "color 0.2s ease-in-out",
                "&:hover": { color: "primary.light" },
              }}
            >
              {el.name}
            </Typography>
          </Link>
        ) : (
          <Typography key={el.name} variant="subtitleBold" color="grey.400">
            {el.name}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};

export default MuiBreadcrumbs;
