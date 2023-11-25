let arr = [1, 5, 6, 7, 3, 9, 15, 8, 32, 78];

function sumOfArr(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

function newArr(a) {
  let newArr = a.map((item) => item * 2);
  return newArr;
}

function minAndMaxInArr(a) {
  const maxOfArr = Math.max.apply(null, a);
  const minOfArr = Math.min.apply(null, a);
  return `Min: ${minOfArr}, Max: ${maxOfArr}`;
}

module.exports = {sumOfArr, newArr, minAndMaxInArr};