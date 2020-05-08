import React from "react";
import ReactDOM from "react-dom";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";

// Icons and fonts css
import "font-awesome/css/font-awesome.css";
import "typeface-lobster";
import "typeface-open-sans";

// Redux
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from 'redux';

// BrowserRouter
import { BrowserRouter } from "react-router-dom";

// Main App
import App from "./App";
import "./App.css";


// Collection of data
import { CAMPSITES } from './shared/campsites';
import { COMMENTS } from './shared/comments';
import { PARTNERS } from './shared/partners';
import { PROMOTIONS } from './shared/promotions';

// Initial state
const state = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

// A function that returns a new state
const setState = (state = state, action) => {
    return state;
};

const AppWithRouterAndRedux = () => (
  <ReduxProvider store={ createStore( setState, state ) }>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </ReduxProvider>
);

ReactDOM.render(<AppWithRouterAndRedux />, document.getElementById("root"));
