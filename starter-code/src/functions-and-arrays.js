// Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
// Finding Longest Word

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

function findLongestWord(arrayOfWords) {
  if (arrayOfWords[0]) {
    let longestWordLenght = 0;
    let longestWord = "";
    for (element of arrayOfWords) {
      if (element.length > longestWordLenght) {
        longestWordLenght = element.length;
        longestWord = element;
      }
    }
    return longestWord;
  } else return null;
}
// Calculating a Sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(arrayOfNumbers) {
  if (arrayOfNumbers[0]) {
    let sum = 0;
    for (let number of arrayOfNumbers) {
      sum += number;

    }
    return sum;
  } else return 0;

}
// Calculate the Average

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
  if (arrayOfNumbers[0]) {
    sum = sumArray(arrayOfNumbers);
    avg = sum / arrayOfNumbers.length;
    return avg;
  }
  else return null;
 
}

// Array of Strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];

function averageWordLength(arrayOfWords){
  if (arrayOfWords[0]){
    let allWords = arrayOfWords.join('');
    return allWords.length / arrayOfWords.length;
  } else {
    return null;
  }
 }

// Unique Arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];



function uniquifyArray(arrayOfWords) { 
  let uniquifiedArray = arrayOfWords.slice();
  console.log(uniquifiedArray);
  for (let word of uniquifiedArray) {
    
    if (uniquifiedArray.indexOf(word,uniquifiedArray.indexOf(word)+1) !== -1) {
      
      uniquifiedArray.splice(uniquifiedArray.indexOf(word,uniquifiedArray.indexOf(word)+1),1);
    }
    }
    
    return uniquifiedArray;

  }

// Finding Elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];


function doesWordExist(arrayOfWords,wordToSearch) {
for (let word of arrayOfWords) {
if (wordToSearch===word) {
  return true;
}


} 
return false;
}


// Counting Repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

function howManyTimes(arrayOfWords,wordToCount){
  let counter = 0;
  for (let word of arrayOfWords){
    if (word===wordToCount) {
      counter ++;

    }
  }
  return counter;
}

// Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];


// helper functions ----------------------------------
function fourMultiplier(arrayOfFour) {
  return arrayOfFour[0] * arrayOfFour[1] * arrayOfFour[2] * arrayOfFour[3];
}

function operateOnLine(line) {
  let copyLine = line.slice()
  let lineResultsArray = [];
  while (copyLine.length >= 4) {
      arrayOfFour = copyLine.slice(0, 4);
      lineResultsArray.push(fourMultiplier(arrayOfFour));
      copyLine.shift();
  }
  return lineResultsArray;


}

function rotateMatrix(matrix) {
  let result = [];
  for(let i = 0; i < matrix[0].length; i++) {
      let row = matrix.map(e => e[i]).reverse();
      result.push(row);
  }
  return result;
};

function maxValueOfArray(arrayOfNumbers) {
  let max = Math.max(...arrayOfNumbers);
  return max;
}

// main function -------------------------------------
function greatestProduct(matrix) {
  let results = [];


  for (let line of matrix) {
      results = results.concat(operateOnLine(line));
      
  }

  rotateMatrix(matrix);

  for (let line of matrix) {
      results = results.concat(operateOnLine(line));
      
  }



  let result = maxValueOfArray(results);

  return result;

}


