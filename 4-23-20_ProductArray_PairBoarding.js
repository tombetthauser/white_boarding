// Pair Boarding 4.23.2020 - Garon Hock, Michael Powell and Tom Betthauser


// Have the function consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.For example: If arr contains[4, 8, 6] then the output should be 2 because two numbers need to be added to the array(5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.
//   Examples
// Input: [5, 10, 15]
// Output: 8
// Input: [-2, 10, 4]
// Output: 10

// Garon’s Solve


function consecutive(arr) {
  arr.sort(function (a, b) { return a - b });
  let sum = 0;
  first = arr[0];
  while (first < arr[arr.length - 1]) {
    if (!(arr.includes(first))) {
      sum += 1;
    }
    first++
  }
  return sum;
}





// Tom’s Solve(after garon’s solve : p)

// find lowest integer in arr
// find highest integer in arr
// find the difference between the two

// compare that to the length of the input arr
// return the difference as an integer


const consecutive = arr => {                   // [5,10,15] => 8
  const lowestInt = Math.min(...arr);            // 5
  const highestInt = Math.max(...arr);            // 15

  const arrRange = highestInt - lowestInt;                // 15 - 5 = 10
  const neededInts = arrRange - (arr.length - 1);      // 10 - 2 => 8
  return neededInts;                          // => 8
}

// OR…

const consecutive = a => Math.max(...a) - Math.min(...a) - (a.length - 1)




// Create a function prodArray that takes an array of integers and returns a new array such that each index contains the product of all numbers in the original array except for the integer at that index.Cover all reasonable edge cases.

// [1, 2, 3]   => [6, 3, 2]
// [‘n’, 2, ’w’]   => [6, 3, 2]

// Iterate over the array
// Multiply all other indices together
// Push onto an array

function prodArray(arr) {
  let prodArr = [];
  for (let i = 0; i < arr.length; i++) {
    let prodIdx = 1;
    if (type of arr[i] === integer) {
      for (let j = 0; j < arr.length; j++) {
        if (j !== i) {
          prodIdx * arr[j];
        } else {
          prodIdx = undefined;
        }
      }
    }
    prodArr.push(prodIdx);
  }
  return prodArr
} -
















  function prodArray(arr) {
    let prod = 1;
    let nonInts = 0;
    let prodArr = [];
    arr.forEach(ele => {
      if (typeof ele === 'number') prod *= ele
      else nonInts += 1
    })
    arr.forEach(ele => {
      if (typeof ele === 'number') {
        if (nonInts === arr.length - 1) prodArr.push(undefined)
        else prodArr.push(prod / ele)
      }
      else {
        if (nonInts === arr.length) prodArr.push(undefined)
        else prodArr.push(prod)
      }
    })
    return prodArr
  }

// DONT DELETE ANY OF THIS
// Im gonna send the file to Mark with all our dumb amazing attempts


// [1, 2, 3]   => [6, 3, 2]
// [2, 4, 0]   => [0, 0, 8]
// [0, 3, 1, 2, 0] => [0, 0, 0, 0, 0]
// [-6, 2, -4] => [-8, 24, -12]
// [2] => undefined
// [‘cat’] => undefined
// [] => undefined
// [1, 5, ”cat”, 2, [1, 2, ’dog’] ] => [10, 2, 10, 5, 10]

// What if this is an AJAX / API call but the backend doesn’t have validations in place guaranteeing sanitized data / a clean array of integers?




const prodArray = (inputArr) => {
  Let totalProd = 1;
  inputArr.forEach(ele => totalProd = totalProd * ele)

  Let returnArr = [];
  inputArr.forEach(ele => returnArr.push(totalProd / ele))

  return returnArr;
}



let prodarray = (inputarray) => {
  let totalproduct = 1;
  const returnarray = [];

  let zeroindex = null;
  let zerocount = 0;

  for (let i = 0; i < inputarray.length; i++) {
    let element = inputarray[i];
    if (element === 0) {
      zeroindex = i;
      zerocount += 1;
    } else if (typeof element === `number`) {
      totalproduct *= element;
    }
  }

  for (let i = 0; i < inputarray.length; i++) {
    let element = inputarray[i];
    if (zerocount === 1 && i != zeroindex) {
      returnarray.push(0);
    } else if (zerocount > 1) {
      returnarray.push(0);
    } else if (typeof element != `number`) {
      returnarray.push(totalproduct)
    } else {
      returnarray.push(totalproduct / element);
    }
  }

  return returnarray;
}







let prodArray = (inputArray) => {
  if (inputArray.length < 2) return undefined;

  let totalProduct;

  const returnArr = [];
  const zeroHash = { index: null, count: 0 };

  for (let i = 0; i < inputArray.length; i++) {
    let element = inputArray[i];
    if (element === 0) {
      zeroHash.index = i;
      zeroHash.count += 1;
    } else if (typeof element === `number`) {
      totalProduct = totalProduct ? totalProduct * element : element;
    }
  }

  for (let i = 0; i < inputArray.length; i++) {
    let element = inputArray[i];
    if (zeroHash.count > 1) {
      returnArr.push(0);
    } else if (zeroHash.count === 1 && i != zeroHash.index) {
      returnArr.push(0);
    } else if (zeroHash.count === 1 && i === zeroHash.index) {
      returnArr.push(totalProduct);
    } else if (typeof element != `number`) {
      returnArr.push(totalProduct)
    } else {
      returnArr.push(totalProduct / element);
    }
  }

  return returnArr;
}



console.log(prodArray([1, 2, 3])) // => [6, 3, 2]
console.log(prodArray([2, 4, 0])) // => [0, 0, 8]
console.log(prodArray([0, 3, 1, 2, 0])) // => [0, 0, 0, 0, 0]
console.log(prodArray([-6, 2, -4])) // => [-8, 24, -12]
console.log(prodArray([2])) // => undefined
console.log(prodArray([`cat`])) // => undefined
console.log(prodArray([])) // => undefined
console.log(prodArray([1, 5, `cat`, 2, [1, 2, `dog`]])) // => [10, 2, 10, 5, 10]




