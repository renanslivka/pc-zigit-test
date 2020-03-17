import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function AppBarCourses(props) {
  const classes = useStyles();
  const logout = () => {
    props.history.push("/");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar style={{ margin: "10px" }}></Avatar>
          <Typography variant="h6" className={classes.title}>
            {props.name}
          </Typography>
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
