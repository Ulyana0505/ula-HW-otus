import { whatIsUserString } from "./hw-10";

test("Введеная строка является датой, эл. почтой или номером телефона?", () => {
  expect(whatIsUserString("pochta@lalala")).toBe(
    "Введенная строка не является ни датой, ни почтой, ни телефоном",
  );
});
