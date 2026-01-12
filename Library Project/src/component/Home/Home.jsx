import { useEffect, useState } from "react";

const Home = () => {

    const [data, setData] = useState()

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/hello/')
            .then((res)=> res.json())
            .then((res)=> setData(res))
            .catch(err => console.error(err))
    },[])   


    return <>
            <h1>Hello from Fellow!</h1>
            <p>{JSON.stringify(data)}</p>
        </>
}


export default Home;