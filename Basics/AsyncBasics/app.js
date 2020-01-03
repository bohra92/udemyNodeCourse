cconsole.log('start');

setTimeout(() => {
  console.log("processing after 2 secs");
}, 2000)

setTimeout(() => {
  console.log("processing after 1 secs");
}, 1000)

console.log('stop');
