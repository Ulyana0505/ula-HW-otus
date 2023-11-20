import {sum, sumLength, sumOfNumbers} from "./hw-1"

test("Сумма и произведение 4 и 3", () => {
    expect(sum(4, 3)).toBe("Сумма: 7. Произведение: 12.");
  });
  
test("Суммарная длина двух строк abcd и efg", () => {
    expect(sumLength("abcd", "efg")).toBe(7);
  });
  
test("Сумма цифр числа 123", () => {
    expect(sumOfNumbers(123)).toBe(6);
  });