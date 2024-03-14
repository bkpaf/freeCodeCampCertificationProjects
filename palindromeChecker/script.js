let submitButton = document.getElementById("check-btn");
let inputField = document.getElementById("text-input");
let result = document.getElementById("result");

function cleanInputString(str) {
  const regex = /[_,():\/;\.{}+-\s]/g;
  return str.replace(regex, "");
}

function arraysAreEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

const palinCheck = (input) => {
  let cleanInput = cleanInputString(input);
  let casedInput = cleanInput.toLowerCase();
  let arrayedInput = casedInput.split("");
  let reversedArray = arrayedInput.toReversed();
  console.log(arrayedInput);
  console.log(reversedArray);

  if (arraysAreEqual(arrayedInput, reversedArray)) {
    return true;
  } else {
    return false;
  }

  /*
palincheck = (inputField.Value) =>{

1.use RegExp to filter out any special characters and spaces 
2. force same case
3.stick string in an array for each letter
4. create a new array that reverses the order
5. compare arrays for equivalence
  return true if equivalent
  return false if not 

  if (arrayedInput == reversedArray){
    return true;
  }else {
    return false;
  }
*/
};

submitButton.addEventListener("click", () => {
  if (inputField.value == "") {
    alert("Please input a value");
  } else if (palinCheck(inputField.value)) {
    result.innerText = `${inputField.value} is a palindrome`;
  } else {
    result.innerText = `${inputField.value} is not a palindrome`;
  }
});
