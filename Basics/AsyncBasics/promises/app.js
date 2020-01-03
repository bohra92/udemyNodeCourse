const promise = new Promise((resolve, reject) => {
    resolve('s')
    //reject('maa ki chudiyan')
  }).then((msg) => {
    console.log('we are on the first line', msg);
  })
  .then((msg) => {
    console.log('we are on the second line', msg);
  })
  .catch((msg) => {
    console.log("thats it");
  })
