import React,{useState} from 'react';
import Header from './Header';
import MainComponent from './MainComponent';

import './App.css';
const App = ()=>{

  const [advice,SetAdvice] = useState("");

  const GetAdvice= async() =>{
    const temp= await fetch(`https://api.adviceslip.com/advice`).then(res =>res.json());
    console.log(temp.slip.advice);
    SetAdvice(temp.slip.advice);
  }

  GetAdvice();

  return (
    <div>
      <div>
        <Header />
        <MainComponent advice = {advice} GetAdvice={GetAdvice} SetAdvice={SetAdvice}/>
      </div>
    </div>
  );
}

export default App;