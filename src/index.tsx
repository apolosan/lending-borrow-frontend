import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {InitContract, initContract} from './utils';

initContract().then((props: InitContract) => {
    ReactDOM.render(
        <React.StrictMode>
            <App { ...props } />
        </React.StrictMode>,
        document.getElementById('root')
    );
})
