function biggerIs(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function whichMonth(month) {
  if (month === 1) {
    return "Январь";
  } else if (month === 2) {
    return "Февраль";
  } else if (month === 3) {
    return "Март";
  } else if (month === 4) {
    return "Апрель";
  } else if (month === 5) {
    return "Май";
  } else if (month === 6) {
    return "Июнь";
  } else if (month === 7) {
    return "Июль";
  } else if (month === 8) {
    return "Август";
  } else if (month === 9) {
    return "Сентябрь";
  } else if (month === 10) {
    return "Октябрь";
  } else if (month === 11) {
    return "Ноябрь";
  } else if (month === 12) {
    return "Декабрь";
  }
}
function startwhichMonth() {
  const month = +prompt("Enter a number from 1 to 12: ");
  console.log(whichMonth(month));
}

function isCircleInSquare(circle, square) {
  const diameterOfCircle = (2 * Math.sqrt(circle)) / 3.1415;
  const storonaOfSquare = Math.sqrt(square);
  if (diameterOfCircle <= storonaOfSquare) {
    return "Круг поместится в квадрат";
  } else {
    return "Круг не поместится в квадрат";
  }
}

module.exports = { biggerIs, whichMonth, isCircleInSquare };
