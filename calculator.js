
const buttons = document.querySelectorAll('button');
const clearButton = document.querySelector('.btn-clear');
const equalButton = document.querySelector('.btn-equal');
const display = document.querySelector('.display');

//add an eventListener to each of the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => { 
    const buttonValue = button.getAttribute('value');  
    display.textContent += buttonValue;
  });
});

equalButton.addEventListener('click', () => { 
    displayData = eval(displayData);
    display.textContent = displayData;
});

clearButton.addEventListener('click', () => { 
    displayData = "";
    display.textContent = displayData;
});