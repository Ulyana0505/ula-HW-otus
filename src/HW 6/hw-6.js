function diff(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

function isWord(str) {
  const words = str.split(" ");
  if (words.length === 1) {
    return true;
  } else {
    return false;
  }
}

function pow(a, x) {
  const aInx = Math.pow(a, x);
  return aInx;
}

module.exports = { diff, isWord, pow };
