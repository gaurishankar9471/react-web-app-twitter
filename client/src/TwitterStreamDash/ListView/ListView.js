import React from 'react'

const ListView = (props) =>{
    return (
        <div>
        
                <div>
                    <img src={props.img}/>
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                </div>
    
        </div>
    )
}

export default ListView;