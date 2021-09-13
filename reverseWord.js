const reverseWord = (string) => {
  const newString = string.split('').reverse().join('').split(' ').reverse();

  return newString;
};
console.log(reverseWord('I am A Great human'));
