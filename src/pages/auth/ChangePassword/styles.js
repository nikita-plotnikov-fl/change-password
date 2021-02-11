export const styles = (theme) => ({
  root: {
    height: "100%",
  },
  paper: {
    borderRadius: "10px",
    [theme.breakpoints.up("xl")]: {
      minWidth: "1150px",
    },
  },
  paper_header: {
    textAlign: "center",
    fontWeight: "500",
    color: "#100A36",
    paddingTop: "40px",
    fontSize: "35px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      margin: "0 !important",
      textAlign: "left",
      padding: "15px",
    },
  },
  body_item: {
    padding: "20px 25px 20px 35px",
    [theme.breakpoints.down("xs")]: {
      padding: "15px 20px",
    },
  },
  button: {
    margin: "20px 0",
    background: "#0C44E1",
    color: "white",
    "&:hover": {
      background: "#0935ad",
    },
  },
  button_text: {
    padding: "4px 28px",
    fontSize: "13px",
  },
  button_icon: {
    fontSize: "13px",
  },
  validation: {
    fontSize: "16px",
    padding: "20px 25px 20px 35px",
    marginTop: "-30px",
    [theme.breakpoints.up("md")]: {
      minWidth: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      boxShadow: "0 0 50px rgba(0,0,0,0.1)",
      borderRadius: "5px",
      marginTop: "15px",
    },
  },
});
