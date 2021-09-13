const palindrome = (str) => {
  const newStr = str.toLowerCase().match(/[a-z0-9]/g);
  return console.log(newStr.join('') === newStr.reverse().join(''));
};

palindrome('Radar');
palindrome('Malam');
palindrome('Kasur ini rusak');
palindrome('Ibu Ratna antar ubi');
palindrome('Malas');
palindrome('Makan nasi goreng');
palindrome('Balonku ada lima');
