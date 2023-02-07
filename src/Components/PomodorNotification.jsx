import { forwardRef } from "react";

import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const PomodoroNotification = ({
  showAlert,
  message,
  handleAlertClose,
}) => {
  return (
    <Snackbar
      open={showAlert}
      autoHideDuration={5000}
      onClose={handleAlertClose}
    >
      <Alert
        onClose={handleAlertClose}
        severity="success"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
