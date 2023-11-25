import { diff, isWord, pow } from "./hw-6";

test("Разница менжду наибольшим и наименьшим", () => {
  expect(diff(8, 3)).toBe(5);
});

test("Строка состоит из одного слова?", () => {
  expect(isWord("Это строка не подходит")).toBe(false);
});

test("Возведение числа a в степень x", () => {
  expect(pow(2, 5)).toBe(32);
});
