import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Provider } from "react-redux";
import PostMessages from "./components/PostMessages";
import { store } from "./actions/store";
import {Helmet} from 'react-helmet';
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";

function App() {
  return (
    <div>
      <div >
            
            <Helmet>
                <style>{'body { background-color: cyan; }'}</style>
            </Helmet>
                 
        </div>
      <Router>
        <Provider store={store}>
            <Container maxWidth="lg">
              <AppBar position="static" color="inherit">
                <Typography style={{color: "green"}}                     
                     variant="h2"
                     align="center">
                     Contact Book
                </Typography>
               </AppBar>
               <Route exact path="/"  component={PostMessages} />
              <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
            </Container>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
