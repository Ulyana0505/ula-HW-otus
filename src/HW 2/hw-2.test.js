import {biggerIs, whichMonth, isCircleInSquare} from "./hw-2"

test("Наибольшее из чисел 4 и 8", () => {
    expect(biggerIs(4, 8)).toBe(8);
});
  
test("Какой месяц, если ввели число 5?", () => {
    expect(whichMonth(5)).toBe("Май");
});
  
test("Круг поместится в квадрат?", () => {
    expect(isCircleInSquare(24, 36)).toBe("Круг поместится в квадрат");
});