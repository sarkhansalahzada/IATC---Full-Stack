// 1.Check if input is array or not
let variable1 = [];
let variable2 = { length: 1 };
let variable3 = new Array(1);

console.log(Array.isArray(variable1));
console.log(Array.isArray(variable2)); 
console.log(Array.isArray(variable3));


// 2.Clone Array
let array1 = [1, 2, 3];
let array2 = copy(array1);
array1 === array2; // false
array1[0] === array2[0]; // true

function copy(array) {
  return Array.from(array);
}


// 3.Deep clone array using recursive function
// let array1 = [{ name: 'John' }];
// let array2 = copy(array1);
// array1 === array2; // false
// array1[0] === array2[0]; // false

// function deepCopy(array) {
//  // your code here...
// }


// 4.Sort given number array like max, min, max, min...
// let array = [1, -4, 5, 6, -2, 0];
// sorted = [6, -4, 5, -2, 1, 0];


// 5.Create a function to create array from given parameters
function range(start = 1, stop = 10, step = 1) {
  let array = [];

  if (start <= stop) {
    for (let i = start; i < stop; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i > stop; i += step) {
      array.push(i);
    }
  }

  return array;
}

console.log(range(7));
console.log(range(2020, 2023)); 


// 6.Create a function to calculate sum of all numbers in a given array or parameters list
 sum([1, 2, 3]); // 6
 sum([1, 2, 3, 'hello', true]); // 6
 sum(1, 2, 3); // 6

 function sum(...args) {
  let numbers = args.flat();

  let sum = numbers.reduce((total, current) => {
    if (typeof current === 'number' && !isNaN(current)) {
      return total + current;
    } else {
      return total;
    }
  }, 0);

  return sum;
}

console.log(sum([1, 2, 3])); 
console.log(sum([1, 2, 3, 'hello', true])); 
console.log(sum(1, 2, 3)); 


// 7.Create a function called random to get random integer between min and max
function random(min = -2147483648, max = 2147483647) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(7)); 
console.log(random(1, 5)); 
console.log(random(1, 5)); 
console.log(random(1, 5)); 
console.log(random(-Infinity, Infinity)); 
// min is default -2_147_483_648
// max is default 2_147_483_647


// 8.Create a function called round
function round(number, precision = 2) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

console.log(round(2.1425));
console.log(round(2.1425, 3));
console.log(round(3.14159, 4));
console.log(round(10.6789, 1));


// 9.Create a function called arithmeticMean
// arithmeticMean([1, 2, 3, 4, 5]); // 3
// arithmeticMean([1, 5]); // 3
// arithmeticMean([3, 3, 3, 3]); // 3


// 10.Create a function called geometricMean, which calculates arithmetic mean, and returns rounded value
// geometricMean([1, 2, 3, 4, 5]); // 2.61
// geometricMean([1, 5]); // 2.24
// geometricMean([5, 5, 5]); // 5


// 11.Create a function called unique
function unique(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array.');
  }

  return Array.from(new Set(array));
}

console.log(unique([1, 1, 1, 5])); 
console.log(unique([5, 5, 5])); 
console.log(unique([1])); 


// 12.Create a function called naturalSum, it should be recursive function
function naturalSum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + naturalSum(n - 1);
  }
}

console.log(naturalSum(3));
console.log(naturalSum(6)); 
console.log(naturalSum(9)); 


// 13.Make a function called flat to falt array of any nested arrays
// flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
// flat([1, 2, [3, 4, [5, 6]]]); // [1, 2, 3, 4, 5, 6]
// flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 14.Extend previous function to accept nesting level
flat([1, 2, [3, 4, [5, 6]]], 1); // [1, 2, 3, 4, [5, 6]]
flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], 2); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]


// 20. Find distance, elevation and angle between given coordinates
function calculateDistance(coord1, coord2) {
  const dx = coord2.X - coord1.X;
  const dy = coord2.Y - coord1.Y;
  const dz = coord2.Z - coord1.Z;

  const distance = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
  const elevation = Math.round((Math.atan2(dz, Math.sqrt(dx ** 2 + dy ** 2)) * 180) / Math.PI);
  const angle = Math.round((Math.atan2(dy, dx) * 180) / Math.PI);

  return { distance, elevation, angle };
}

// Coordinates:
const coord1 = {
  X: 5573283,
  Y: 6309750,
  Z: 191.5,
};
const coord2 = {
  X: 5573791,
  Y: 6323798,
  Z: 132.2,
};

const coord3 = {
  X: 5573283,
  Y: 6309750,
  Z: 191.5,
};
const coord4 = {
  X: 5573791,
  Y: 6323798,
  Z: 132.2,
};

console.log(calculateDistance(coord1, coord2));
// Output: { distance: 14057.00477125545, elevation: -59, angle: 88 }

console.log(calculateDistance(coord3, coord4));
// Output: { distance: 19457.15873872931, elevation: 419, angle: -134 }
