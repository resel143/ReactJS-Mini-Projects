import React, {Component, useState, useEffect} from 'react';
import { render } from 'react-dom';
import './App.css';

const App = ()=>{
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('selenagomez');
    const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=selenagomez');
    const [loading, setLoading] = useState(false);
    //  fetch news
    const fetchNews = ()=>{
        setLoading(true);
        fetch(url)
        .then(result => result.json())
        .then(data => (setNews(data.hits),setLoading(false)))
        .catch(error => console.log(error));
    }

    useEffect(()=>{
        fetchNews();
       }, [url]);


    const handleChange = (e)=>{
        setSearchQuery(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    }

    const showForm = ()=>(<form onSubmit={handleSubmit}>
        <input type="text" placeholder="What you wanna know?"value={searchQuery} onChange={handleChange}/>
        <button>View</button>
    </form>);

    const showLoading = ()=>(loading? <h2>Loading...</h2> : "");
    const showAPI = ()=>{ return news.map((n,i)=>(<p  key={i}> {n.title}</p>))}
    return (
        <div id="news">
            
            <h1>Welcome to Reshul News</h1>
            
            {showForm()}
            {showLoading()}
            {showAPI()}
        </div>
    );
}


// const App = ()=>{
//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         document.title = `Clicked ${count} times`;

//     })

//     let increment = () =>{
//         setCount(count+1);
//     }
   
//     return (
//         <div>
//             <h1>Hello Hi Bello Bye</h1>
//             <button onClick={increment}>Clicked</button>
//         </div>
//     );
// }


// class App extends Component {
//     state = {
//         count: 0
//     }
//     increment= ()=>{
//         this.setState({count: this.state.count + 1});
//     }
//     componentDidMount(){
//             document.title = `Clicked ${this.state.count} times`;

//     }
//     componentDidUpdate(){
//         document.title = `Clicked ${this.state.count} times`
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Reshul.com</h2>
//                 <button onClick = {this.increment}> Clicked {this.state.count} times</button>
//             </div>
//         );
//     }
// }

export default App;
