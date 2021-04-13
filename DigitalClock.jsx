import { useState } from "react";
import "./styles.css";



export default function App() {
  var time = new Date().toLocaleTimeString();
  const [i, setState] = useState(time);
  
setInterval(()=>{
  var time = new Date().toLocaleTimeString();
    setState(time);
},1000);
  return (
    <div className="App">
        <h1>{i}</h1>
      
    </div>
  );
}
