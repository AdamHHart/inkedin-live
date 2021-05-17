import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingBottom: "50px",
    paddingTop: "50px",
  },
  rootUserInfo: {
    // minWidth: 275,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "550",
    height: 392,
    background: "lavender",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    color: "lavender",
  },
  title: {
    fontSize: 24,
    color: "black",
    fontStyle: "bold",
  },
  username: {
    fontSize: 20,
    color: "black",
    paddingBottom: "25px",
  },
  description: {
    fontSize: 14,
    color: "black",
    paddingBottom: "25px",
  },
  pos: {
    marginBottom: 12,
    color: "lavender",
  },
  link: {
    color: "lavender",
  },
  websiteLink: {
    padding: "20px",
  },
  form: {
    color: "white",
  },
}));

export { useStyles };
