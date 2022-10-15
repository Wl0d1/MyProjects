const defaultResult = 0;
let currentResult = defaultResult;

const getUserInput = () => {
    return parseInt(usrInput.value)
}

const add = () => {
  const enteredNumber = parseInt(usrInput.value);
  const calcDescription = `${currentResult} + ${usrInput.value}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
};

const substract = () => {

}

const multiply = () => {

}

const divide = () => {
    
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener('click', susbract)
