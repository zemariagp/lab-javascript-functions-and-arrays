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
