import { useReducer, useState } from "react";

const Home = () => {

    const initialValue = {count: 0};
    const [num, setNum] = useState(0);
    const [state, dispatch] = useReducer(handleChange, initialValue);
    


    function handleChange(state, action){
        switch (action.type){
            case 'ADD':{
                return {...state, count: state.count + 1}
            }
            case 'SUBS': {
                return {...state, count: state.count - 1}
            }
            case 'RESET':{
                return {count: 0}
            }
            case 'CUSTOM': {
                return {...state, count: state.count + num}
            }
            case 'SET':{
                return {...state, count: action.payload }
            }
            default : {
                return state;
            }
        }
    }

    return <>
        <h1>Counter: {state.count}</h1>
        <button onClick={()=> dispatch({type: 'ADD'})}>ADD</button>
        <button onClick={()=> dispatch({type: 'SUBS'})}>SUBS</button>
        <button onClick={()=> dispatch({type: 'RESET'})}>RESET</button>
        <input type="number" 
            onChange={(e)=>{
                setNum(Number(e.target.value));
            }}
        ></input>
        <button onClick={()=>dispatch({type: 'CUSTOM'})}>CUSTOM</button>
        <button onClick={()=>dispatch({ type: "SET", payload: 10 })}>SET</button>

    </>
}


export default Home;
