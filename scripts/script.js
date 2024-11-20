function getInputById(inputId){
  const inputText = document.getElementById(inputId).value;
  const inputValue = parseFloat(inputText);
  return inputValue;
}

function setResultById(elementId, area){
  const element = document.getElementById(elementId);
  element.innerText = area;
  return element;
}