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
           <h1 className="text-4xl font-bold text-blue-600">
            Tailwind v3 is working 🚀
            </h1>
        </>
}


export default Home;