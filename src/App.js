import React from 'react';

import './App.css';
import '../node_modules/bootswatch/dist/darkly/bootstrap.min.css';
import Routes from './routes'
import {
    BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './Redux/Store/configureStore';


const store = configureStore();

function App() {
    return ( <
        div className = "App" >
        <
        Provider store = { store } >
        <
        BrowserRouter >
        <
        Routes / >
        <
        /BrowserRouter> <
        /Provider> <
        /div>
    );
}

export default App;