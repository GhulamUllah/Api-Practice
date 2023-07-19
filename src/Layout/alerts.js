import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { removealert } from "../Redux/reducer/Alertaction";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alertss() {
  let dispatch=useDispatch()
  const alerts = useSelector((state) => state.alert.alerts);
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      dispatch(removealert(alerts.id))
    }
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {alerts?.map((a) => (
        <Snackbar
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity={a?.type}
            sx={{ width: "100%" }}
          >
            {a?.msg}
          </Alert>
        </Snackbar>
      ))}
    </Stack>
  );
}
