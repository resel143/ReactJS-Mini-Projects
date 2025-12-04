import { useReducer } from "react";

const Home = () => {

    const initialValue = {
        firstName: "",
        lastName:"",
        designation:"",
        email:"",
        mobile:""
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Final api payload`, state)
    }

    const [state, dispatch] = useReducer(formControl, initialValue);

    function formControl (state, action) {
        switch(action.type){
            case 'firstname':{
                return {...state, firstName: action.payload}
            }
            case 'lastname':{
                return {...state, lastName: action.payload}
            }
            case 'designation':{
                return {...state, designation: action.payload}
            }
            case 'email':{
                return {...state, email: action.payload}
            }
            case 'mobile':{
                return {...state, mobile: action.payload}
            }
            default : return state;
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter First Name" onChange={(e) => dispatch({type:'firstname', payload:e.target.value})}/>
                <input type="text" placeholder="Enter Last Name" onChange={(e) => dispatch({type:'lastname', payload:e.target.value})}/>
                <input type="text" placeholder="Enter Designation" onChange={(e) => dispatch({type:'designation', payload:e.target.value})}/>
                <input type="email" placeholder="email" onChange={(e) => dispatch({type:'email', payload:e.target.value})}/>
                <input type="number" placeholder="Mobile" onChange={(e) => dispatch({type:'mobile', payload:e.target.value})}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}


export default Home;
