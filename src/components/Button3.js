import React from "react";
import { useState } from "react";

function Button3(){

    const [click,setClick] = useState(0);
    
    function handleClick(){
        setClick(click+1);
    }

    return(
        <>
            <button onClick={handleClick}>{click} Times clicked.</button>
            <button onClick={handleClick}>{click} Times clicked.</button>
        </>
    )
}

export default Button3;