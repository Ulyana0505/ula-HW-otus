function sumAllNumFrom50To100() {
    let sum = 0;
    for (let i = 50; i <= 100; i++) {
      sum = sum + i;
    }
    return sum;
  }

function multiplicationTableFor7() {
    let seven = [];
    for (let x = 1; x <= 9; x++) {
      seven.push("7" + " " + "x" + " " + x + " " + "=" + " " + 7 * x);
    }
    return seven.join("\n");
  }

function arithmeticMeanOfOdd(numberN) {
    let count = 0;
    let summ = 0;
    for (let y = 1; y <= numberN; y++) {
      if (y % 2 != 0) {
        count += 1;
        summ += y;
      }
    }
    const itog = summ / count;
    return itog;
  }
function startArithmeticMeanOfOdd() {
    const numberN = +prompt("Enter an N number: ");
    console.log(arithmeticMeanOfOdd(numberN));
  }
  startArithmeticMeanOfOdd();

module.exports = {sumAllNumFrom50To100, multiplicationTableFor7, arithmeticMeanOfOdd};