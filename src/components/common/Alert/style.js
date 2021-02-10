export const styles = (theme) => ({
  alert: {
    color: "white",
    padding: "10px, 40px",
    textAlign: "center",
  },
  success: {
    backgroundColor: "#43A047",
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
});
