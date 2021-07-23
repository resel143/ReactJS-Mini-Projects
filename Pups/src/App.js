import React,{useState} from 'react';
import Header from './Header';
import MainContent from './MainContent';
import './App.css';


const App = ()=>{
  // const [dogList, setDogList] = useState([]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const HandleSearch = (e) =>{
      e.preventDefault();
      FetchDog(search);
  }

  const FetchDog = async(q)=>{
      const temp = await fetch(`https://dog.ceo/api/breeds/image/random`).then(res => res.json());
      console.log(temp.message);
      setUrl(temp.message);
  }

  return (
    <div>
        <Header /> <br/>
        <MainContent search={search} setSearch={setSearch} HandleSearch={HandleSearch} url={url} />
    </div>
  );
}



export default App;