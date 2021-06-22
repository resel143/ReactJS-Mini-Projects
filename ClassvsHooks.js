import React, {Component, useState} from 'react';
import { render } from 'react-dom';

const App = () =>{
    const [count, setCount] = useState(0);
    let increment = ()=>{
        setCount(count+1);
    }
    
        return (
            <div>
                <h1>Welcome to React Button</h1>
                <button onClick = {increment}>Clicked {count} times</button>
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
