import React from "react";
import { useState } from "react";
import "/Users/buraktekin/Desktop/Kodluyoruz-Bootstrap/Practice/practice/src/css/board.css"

function Button(){

    const [count, setCount] = useState(0);

    function increaseClick(){
        setCount(count+1);
    }
    function decreaseClick(){
        setCount(count-1);
    }

    return(
        <>
            <button onClick={increaseClick} style={{backgroundColor:"#73EC8B"}}>Increase</button>
            <button className={count >0 ? "increase" : "decrease"}>{count}</button>
            <button onClick={decreaseClick} style={{backgroundColor:"#FA4032"}}>Decrease</button>
        </>
    )
}

export default Button;