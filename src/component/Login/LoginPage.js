import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  zigit_logo: {
    width: "60%",
    height: "auto",
    marginTop: theme.spacing(1)
  }
}));

export default function LoginPage(props) {
  const classes = useStyles();

  /* const [isBadUsername, setisBadUsername] = useState(true);
  const [isBadPassword, setisBadPassword] = useState(false); */
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState();

  const onUsernameChange = event => {
    setusername(event.target.value);
    //event.target.value < 5 ? setisBadUsername(true) : setisBadUsername(false);
  };

  const onPasswordChange = event => {
    setpassword(event.target.value);
    //event.target.value < 5 ? setisBadPassword(true) : setisBadPassword(false);
  };

  const moveToSite = event => {
    event.preventDefault();
    if (username.length > 4 && password.length > 3) {
      fetch(
        "http://private-2a49c-tomax.apiary-mock.com/DoLogin/" +
          username +
          "/" +
          password
      )
        .then(response => response.json())
        .then(users => {
          setdata(users);
          props.onSubmitButton(users);
          localStorage.setItem("user", JSON.stringify(users));
          props.history.push("/CoursesPage");
          console.log(users);
        });
    } else {
      alert(
        "password or username is incorrect must be with atlist 4 charcater"
      );
    }
  };
  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <img
          className={classes.zigit_logo}
          src="https://www.zigit.mobi/Zigit/img/logo/zigit_logo_wide.png"
          alt="zigit"
        />
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            //error={isBadUsername}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="username"
            onChange={onUsernameChange}
            //helperText={isBadUsername ? "at list 5 character" : ""}
          />
          <TextField
            //error={isBadPassword}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onPasswordChange}
            //helperText={isBadPassword ? "at list 5 character" : ""}
          />
          {/*      <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={moveToSite}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Renan Slivka </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
