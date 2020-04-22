let prodarray = (inputarray) => {
  if (inputarray.length < 2) return undefined;
  // if (inputarray.length === 1 && typeof inputarray[0] != `number`) return undefined;
  let totalproduct;
  const returnarray = [];

  let zeroindex = null;
  let zerocount = 0;

  for (let i = 0; i < inputarray.length; i++) {
    let element = inputarray[i];
    if (element === 0) {
      zeroindex = i;
      zerocount += 1;
    } else if (typeof element === `number`) {
      totalproduct = totalproduct ? totalproduct * element : element;
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

console.log(prodarray([1, 2, 3])) // => [6, 3, 2]
console.log(prodarray([2, 4, 0])) // => [0, 0, 8]
console.log(prodarray([0, 3, 1, 2, 0])) // => [0, 0, 0, 0, 0]
console.log(prodarray([-6, 2, -4])) // => [-8, 24, -12]
console.log(prodarray([2])) // => undefined
console.log(prodarray([`cat`])) // => undefined
console.log(prodarray([])) // => undefined
console.log(prodarray([1, 5, `cat`, 2, [1, 2, `dog`] ])) // => [10, 2, 10, 5, 10]
