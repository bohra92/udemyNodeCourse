//below we have given example of callback which will compute basic addition

const add = a,
  b => callback(a + b)


const firstFunc = (a, b, callback) => {
  callback(a + b)
}

firstFunc(1, 2, (sum) => {
      add(3, sum, (newSum) => {
        console.log(newSum);
      })
