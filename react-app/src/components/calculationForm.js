// calculationForm.js
// @author: Ville Wilpola
// This file contains the calculation form

export const CalculationForm = ({title, handler, equals}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
        <div className="calculation-container">
          <h2> {title} </h2>
          <div className="input-group">
            <label htmlFor="num1">First number</label>
            <input placeholder="1st number" id="num1" type={"number"} />
          </div>
          <div className="input-group">
            <label htmlFor="num2">Second number</label>
            <input placeholder="2nd number" id="num2" type={"number"} />
          </div>

          <button onClick={() => handler()}>Calculate</button>
          <h3 className="result">{equals}</h3>
        </div>
      </form>
    )
}