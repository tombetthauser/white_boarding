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
console.log(prodArray([1, 5, `cat`, 2, [1, 2, `dog`] ])) // => [10, 2, 10, 5, 10]