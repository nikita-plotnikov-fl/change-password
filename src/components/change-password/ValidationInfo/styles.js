export const styles = (theme) => ({
  card: {
    [theme.breakpoints.up("sm")]: {
      padding: "5px",
    },

    [theme.breakpoints.up("md")]: {
      padding: "15px",
    },
  },
  paper: {
    [theme.breakpoints.up("sm")]: {
      padding: "30px 0",
      boxShadow: "0 0 50px rgba(0,0,0,0.1)",
      borderRadius: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
    },
  },
  paper_body: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  characters: {
    color: "#2CC468",
    fontWeight: "bold",
    padding: "10px",
    fontSize: "20px",
  },
  lowercase: {
    color: "#2A60CA",
    fontWeight: "bold",
    padding: "10px",
    fontSize: "20px",
  },
  uppercase: {
    color: "#E37251",
    fontWeight: "bold",
    padding: "10px",
    fontSize: "20px",
  },
  numbers: {
    color: "#0CC4D1",
    fontWeight: "bold",
    padding: "10px",
    fontSize: "20px",
  },
});
