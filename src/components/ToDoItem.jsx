import React, { useState } from "react";

function ToDoItem(props){
    // const [isCrossedOut, setCrossedOut] = useState(false);

    // function handleOnClick(){
    //     setCrossedOut(!isCrossedOut)

    // }
    // const style = {
    //     textDecoration : isCrossedOut ? "line-through" : "none"
    // }

    // return <li style={style} onClick={handleOnClick}>{props.text}</li>

    return(
    <div onClick={()=>{
        props.onChecked(props.id);
    }}> 
        <li>{props.text}</li>
    </div>
    )
}

export default ToDoItem; 