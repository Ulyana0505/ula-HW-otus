function whichDay(date) {
    let dateArr = date.split(".");
    dateArr.reverse();
    let day = new Date(dateArr.join("-"));
    let dayOfTheWeek = day.getDay();
    if (dayOfTheWeek === 0) {
      return "Воскресенье";
    } else if (dayOfTheWeek === 1) {
      return "Понедельник";
    } else if (dayOfTheWeek === 2) {
      return "Вторник";
    } else if (dayOfTheWeek === 3) {
      return "Среда";
    } else if (dayOfTheWeek === 4) {
      return "Четверг";
    } else if (dayOfTheWeek === 5) {
      return "Пятница";
    } else if (dayOfTheWeek === 6) {
      return "Суббота";
    }
  }

function howManyMin(hours, min) {
    let minInHours = hours * 60;
    const todayAllMin = minInHours + min;
    return "С начала сегодняшенего дня прошло: " + todayAllMin + " минут.";
  }
function howManyMinStart() {
    let today = new Date();
    let todayHours = today.getHours();
    let todayMin = today.getMinutes();
    console.log(howManyMin(todayHours, todayMin));
}

function whoIsOlder(a, b) {
    let birthDate_1_Arr = a.split(".");
    birthDate_1_Arr.reverse();
    let birthDate_1_New = birthDate_1_Arr.join(".");
    let birthDate_2_Arr = b.split(".");
    birthDate_2_Arr.reverse();
    let birthDate_2_New = birthDate_2_Arr.join(".");
    if (birthDate_1_New > birthDate_2_New) {
      return `Пользователь с ДР ${a} младше`;
    } else {
      return `Пользователь с ДР ${b} младше`;
    }
}

module.exports = {whichDay, howManyMin, whoIsOlder};