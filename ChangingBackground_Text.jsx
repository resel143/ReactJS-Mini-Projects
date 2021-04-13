import { useState } from "react";
import "./styles.css";



export default function App() {
  
  let [greet, updategreet] = useState('Dont Click!');
  let purple = "yellow";
  let [bg,setBg] = useState(purple);
  function fun(){
    updategreet('WTF?');
    let colorwa = 'red';
    setBg(colorwa);
  }
  function nofun(){
    updategreet('chalajab**k');
    let colorwa = 'lightgreen';
    setBg(colorwa);
  }



  return (
    <div className="App" style={{backgroundColor:bg, height:'250px'}}>
        <button onClick={fun} onDoubleClick = {nofun}> <h1>{greet}</h1> </button>
    </div>
  );
}
