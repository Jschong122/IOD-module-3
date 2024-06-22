let a = 2,
  b = 3;
let result = `${a} + ${b} is ${
  a + b < 10 ? "less than 10" : "greater than 10"
}`;

console.log(result);

function getGreeting(name) {
  return "Hello " + name + "!";
}

let greet = function (name) {
  return "Hello," + name + "!";
};

let greet = (name) => {
  return "Hello," + name + "!";
};

console.log(greet("Jess"));
console.log(greet("Leo"));

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: " Lees",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6 ? "let's exchange phone number" : "haha",
};
inigo.greeting(westley);
inigo.greeting(rugen);

const basketballGame = {
  score: 0,
  foul: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },

  foul() {
    this.foul++;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score + ", foul" + this.foul);
    return this;
  },

  finalScore() {
    console.log("Full-time final score is " + this.score + ",foul" + this.foul);
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .foul()
  .halfTime()
  .finalScore();

console.log(basketballGame);

function argument(obj) {
  for (let prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
  }
}

function printPer(perth) {
  for (let Per in perth) console.log(`${Per}: ${perth[Per]}`);
}

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const perth = {
  name: "Perth",
  state: "Western Australia",
  timezone: "GMT+8",
};

argument(sydney);
printPer(perth);

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = [...teamSports];
moreSports.push("bastketball", "Golf");
let dog1 = "Bingo";
let dog2 = "Pancake";
let cat1 = { name: "Fluffy", breed: "Siberian" };
let cat2 = { name: "Snowy", breed: "English short hair" };

console.log(teamSports);
console.log(cat1);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

const Kate = new Person("Kate", 16);
const Peter = new Person("Peter", 32);

console.log(Peter);
console.log(Kate);

function personClass(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

const Leo = new personClass("Leo", 40);
console.log(Leo);

function canDrive(person) {
  if (person.age >= 18) {
    return `${person.name} is old enoguth to drive`;
  } else {
    return `${person.name} is not allowed to drive.`;
  }
}

console.log(canDrive(Leo));
console.log(canDrive(Kate));
console.log(canDrive(Peter));
