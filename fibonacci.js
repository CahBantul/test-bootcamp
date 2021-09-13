const fibonacci = (arr) => {
  const num = arr.reduce((prev, curr) => prev + curr);

  if (num == 0) {
    return 0;
  }

  let first = 0,
    second = 1;

  let third = first + second;

  while (third <= num) {
    first = second;
    second = third;
    third = first + second;
  }

  let fibo = Math.abs(third - num) >= Math.abs(second - num) ? second : third;
  console.log(Math.abs(num - fibo));
};

fibonacci([15, 1, 3]);
