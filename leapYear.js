const leapYear = (year1, year2) => {
  let result = [];
  for (let index = year1 +1; index <= year2; index++) {
    if (index % 4 === 0) {
      result.push(index);
    }
  }
  return result;
};

console.log(leapYear(1900, 2020));
