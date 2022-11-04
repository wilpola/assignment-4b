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
