function isTriangleRight(a, b, c) {
  if (c * c === a * a + b * b) {
    return "Этот треугольник прямоугольный.";
  } else {
    return "Этот треугольник не прямоугольный.";
  }
}

function circleWithRRadius(R) {
  const lengthWithR = 2 * 3.14 * R;
  const areaWithR = 3.14 * R * R;
  return `Длина окружности с радиусом ${R} равна ${lengthWithR}\nПлощадь окружности с радиусом ${R} равна ${areaWithR}`;
}

function quadraticEquation(a, b, c) {
  const D = b * b - 4 * a * c;
  if (a === 0) {
    return "Не квадратное уравнение.";
  } else if (D < 0) {
    return "Нет решений.";
  } else if (D > 0) {
    return (
      "x1 = " +
      (-b + Math.sqrt(D)) / (2 * a) +
      "; x2 = " +
      (-b - Math.sqrt(D)) / (2 * a)
    );
  } else if (D === 0) {
    return "x = " + -b / (2 * a);
  }
}

module.exports = { isTriangleRight, circleWithRRadius, quadraticEquation };
