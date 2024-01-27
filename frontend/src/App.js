import React from "react";
import "./App.css";
import Login from "./Login";
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, Toolbar, TableContainer, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import PhotoCamera from '@material-ui/icons';
import useStyles from './styles';

const serviceList = ["Service 1", "Service 2", "Service 3"];

function App() {
  
  //uses the useState hook to set the initial state of the APP component to false at the beginning,
  //loggedIn = state variable of the initial state of the component
  //setLoggedIn = function that can help us update the state of the component (changing thevalue of login by inovking it)
  //React.useState hook sets loggedIn to false
  const [loggedIn, setLoggedIn] = React.useState(false);
  const classes = useStyles();

  //returns JSX based on the value of the state
  return loggedIn ? (
  //If the state changes to true, loggedIn changes to true and displays the following JSX to display the User page
    <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6">
          Welcome Back!
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Card className={classes.card} color="textPrimary">
          <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5">
                  {localStorage.getItem("Username")}
              </Typography>
              <Typography>
                  Password: {localStorage.getItem("Password")}
              </Typography>
              <Typography>
                  Favorite Food: {localStorage.getItem("meal")}
              </Typography>
            </CardContent>
        </Card>
      </Container>
    </main>
  </>

    
  ) : ( 

    //If the state (value of logged in) is still false, the Login component is invoked
    //Login component returns the JSX displaying the login page UI
    //passes "setLoggedIn:" as a prop, if user passes in correct user/password, Login invokes the prop and sets login=True
    <Login setLoggedIn={setLoggedIn} />
    
  // Storing data in localstorage can be an effective way to cache data. This may come with some security issues.
  //<h1>{localStorage.getItem("loginToken")}</h1>
  );


}

export default App;
 