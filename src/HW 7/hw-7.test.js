import { makeInteractiveList } from "./hw-7.js";

describe("makeInteactiveList", () => {
    let el;
    let button;
    let input;
    beforeEach(() => {
      el = document.createElement("div");
      makeInteractiveList(el);
      button = el.querySelector("button");
      input = el.querySelector("input");
    });
  
    function getParagraphs() {
      return [...el.querySelectorAll("p")].map((p) => p.innerHTML);
    }
  
    it("Это функция?", () => {
      expect(makeInteractiveList).toBeInstanceOf(Function);
    });
  
    it("Стартовая проверка", () => {
      expect(input).toBeTruthy();
      expect(button).toBeTruthy();
      expect(button.innerHTML).toBe("Add to list");
      expect(button.hidden).toBe(true);
  
      expect(el.querySelectorAll("p").length).toBe(3);
      expect(getParagraphs()).toEqual(["First", "Second", "Third"]);
    });
  
    it("Кнопка показывается или прячется в зависимости от input", () => {
      input.value = "123";
      input.dispatchEvent(new Event("input"));
      expect(button.hidden).toBe(false);
  
      input.value = "";
      input.dispatchEvent(new Event("input"));
      expect(button.hidden).toBe(true);
    });
  
    it("Добавление нового параграфа при нажатии на кнопку", () => {
      const text = `${Math.random()}`;
      input.value = text;
      input.dispatchEvent(new Event("input"));
      button.click();
      expect(getParagraphs()).toEqual(["First", "Second", "Third", text]);
      expect(input.value).toBe("");
      expect(button.hidden).toBe(true);
    });
  
    it("Удаляет первый параграф если их становится больше 5", () => {
      const text1 = `Fourth`;
      input.value = text1;
      input.dispatchEvent(new Event("input"));
      button.click();
  
      const text2 = `Fifth`;
      input.value = text2;
      input.dispatchEvent(new Event("input"));
      button.click();
  
      const text3 = `Sixth`;
      input.value = text3;
      input.dispatchEvent(new Event("input"));
      button.click();
  
      expect(getParagraphs()).toEqual(["Second", "Third", text1, text2, text3]);
    });
  });