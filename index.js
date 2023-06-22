// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    //   const strARR=str.split('');   //to convert string into array
    //   strARR.reverse();
    //   return strARR.join('');   //to convert array into string
    
    //---------------------cleaner way-------------------------
//     return str
//         .split('')
//         .reverse()
//         .join('');




// --------------- using for loop----------------------
//     let revString = '';
//     for(let i = str.length - 1; i >= 0; i--) {
//       revString = revString + str[i];
//     }
//     return revString;

//   }




////////////////////////////////////



  // let revString = '';
  // for(let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;



// ---------------for of loop-------------------

  // let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  


//   --------------------for each------------------------

  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;



//   -------------------------reduce-----------------------

  return str.split('').reduce((revString, char) => char + revString, '');
}




// ------------------------------------------------------------------------------------------------------------------------------



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false


function isPalindrome(str) {
  const revString = str.split('').reverse().join('');
  return revString === str;
}


// --------------------------------------------------------------------------------------------------------------------------------------

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int);
}


// --------------------------------------------------------------------------------------------------------------------------------------


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
//   const strArr = str.toLowerCase().split(' ');

//   for(let i = 0; i < strArr.length; i++) {
//     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//   }

//   return strArr.join(' ');
// }


//////////////////////////////////////////////////////////////////////////////

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');
// }


//////////////////////////////////////////////////////////////////////////////

return str.replace(/\b[a-z]/gi, function(char) {
  return char.toUpperCase();
});
}


// ----------------------------------------------------------------------------------------------------------------------------

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function longestWord(sen) {
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);          //descending order

  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  // Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// /---------------------------------------------------------------------------------------------------------


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // SOLUTION 1

  // // Init chunked arr
  // const chunkedArr = [];
  // // Set index
  // let i = 0;

  // // Loop while index is less than the array length
  // while (i < arr.length) {
  //   // Slice out from the index to the index + the chunk length nd push on to the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;
  // }

  // return chunkedArr;


  // ////////////////////////////////////////////////////////////////////////////////////


  // SOLUTION 2

  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

// --------------------------------------------------------------------------------------------------------

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // SOLUTION 1
  // return arrays.reduce((a, b) => a.concat(b));         //a is accumulator which is initial value, b is current element being processed

  // ///////////////////////////////////////////////////////////////////////

  // SOLUTION 2
  // return [].concat.apply([], arrays);

  // /////////////////////////////////////////////////////////////////////////

  // SOLUTION 3
  return [].concat(...arrays);
}


// ------------------------------------------------------------------------------------------------------------------------------------

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')     //anything thats not a word character replace it with an empty string. g is global here
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// -----------------------------------------------------------------------------------------------------------------

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {    //i is case insensitive; doesn't matter either its capial or lowercase
    if (char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

  return newStr;
}


// -----------------------------------------------------------------------------------------------------------------------------------


// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20


// Solution 1: ES5 arguments & for loop
// function addAll() {
//   var args = Array.prototype.slice.call(arguments);
//   var total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

// //////////////////////////////////////////////////////////////

// Solution 2: ...rest & reduce/forEach
// function addAll(...numbers) {     //... is reduce, creates an array
//   return numbers.reduce((acc, cur) => acc + cur);
// }

// -------------------------------------------------------------------------------------------------


// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

// -----------------------------------------------------------------------------------------------------

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1: arguments, indexOf, filter
// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);

//   function filterArr(arr) {
//     // Return true if NOT in array
//     return args.indexOf(arr) === -1;
//   }

//   return arr.filter(filterArr);
// }


// /////////////////////////////////////////////////////////



function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}


// --------------------------------------------------------------------------------------------------

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]


function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

               // i=index
  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));     //first arg is index where it should be inserted, second is no of values that should be removed and 3rd is actual value should be inserted

  return sortArr;
}


// ---------------------------------------------------------------------------------------------------------

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split('').map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}


// ---------------------------------------------------------------------


// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}


// Call Function
const output = evenOddSums([1,2,4,5,6,7,8,10]);

console.log(output);



