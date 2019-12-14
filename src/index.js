import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';

// Icons and fonts css
import 'font-awesome/css/font-awesome.css';
import 'typeface-lobster';
import 'typeface-open-sans';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

//BrowserRouter
import { BrowserRouter } from 'react-router-dom';

// Main App
import App from './App';
import './App.css';

const newReduxStore = ConfigureStore();

const AppWithRouterAndRedux = () => 
<BrowserRouter>
    <ReduxProvider store = { newReduxStore }>
        <App />
    </ReduxProvider>
</BrowserRouter>

ReactDOM.render(<AppWithRouterAndRedux />, document.getElementById('root'));
