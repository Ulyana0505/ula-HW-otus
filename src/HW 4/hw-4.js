let user = {
  name: "John",
};

function userAge(num) {
  user.age = num;
  return user.age;
}

let admin = Object.assign(user);
function newObjectAdmin() {
  admin.role = "admin";
  return admin.role;
}
newObjectAdmin();

function newVariablesfromAdmin(n, a, r) {
  const name = n;
  const age = a;
  const role = r;
  return `${name}, ${age}, ${role}`;
}
newVariablesfromAdmin(admin.name, admin.age, admin.role);

module.exports = { userAge, newObjectAdmin, newVariablesfromAdmin };
