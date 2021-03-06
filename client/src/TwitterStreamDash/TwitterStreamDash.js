import React, { Component } from 'react'
import ListView from './ListView/ListView'
import axios from "axios";

export default class TwitterStreamDash extends Component {

    

    render() {
        const PostsData = [
            {
              id: "1"  ,
              title: "CNN Acquire BEME",
              desc: "CNN purchased Casey Neistat's Beme app for $25million.",
              image: "https://source.unsplash.com/user/erondu/600x400"
            },
            {
                id: "2"  ,
                title: "CNN Acquire BEME",
                desc: "CNN purchased Casey Neistat's Beme app for $25million.",
                image: "https://source.unsplash.com/user/erondu/600x400"
              },
              {
                id: "3"  ,
                title: "CNN Acquire BEME",
                desc: "CNN purchased Casey Neistat's Beme app for $25million.",
                image: "https://source.unsplash.com/user/erondu/600x400"
              },
        ];

        axios.get('http://localhost:4000/abc')
        .then(function (response) {
          console.log(response.data);
        })
       .catch(function (error) {
          console.log(error);
       });
        
       const card = PostsData.map((postcard, i) =>{
            return <ListView id={PostsData[i].id} img = {PostsData[i].image}title ={PostsData[i].title} desc ={PostsData[i].desc}/>
        }
        )
        
        return (
            
            <div>
            <h1>Welcome to Twitter Stream Dash</h1>
                {card}
            </div>
        )
    }
}



