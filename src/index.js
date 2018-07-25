import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from './Clock';
import CounterButton from './CounterButton';

const reactElement = (
    <div>
        <App title="Hello"/>
        <CounterButton counter={10}/>
        <Clock date={new Date()}/>
        <App title="World"/>
        <App title="React"/>
    </div>
);
ReactDOM.render(reactElement, document.getElementById('root'));
registerServiceWorker();
