import React, {useState} from 'react';

export default function BaseNumberInput({ onChangeBase, placeholder= "Nombre" }) {
    const handleChange = (e) => {
        onChangeBase(e.target.value);
    };
    
      return (
        <div>
          <input type="number" placeholder={placeholder} onChange={handleChange} />
        </div>
      );
}