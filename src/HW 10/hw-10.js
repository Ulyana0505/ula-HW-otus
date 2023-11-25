function whatIsUserString(str) {
  const regexpDate = /\d{1,2}[./]\d{2}[./]\d{2,4}/;
  const regexpEmail = /[\da-z.]+@[\da-z]+\.[a-z]+/;
  const regexpTelephone = /[7,8][0-9]{10}/;
  if (regexpDate.test(str)) {
    return "Введенная строка является датой";
  } else if (regexpEmail.test(str)) {
    return "Введенная строка является почтой";
  } else if (regexpTelephone.test(str)) {
    return "Введенная строка является номером телефона";
  } else {
    return "Введенная строка не является ни датой, ни почтой, ни телефоном";
  }
}
function startWhatIsUserString() {
  const userString = prompt(
    "Введите дату, элеткронную почту, номер телефона или что еще пожелаете: ",
  );
  console.log(whatIsUserString(userString));
}

module.exports = { whatIsUserString };
