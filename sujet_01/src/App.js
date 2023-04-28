import Calculator from "./Components/Calculator";
import { NumberProvider } from "./Provider/NumberProvider";

function App() {
  return (
    <>
      <NumberProvider>
        <Calculator />
      </NumberProvider>
    </>
  );
}

export default App;
