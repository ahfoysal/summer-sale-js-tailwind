function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  inputField.value = "";
  return inputFieldValueString;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

function disabledButtonHandler(element, condition) {
  if (condition) {
    element.disabled = false;
    element.classList.remove("bg-gray-400");
    element.classList.remove("cursor-not-allowed");
    element.classList.add("bg-heroPrimary");
  } else {
    element.disabled = true;
    element.classList.remove("bg-heroPrimary");
    element.classList.add("cursor-not-allowed");
    element.classList.add("bg-gray-400");
  }
}
