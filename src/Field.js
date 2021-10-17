import React from "react"



let Field=function(props){

    return (
        <div>
            <label>{props.title}</label>
            <input value={props.value}></input>
        </div>
        
    )

}
export default Field