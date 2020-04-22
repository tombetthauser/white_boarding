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
    } else if (typeof element === `number`) {
      returnarray.push(totalproduct)
    } else {
      returnarray.push(totalproduct / element);
    }
  }

  return returnarray;
}

console.log(prodArray([1, 2, 3]  )) // => [6, 3, 2]
console.log(prodArray([2, 4, 0]  )) // => [0, 0, 8]
console.log(prodArray([0, 3, 1, 2, 0])) // => [0, 0, 0, 0, 0]
console.log(prodArray([-6, 2, -4])) // => [-8, 24, -12]
console.log(prodArray([2])) // => undefined
console.log(prodArray([`cat`])) // => undefined
console.log(prodArray([])) // => undefined
console.log(prodArray([1, 5, `cat`, 2, [1, 2, `dog`] ])) // => [10, 2, 10, 5, 10]
