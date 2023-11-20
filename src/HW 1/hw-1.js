function sum(a, b) {
  return "Сумма: " + (a + b) + ". " + "Произведение: " + a * b + ".";
}

function sumLength(a, b) {
  const sum = a + b;
  return sum.length;
}

function sumOfNumbers(num) {
  const hundreads = Math.floor(num / 100);
  const dozens = Math.floor((num - hundreads * 100) / 10);
  const units = num - hundreads * 100 - dozens * 10;
  return hundreads + dozens + units;
}
function startSumOfNumbers() {
  const num = +prompt("Введите трехзначное число: ");
  console.log(sumOfNumbers(num));
}
startSumOfNumbers();

module.exports = {sum, sumLength, sumOfNumbers};