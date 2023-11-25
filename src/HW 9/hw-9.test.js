import {isTriangleRight, circleWithRRadius, quadraticEquation} from "./hw-9"

test("Этот треугольни прямоугольный?", () => {
    expect(isTriangleRight(21, 28, 35)).toBe("Этот треугольник прямоугольный.");
  });
  
test("Длина и площадь окружности", () => {
    expect(circleWithRRadius(7)).toBe(
      "Длина окружности с радиусом 7 равна 43.96\nПлощадь окружности с радиусом 7 равна 153.86",
    );
  });
  
test("Корни квадратного уравнения", () => {
    expect(quadraticEquation(1, 6, 9)).toBe("x = -3");
  });