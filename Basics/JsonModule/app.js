const fs = require('fs');

//writing a JSON file
const testJSON = {
  name: "Tanuj",
  planet: "earth",
  age: "27"
}

fs.writeFileSync("TestJSON.json", JSON.stringify(testJSON))

//reading a JSON file
const readJSON = fs.readFileSync("testJSON.json")
console.log(readJSON.toString());
const parsedJSON = JSON.parse(readJSON.toString())
console.log(parsedJSON);
console.log(parsedJSON.planet);

//updating JSON
parsedJSON.planet = "Mars"

fs.writeFileSync("TestJSON.json", JSON.stringify(parsedJSON))
