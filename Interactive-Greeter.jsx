import { useState } from "react";
import "./styles.css";



export default function App() {
  
  let wtf = 'Hello';
  let [greet,setGreet] = useState(wtf);
  function fun(){
    
    let nayanaam = document.getElementById('inputlele').value;
    setGreet(wtf + " " +  nayanaam);
  }


  return (
    <div className="App">
         <h1>{greet}</h1>
         <form>
           <input type='text' id='inputlele' placeholder='naam daale'/>
           <button onClick={fun}>submit</button>
         </form>
    </div>
  );
}
