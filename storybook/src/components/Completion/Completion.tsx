import { TaskAlt } from "@mui/icons-material";
import { CircularProgress, Paper } from "@mui/material";

const getBgColor = (value: number) => {
  if (value > 10) return "error.main";
  else return "warning.main";
  //   else return 'yellow !important';
};

const Completion = ({ value }: { value: number }) => {
  return (
    <div>
      {value > 0 ? (
        <Paper
          elevation={0}
          sx={{
            bgcolor: getBgColor(value),
            p: 0.3,
            px: 0.6,
            // pl: 0.3,
            // pr: 0.3,
            color: "white",
            fontSize: 11,
            minWidth: 18,
          }}
        >{`${value}`}</Paper>
      ) : value === 0 ? (
        <div style={{ marginTop: 5 }}>
          <TaskAlt sx={{ fontSize: 18 }} />
        </div>
      ) : (
        <CircularProgress size={15} sx={{ mt: 0.3 }} variant="indeterminate" />
      )}
    </div>
  );
};

export default Completion;
