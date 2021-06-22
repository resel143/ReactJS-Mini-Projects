import React, {Component, useState, useEffect} from 'react';
import { render } from 'react-dom';

const App = ()=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `Clicked ${count} times`;

    })

    let increment = () =>{
        setCount(count+1);
    }
   
    return (
        <div>
            <h1>Hello Hi Bello Bye</h1>
            <button onClick={increment}>Clicked</button>
        </div>
    );
}


// class App extends Component {
//     state = {
//         count: 0
//     }
//     increment= ()=>{
//         this.setState({count: this.state.count + 1});
//     }
//     componentDidMount(){
//             document.title = `Clicked ${this.state.count} times`;

//     }
//     componentDidUpdate(){
//         document.title = `Clicked ${this.state.count} times`
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Reshul.com</h2>
//                 <button onClick = {this.increment}> Clicked {this.state.count} times</button>
//             </div>
//         );
//     }
// }

export default App;
