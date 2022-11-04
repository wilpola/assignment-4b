// App.js
// @author: Ville Wilpola
// Houses the main app runtime

//importing components and styles
import { useState } from "react";
import { CalculationForm } from "./components/calculationForm";
import "./App.scss";

// import Utility functions
import {
  handleAddition,
  handleSubtraction,
  handleDivision,
  handleMultiplication,
  handleRemainder,
} from "./utils";

function App() {
  // stores the operation selection
  const [operation, setOperation] = useState("");
  const [equals, setEquals] = useState(0);


  const handleSelection = (e) => {
    setOperation(e.target.value);   // set operator to target operator
    setEquals("");                  // set state to empty
  };

  // renders the app
  return (
    <div className="App">
      <h1> Simple Calculator app</h1>
      <select data-testid="selector" onChange={(e) => handleSelection(e)}>
        <option>Choose operation</option>
        <option>Addition</option>
        <option>Subtraction</option>
        <option>Multiplication</option>
        <option>Division</option>
        <option>Remainder</option>
      </select>

      {/* if nothing has been selected */}
      {operation === "" && <></>}

      {/* If Addition has been selected */}
      {operation === "Addition" && (
        <CalculationForm
          title={"Addition"}
          handler={() => handleAddition(setEquals)}
          equals={equals}
        />
      )}

      {/* If Subtraction has been selected */}
      {operation === "Subtraction" && (
        <CalculationForm
          title={"Subtraction"}
          handler={() => handleSubtraction(setEquals)}
          equals={equals}
        />
      )}

      {/* If Multiplication has been selected */}
      {operation === "Multiplication" && (
        <CalculationForm
          title={"Multiplication"}
          handler={() => handleMultiplication(setEquals)}
          equals={equals}
        />
      )}

      {/* If Division has been selected */}
      {operation === "Division" && (
        <CalculationForm
          title={"Division"}
          handler={() => handleDivision(setEquals)}
          equals={equals}
        />
      )}

      {/* If Remainder has been selected */}
      {operation === "Remainder" && (
        <CalculationForm
          title={"Remainder"}
          handler={() => handleRemainder(setEquals)}
          equals={equals}
        />
      )}
    </div>
  );
}

export default App;
