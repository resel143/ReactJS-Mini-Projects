import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Reshul Wate Singning in!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//import React from 'react';

/*export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentWillMount() {
        setInterval(() => this.setState({ date: new Date() }), 1000);
    }

    render () {
        return (
            <div style={{ fontSize: 40 }}>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}*/