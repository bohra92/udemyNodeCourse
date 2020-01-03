//contains example of how useful is arrow function with this operator

gamer = {
  name: 'Tanuj',
  favoriteGame: 'RE7',
  summary: function() {
    console.log(`${name}'s favorite game is ${favoriteGame}' `);
  }
}
// the above code will be error

gamer1 = {
  name: 'Tanuj',
  favoriteGame: 'RE7',
  summary: function() {
    console.log(`${this.name}'s favorite game is ${this.favoriteGame}' `);
  }
}

gamer2 = {
  name: 'Tanuj',
  favoriteGame: 'RE7',
  summary: () => {
    console.log(`${this.name}'s favorite game is ${this.favoriteGame}' `);
  }
}
//arrow function cant be used in above code because arrow function dont bind their own this value ,
//that means arrow function are not suited for the properties that are function.

// to solve it we may use

gamer3 = {
  name: 'Tanuj',
  favoriteGame: 'RE7',
  summary() {
    console.log(`${this.name}'s favorite game is ${this.favoriteGame}' `);
  }
}

gamer3.summary();


gamer4 = {
  name: 'Tanuj',
  favoriteGame: 'RE7',
  gamesPlayed: ['Arkham Knight', 'RE7', 'Pes 19', 'CODMW'],
  summary() {
    console.log(`${this.name}'s favorite game is ${this.favoriteGame}' `);
    this.gamesPlayed.forEach(function(game) {
      console.log(`${game} is all good but best is ${this.favoriteGame} is best`)
      //here this.favoriteGame is undefined because forEach function will have its individual binding
      //and will only be able to use summary's object(parent function) through this nad not one level up.
      // here arrow function uses this in context when it was created , so here this is created in summary so we have access to gamesPlayeds
    })
  }
}
gamer4.summary()


gamer5 = {
  name: 'Tanuj',
  favoriteGame: 'RE7',
  gamesPlayed: ['Arkham Knight', 'RE7', 'Pes 19', 'CODMW'],
  summary() {
    console.log(`${this.name}'s favorite game is ${this.favoriteGame}' `);
    this.gamesPlayed.forEach((game) => {
      console.log(`${game} is all good but best is ${this.favoriteGame} is best`)
    })
  }
}

gamer5.summary()
