import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { NumberContext } from "../Context/NumberContext";


function Buttons () {

    const { inputNumber, setInputNumber, setTempNumber, result, setResult } = useContext(NumberContext);
    
    function handleClick (number) {

        if(result) {
            setInputNumber(number)
            setTempNumber("");
            setResult(false);
            return;
        }

        (inputNumber === 0 || inputNumber === "Error") ? setInputNumber(`${number}`) : setInputNumber(`${inputNumber}${number}`);
    }

    return (
        <>
            {[...Array(10).keys()].reverse().map((number, index) => {
                return(
                    <button key={index} className="numberButtons" onClick={() => { handleClick(number) }}>{number}</button>
                )
            })}
        </>
    )
}

export default Buttons;