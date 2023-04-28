import BaseNumberInput from "./Components/BaseNumberInput";
import { useState } from "react";
import Result from "./Components/Result";

function App() {
  const [decimalNumber, setDecimalNumber] = useState("");
  const [binaryNumber, setBinaryNumber] = useState("");

  const handleChange = (number, action) => {

    switch(action){
      case "decimal":
        setBinaryNumber(parseInt(number, 10).toString(2));
        break;
      case "binary":
        setDecimalNumber(parseInt(number, 2));
        break;
    }
  };

  return (
    <div className="container">
      <h2>Décimal > Binaire</h2>
      <BaseNumberInput
        onChangeBase={(number) => handleChange(number,"decimal")}
        placeholder="Nombre décimal"
      />
      <Result data={binaryNumber} />
      <hr />
      <h2>Binaire > Décimal</h2>
      <BaseNumberInput
        onChangeBase={(number) => handleChange(number, "binary")}
        placeholder="Nombre binaire"
        
      />
      <Result data={decimalNumber} />

    </div>
  );
}

export default App;
