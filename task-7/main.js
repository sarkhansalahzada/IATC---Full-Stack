// console.log(String.fromCharCode(65)); // A
// console.log(String.fromCharCode(53)); // 5

// 1. Write a JavaScript program to display numbers as worlds using ASCII code.
// example: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// output: hello world
// example: [83, 97, 108, 97, 109, 32, 65, 122, 101, 114, 98, 97, 121, 99, 97, 110]
// example: [106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 105, 115, 32, 98, 111, 109, 98, 97]
let example0 = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
let output1 = '';
for (let i = 0; i < example1.length; i++) {
  let word = String.fromCharCode(example1[i]);
  output1 += word;
}
console.log(output1);

// 2. Write a JavaScript program to convert a string to an array of ASCII codes.
// example: hello world
// output: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// example: Salam Azerbaycan
// example: javascript is bomba
let example1 = "hello world";
let asciiCodes1 = [];
for (let i = 0; i < example1.length; i++) {
  let code = example1.charCodeAt(i);
  asciiCodes1.push(code);
}
console.log(asciiCodes1); 

// 3. Write a JavaScript program to convert a string to an array of characters.
// example: hello world
// output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
const str0 = 'hello world';
const result0 = [];
for (let i = 0; i < str0.length; i++) {
	let letter = str[i];
	result0.push(letter);
}
console.log(str, result);

// 4. Write a JavaScript program to drop the vowels from a string.
// example: hello world
// output: hll wrld

const str1 = 'hello world';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let result1 = '';
// debugger;
for (let i = 0; i < str1.length; i++) {
	let letter = str[i];
	let isVowel = false;
	for (let j = 0; j < vowels.length; j++) {
		let vowel = vowels[j];

		if (letter === vowel) {
			isVowel = true;
		}
	}
	if (!isVowel) {
		result1 += letter;
	}
}
console.log({ str, result });

// 5. Write a JavaScript program to check if a string contains only digits.
// example: 1234567890  // true
// example: 1234567890a // false

function containsOnlyDigits(str) {
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
  return true;
}

// 6. Write a JavaScript program to check if a string contains only digits and letters.
// example: 1234567890  // true
// example: 1234567890a // true
// example: 1234567890a!@#$%^&*()_+ // false

function containsOnlyDigitsAndLetters(str) {
  let validCharacters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isValidCharacter = false;
    for (let j = 0; j < validCharacters.length; j++) {
      if (char === validCharacters[j]) {
        isValidCharacter = true;
        break;
      }
    }
    if (!isValidCharacter) {
      return false;
    }
  }
  return true;
}

// 7. Write a JavaScript program to check if a string contains only uppercase letters.
// example: HELLO WORLD // true
// example: HELLO WORLD! // true
// example: HELLO WORLD!@#$%^&*()_+ // true
// example: HELLO WORLD!@#$%^&*()_+a // false

function containsOnlyDigitsAndLetters(str) {
  let validCharacters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isValidCharacter = false;
    for (let j = 0; j < validCharacters.length; j++) {
      if (char === validCharacters[j]) {
        isValidCharacter = true;
        break;
      }
    }
    if (!isValidCharacter) {
      return false;
    }
  }
  return true;
}

// 8. Write a JavaScript program to UpperCase the first letter of each word of a given string without spaces.
// example: hello world
// output: HelloWorld
// example: a man who thinks about the end, can not be a hero

function uppercaseFirstLetterWithoutSpaces(str) {
  let words = [];
  let currentWord = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== ' ') {
      currentWord += char;
    } else if (currentWord) {
      words.push(currentWord);
      currentWord = '';
    }
  }
  if (currentWord) {
    words.push(currentWord);
  }

  let result = '';
  for (let j = 0; j < words.length; j++) {
    let word = words[j];
    let firstLetter = word[0].toUpperCase();
    let restOfWord = word.slice(1);
    result += firstLetter + restOfWord;
  }

  return result;
}

// 9. Write a JavaScript program to remove duplicate characters from a string.
// example: hello world
// output: helo wrd
// example: javascript is bomba
// example: a man who thinks about the end, can not be a hero

function removeDuplicates(str) {
  let result = '';
  let duplicates = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!duplicates[char]) {
      result += char;
      duplicates[char] = true;
    }
  }
  return result;
}

// 10. Write a JavaScript program to convert a string into camel case.
// example: hello world
// output: helloWorld
// example: javascript is bomba
// example: a man who thinks about the end, can not be a hero

function toCamelCase(str) {
  let words = str.split(' ');
  let result = '';
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    
    if (i === 0) {
      result += word.toLowerCase();
    } else {
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      result += capitalizedWord;
    }
  }
  
  return result;
}

// 11. Write a JavaScript program to convert a string into snake case.
// example: hello world
// output: hello_world
// example: a man who thinks about the end, can not be a hero

function toSnakeCase(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (char === ' ') {
      result += '_';
    } else if (char >= 'A' && char <= 'Z') {
      let lowercaseChar = char.toLowerCase();
      if (i !== 0) {
        result += '_';
      }
      result += lowercaseChar;
    } else {
      result += char;
    }
  }
  
  return result;
}

// 12. Write a JavaScript program to convert a string into kebab case.
// example: hello world
// output: hello-world
// example: a man who thinks about the end, can not be a hero
// example: javascript is bomba
// example: madam // true

function toKebabCase(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (char === ' ') {
      result += '-';
    } else if (char >= 'A' && char <= 'Z') {
      let lowercaseChar = char.toLowerCase();
      if (i !== 0) {
        result += '-';
      }
      result += lowercaseChar;
    } else {
      result += char;
    }
  }
  
  return result;
}

// 13. Write a JavaScript program to check if a given string is a palindrome.
// palindromes: madam, civic, radar, level, rotor, kayak, reviver, racecar, redder, madam, refer
// example: hello world // false
// example: madam // true
// example: racecar // true

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// 14. Write a JavaScript program to check if a given string is a pangram.
// pangram: a sentence containing every letter in the English alphabet.
// example: The quick brown fox jumps over the lazy dog. // true
// example: The quick brown fox jumps over the dog. // false

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// 15. Write a JavaScript program to check if a given string is a anagram.
// anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// example: cinema // iceman // true
// example: listen // silent // true
// example: hello // world // false

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  
  let charCount = {};
  
  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];
    
    charCount[char1] = (charCount[char1] || 0) + 1;
    charCount[char2] = (charCount[char2] || 0) - 1;
  }
  
  for (let char in charCount) {
    if (charCount[char] !== 0) {
      return false;
    }
  }
  
  return true;
}
