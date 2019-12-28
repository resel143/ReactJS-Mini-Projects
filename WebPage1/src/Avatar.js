import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';



class Avatar extends Component{

    constructor(){
        super();
        this.state={
            name:"Welcome to ReSel Enterprises!!"
        }
    }
    namechange(){
        this.setState({
            name: "And you are IN!!"
        })
    }


    render(){

        const avatarlistarray=[
            {
                id:1,
                name:"Reshul",
                work:"webdev"
            },
            {
                id:2,
                name:"Selg",
                work:"webdev"
            },
            {
                id:3,
                name:"Apurva",
                work:"Database"
            },
            {
                id:4,
                name:"Mumma",
                work:"BackEnd"
            }
        ]
    
            const arrayavatcard =  avatarlistarray.map( (avatarcard,i) => {
                    return <Avatarlist key={i} id={avatarlistarray[i].id}  name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
            })


        return (<div class="mainpage">
        <h1>{this.state.name}</h1>
        <center>
            {arrayavatcard}
        </center><br/>
    <button onClick={()=> this.namechange() }>Enter</button></div>
    )
    }
}
    

export default Avatar;