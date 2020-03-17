import React, { useState, useEffect } from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import AppBarCourses from "./AppBarCourses";
import Courses from "./Courses";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function CoursesPage(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [user, setuser] = useState(undefined);
  const [isSignedIn, setisSignedIn] = useState(false);

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")));
    setisSignedIn(localStorage.getItem("isSignedIn"));
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    isSignedIn &&
    user && (
      <div className={classes.root}>
        <AppBarCourses
          isSignedIn={isSignedIn}
          name={user.UserName}
          {...props}
        />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message! Hello {user.UserName}
          </Alert>
        </Snackbar>
        <Courses token={user.Token} userid={user.UserID} />
      </div>
    )
  );
}
