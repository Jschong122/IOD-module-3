//1

function makeCounter() {
  let currentCount = 0;

  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

counter1(); // 1
counter1(); // 2
counter2(); // 1
counter2(); // 2

function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;

  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };

  let counter1 = makeCounter(0, 1);
  let counter2 = makeCounter(5, 2);

  counter1(); // 1
  counter1(); // 2
  counter2(); // 7
  counter2(); // 9
}

//2

//  1 #4: Not delayed at all
//  2 #3: Delayed by 0ms
//  3 #2: Delayed by 20ms
//  4 #1: Delayed by 100ms

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

const timeoutID = setTimeout(delayMsg, 15000, "#5: Delayed by 15 seconds");
clearTimeout(timeoutID);

//3
function debounce(func, ms = 1000) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), ms);
  };
}

function printMe(msg) {
  console.log("printing debounced message:", msg);
}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe("#1"), 100);
setTimeout(() => printMe("#2"), 200);
setTimeout(() => printMe("#3"), 300);

//4

function printFibonacci() {
  let a = 1,
    b = 1;
  console.log(a);
  console.log(b);
  setInterval(() => {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }, 1000);
}

function printFibonacciTimeouts(limit) {
  let a = 1,
    b = 1,
    count = 2;
  console.log(a);
  console.log(b);

  function nextFibonacci() {
    if (count >= limit) return;
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
    count++;
    setTimeout(nextFibonacci, 1000);
  }

  setTimeout(nextFibonacci, 1000);
}

printFibonacciTimeouts(10);

//5
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

car.description();

setTimeout(() => car.description(), 200);

let carClone = { ...car, year: 2022 };
carClone.description();

setTimeout(car.description.bind(car), 200);

let carNewClone = { ...car, model: "718 Cayman" };
carNewClone.description();

//6

Function.prototype.delay = function (ms) {
  let func = this;
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

multiply.delay(500)(5, 5);

function multiplyFour(a, b, c, d) {
  console.log(a * b * c * d);
}

multiplyFour.delay(500)(2, 2, 2, 2);

//7

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age} years old, ${this.gender}`;
};

const person1 = new Person("James Brown", 73, "male");
const person2 = new Person("Lucy Liu", 45, "female");

console.log(person1.toString());
console.log(person2.toString());

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.toString = function () {
  return `${this.name}, ${this.age} years old, ${this.gender}, cohort: ${this.cohort}`;
};

const student1 = new Student("John Doe", 21, "male", "2023");
const student2 = new Student("Jane Smith", 22, "female", "2023");

console.log(student1.toString());
console.log(student2.toString());

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    const currentTime = `${hours}:${mins}`;

    if (currentTime === this.wakeupTime) {
      console.log("Wake Up");
      this.stop();
    } else {
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
  }
}

const myClock = new DigitalClock("my clock:");
myClock.start();

const myPrecisionClock = new PrecisionClock("my precision clock:", 2000);
myPrecisionClock.start();

const myAlarmClock = new AlarmClock("my alarm clock:", "07:00");
myAlarmClock.start();

//9

function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 20000) + 1000;
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(`Successful delay of ${delay} ms`);
      } else {
        reject(`Failed delay of ${delay} ms`);
      }
    }, delay);
  });
}

randomDelay()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

//10

import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
  return fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
}

async function fetchURLDataAsync(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
];

Promise.all(urls.map(fetchURLDataAsync))
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
