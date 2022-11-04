// math.js
// @author: Ville Wilpola
// Contains all the mathematical functions 
// --> The f in every function parameter stands for the setter function

// A function to handle addition operation
export const handleAddition = (f) => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (num1 === "" || num2 === "") {
    alert("Please fill both of the numbers");
    return;
  } else {
    let add = Number(num1) + Number(num2);
    f(add);
  }
};

// A function to handle subtraction operation
export const handleSubtraction = (f) => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (num1 === "" || num2 === "") {
    alert("Please fill both of the numbers");
    return;
  } else {
    f(Number(num1) - Number(num2));
  }
};

// A function to handle multiplication operation
export const handleMultiplication = (f) => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (num1 === "" || num2 === "") {
    alert("Please fill both of the numbers");
    return;
  } else {
    f(Number(num1) * Number(num2));
  }
};

// A function to handle division operaiton
export const handleDivision = (f) => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (num1 === "" || num2 === "") {
    alert("Please fill both of the numbers");
    return;
  } else {
    f(Number(num1) / Number(num2));
  }
};

// A function to handle remainder operation
export const handleRemainder = (f) => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (num1 === "" || num2 === "") {
    alert("Please fill both of the numbers");
    return;
  } else {
    f(Number(num1) % Number(num2));
  }
};
