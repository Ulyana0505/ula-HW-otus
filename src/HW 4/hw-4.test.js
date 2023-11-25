import {userAge, newObjectAdmin, newVariablesfromAdmin} from "./hw-4"

test("Добавляем возраст объекту", () => {
    expect(userAge(24)).toBe(24);
});
  
test("Копия объекта user — admin", () => {
    expect(newObjectAdmin()).toBe("admin");
});
  
test("Все значения полей объекьа admin в отдельные переменные", () => {
    expect(newVariablesfromAdmin("John", "26", "admin")).toBe("John, 26, admin");
});