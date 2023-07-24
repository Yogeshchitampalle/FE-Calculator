// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })
//Note:- 
//eval is a built-in JavaScript function that takes a string as input and evaluates it as code. 
//It is a powerful but potentially dangerous feature because it allows dynamic code execution.
//When you pass a string containing JavaScript code to eval, it interprets and executes that code within the current scope.

document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.input');
  const buttons = document.querySelectorAll('.button');
  let expression = '';

  // Function to update the input display
  function updateDisplay() {
    input.value = expression;
  }

  // Function to handle number and operator button clicks
  function handleButtonClick(value) {
    expression += value;
    updateDisplay();
  }

  // Function to clear the input
  function clearInput() {
    expression = '';
    updateDisplay();
  }

  // Function to calculate the result
  function calculateResult() {
    try {
      expression = eval(expression).toString();
    } catch (error) {
      expression = 'Error';
    }
    updateDisplay();
  }

  // Add click event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonValue = button.textContent;

      if (buttonValue === 'C') {
        clearInput();
      } else if (buttonValue === '=') {
        calculateResult();
      } else {
        handleButtonClick(buttonValue);
      }
    });
  });
});
