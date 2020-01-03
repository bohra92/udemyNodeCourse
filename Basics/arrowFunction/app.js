//contains basics of using arrow function 
mult = function(x) {
  return x * x
}

arrowMult = (x) => {
  return x * x
}

arrowMultExtreme = (x) => x * x


console.log(`without using arrow function ${mult(2)}`);
console.log(`with using arrow function ${arrowMult(2)}`);
console.log(`without using arrow function for one line function body ${arrowMultExtreme(2)}`);
