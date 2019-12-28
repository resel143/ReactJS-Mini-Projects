import React,{Component} from 'react';
import ReactDom from 'react-dom';
import App from './Demo.css';

const Demo=({name})=>{
    return <div className="maindiv">
    <h1>Hello {name}!!!</h1>
            <p>Welcome to my Palace!!</p>
        </div>
}

export default Demo;