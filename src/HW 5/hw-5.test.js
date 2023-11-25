import { sumOfArr, newArr, minAndMaxInArr } from "./hw-5";

test("Сумма чисел массива", () => {
  expect(sumOfArr([1, 2, 3])).toBe(6);
});

test("Новый массив на основе исходного (в 2 раза больше него)", () => {
  expect(newArr([1, 2, 3])).toEqual([2, 4, 6]);
});

test("Наибольший и наименьший элементы массива", () => {
  expect(minAndMaxInArr([1, 2, 3, 4, 5])).toBe("Min: 1, Max: 5");
});
