import React, { useState } from 'react';
import { NumberContext } from '../Context/NumberContext';


export const NumberProvider = ({ children }) => {

  const [inputNumber, setInputNumber] = useState("");
  const [tempNumber, setTempNumber] = useState("");
  const [result, setResult] = useState(false);

  return (
    <NumberContext.Provider value={{ inputNumber, setInputNumber, tempNumber, setTempNumber, result, setResult }}>
      {children}
    </NumberContext.Provider>
  );
};