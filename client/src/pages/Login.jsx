import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import { Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Formik } from "formik";
import * as Yup from "yup";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    "& .MuiInput-underline:before": {
      borderBottom: "1.2px solid rgba(0, 0, 0, 0.2)"
    }
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: "#000000",
    fontWeight: 500
  },
  heroText: {
    fontSize: 26,
    textAlign: "center",
    color: "white",
    marginTop: 30,
    maxWidth: 300
  },
  overlay: {
    backgroundImage:
      "linear-gradient(180deg, rgb(58,141,255, 0.75) 0%, rgb(134,185,255, 0.75) 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexDirection: "column",
    minHeight: "100vh",
    paddingBottom: 145,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    bgcolor: "background.paper",
    minHeight: "100vh",
    paddingTop: 23
  },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: 5,
    filter: "drop-shadow(0px 2px 6px rgba(74,106,149,0.2))",
    backgroundColor: "#ffffff",
    color: "#3a8dff",
    boxShadow: "none",
    marginRight: 35
  },
  noAccBtn: {
    fontSize: 14,
    color: "#b0b0b0",
    fontWeight: 400,
    textAlign: "center",
    marginRight: 21,
    whiteSpace: "nowrap"
  },
  image: {
    backgroundImage: "url(./images/bg-img.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  box: {
    padding: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
    maxWidth: 900,
    margin: "auto"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  label: { fontSize: 19, color: "rgb(0,0,0,0.4)", paddingLeft: "5px" },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: 3,
    marginTop: 49,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#3a8dff"
  },
  inputs: {
    marginTop: ".8rem",
    height: "2rem",
    padding: "5px"
  },
  link: { textDecoration: "none", display: "flex", flexWrap: "nowrap" },
  forgot: {
    paddingRight: 10,
    color: "#3a8dff"
  }
}));

// Login middleware placeholder
function useLogin() {
  const history = useHistory();

  const login = async (email, password) => {
    console.log(email, password);
    const res = await fetch(
      `/auth/login?email=${email}&password=${password}`
    ).then(res => res.json());
    localStorage.setItem("user", res.user);
    localStorage.setItem("token", res.token);
    history.push("/dashboard");
  };
  return login;
}

export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const history = useHistory();

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) history.push("/dashboard");
  }, []);

  const login = useLogin();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image}>
        <Box className={classes.overlay}>
          <Hidden xsDown>
            <img width={67} src="/images/chatBubble.png" />
            <Hidden smDown>
              <p className={classes.heroText}>
                Converse with anyone with any language
              </p>
            </Hidden>
          </Hidden>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box className={classes.buttonHeader}>
          <Box p={1} alignSelf="flex-end" alignItems="center">
            <Link to="/signup" className={classes.link}>
              <Button className={classes.noAccBtn}>
                Don't have an account?
              </Button>
              <Button
                color="background"
                className={classes.accBtn}
                variant="contained"
              >
                Create account
              </Button>
            </Link>
          </Box>

          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <p className={classes.welcome} component="h1" variant="h5">
                  Welcome back!
                </p>
              </Grid>
            </Grid>
            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .required("Email is required")
                  .email("Email is not valid"),
                password: Yup.string()
                  .required("Password is required")
                  .max(100, "Password is too long")
                  .min(6, "Password too short")
              })}
              onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
                setStatus();
                login(email, password).then(
                  () => {
                    // useHistory push to chat
                    console.log(email, password);
                    return;
                  },
                  error => {
                    setSubmitting(false);
                    setStatus(error);
                  }
                );
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <form
                  onSubmit={handleSubmit}
                  className={classes.form}
                  noValidate
                >
                  <TextField
                    id="email"
                    label={<p className={classes.label}>E-mail address</p>}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{ classes: { input: classes.inputs } }}
                    name="email"
                    autoComplete="email"
                    autoFocus
                    helperText={touched.email ? errors.email : ""}
                    error={touched.email && Boolean(errors.email)}
                    value={values.email}
                    onChange={handleChange}
                  />
                  <TextField
                    id="password"
                    label={
                      <Typography className={classes.label}>
                        Password
                      </Typography>
                    }
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      classes: { input: classes.inputs },
                      endAdornment: (
                        <Typography className={classes.forgot}>
                          Forgot?
                        </Typography>
                      )
                    }}
                    type="password"
                    autoComplete="current-password"
                    helperText={touched.password ? errors.password : ""}
                    error={touched.password && Boolean(errors.password)}
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                  />

                  <Box textAlign="center">
                    <Button
                      type="submit"
                      size="large"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Login
                    </Button>
                  </Box>

                  <div style={{ height: 95 }} />
                </form>
              )}
            </Formik>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Login failed"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </Grid>
    </Grid>
  );
}
