import React from 'react'
import './App.css';


function MainComponent(props) {
    return (
        <main>
            {/* <div className="advice-card" style={{height:"250px",width:"800px",backgroundColor:"red",marginLeft:"300px",marginTop:"50px",borderRadius:"20px"}}>  */}
                <center><button className="btn" onClick={props.GetAdvice} style={{marginBottom:"20px",fontFamily:"Poppins,sans-serif",padding:"10px",backgroundColor:"#023047",color:"white"}}>Enrich more?</button></center>
                <h3 style={{width:"50%",marginLeft:"250px",backgroundColor:"#023047", padding:"100px",textAlign:"center",color:"#8ecae6",borderRadius:"20px",fontSize:"2rem",fontFamily:"Dancing Script, cursive"}}>{props.advice}</h3>
            {/* </div> */}
            
        </main>
    )
}

export default MainComponent;
