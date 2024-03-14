const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let tempRomanNumeral = "";
const romanDigits = [
  {
    value: 1000,
    numeral: "M",
  },
  {
    value: 900,
    numeral: "CM",
  },
  {
    value: 500,
    numeral: "D",
  },
  {
    value: 400,
    numeral: "CD",
  },
  {
    value: 100,
    numeral: "C",
  },
  {
    value: 90,
    numeral: "XC",
  },
  {
    value: 50,
    numeral: "L",
  },
  {
    value: 40,
    numeral: "XL",
  },
  {
    value: 10,
    numeral: "X",
  },
  {
    value: 9,
    numeral: "IX",
  },
  {
    value: 5,
    numeral: "V",
  },
  {
    value: 4,
    numeral: "IV",
  },
  {
    value: 1,
    numeral: "I",
  },
];
//Validation:
convertBtn.addEventListener("click", () => {
  // Clear tempRomanNumral
  tempRomanNumeral = "";
  // There has to be a number provided
  if (input.value === "") {
    output.innerText = "Please enter a valid number";
    return;
  } else if (input.value < 0) {
    // The number has to be positive
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (input.value > 3999) {
    // The number has to be less than 4000
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  console.log(`here's the input ${input.value}`);
  decimalToRoman(input.value);
  console.log(`Roman Numeral is ${tempRomanNumeral}`);
  output.innerText = tempRomanNumeral;
});

const decimalToRoman = (input) => {
//TODO figure out why values that exist in the romanDigits array don't convert
  
  if (romanDigits.some(e => e.value === input)){
      let existingDigitIndex = romanDigits.findIndex(x => x.value === input)
      console.log(`existingDigitIndex is ${existingDigitIndex}`)
     tempRomanNumeral += romanDigits[existingDigitIndex].numeral
     return
  }else {
//1 From the romanDigits, find the highest decimal value v that is less than or equal to the decimal number x and its corresponding roman numeral n:
    let numeralIndex = romanDigits.findIndex(x => x.value <= input)
    console.log(`numeralIndex is ${numeralIndex}`)
// 2 Write the roman numeral n that you found and subtract its value v from x:
//x = x - v
    tempRomanNumeral += romanDigits[numeralIndex].numeral
    return decimalToRoman(input - romanDigits[numeralIndex].value)
    }
}

/*
**************************
const decimalToRoman = (input) => {
  let result = "";
  let remaining = input;

  for (const { value, numeral } of romanDigits) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }
  tempRomanNumeral = result;
  return result;
};

******************************
/*


Decimal value (v)	Roman numeral (n)
1	I
4	IV
5	V
9	IX
10	X
40	XL
50	L
90	XC
100	C
400	CD
500	D
900	CM
1000	M
 

2 Write the roman numeral n that you found and subtract its value v from x:
x = x - v

Repeat stages 1 and 2 until you get zero result of x. */
