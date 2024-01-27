import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import { createTheme, ThemeProvider } from '@material-ui/core';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";




//const cors = require('cors')
const theme = createTheme({
    palette: {
      primary: {
        main: "#013e87",//Blue
      },
      secondary: {
        main: "#2e74c9",//Lighter blue
      },
    },
    typography: {
      h1: {
        fontSize: "3rem",
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.75rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
    },
  })

  // ReactDOM.render(
  //   // <RouterProvider router = {router}/>
    
  //   <RouterProvider router={router} />
  // );
ReactDOM.render(
  // <RouterProvider router = {router}/>
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//App.use(cors())

//<ThemeProvider theme ={theme}>
//<App />
//</ThemeProvider>
//</React.StrictMode>,


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
