import {sumAllNumFrom50To100, multiplicationTableFor7, arithmeticMeanOfOdd} from "./hw-3"

test("Сумма чисел от 50 до 100", () => {
    expect(sumAllNumFrom50To100()).toBe(3825);
  });
  
test("Таблица умнодения на 7", () => {
    expect(multiplicationTableFor7()).toBe(
      "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63",
    );
  });
  
test("Среднее арифметическое всех нечетных чисел от 1 до N", () => {
    expect(arithmeticMeanOfOdd(7)).toBe(4);
});