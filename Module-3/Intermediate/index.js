//1.

function ucFirstLetters(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(" ");
}

console.log(ucFirstLetters("los angeles"));

//2.

function truncate(str, max) {
  if (str.length > max) {
    return str.substring(0, max) + "...";
  } else {
    return str;
  }
}

console.log(truncate("This text will be truncated if it is too long", 25));

//3.

const animals = ["Tiger", "Giraffe"];

animals.push("Elephant", "Lion");
console.log(animals);

animals.unshift("Bear", "Zebra");
console.log(animals);

animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}

replaceMiddleAnimal("Monkey");
console.log(animals);

function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
}

console.log(findMatchingAnimals("t"));

//4.

function camelCase(cssProp) {
  const parts = cssProp.split("-");

  for (let i = 1; i < parts.length; i++) {
    parts[i] = parts[i][0].toUpperCase() + parts[i].substring(1);
  }
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

//5.

function currencyAddition(float1, float2) {
  return (float1 * 100 + float2 * 100) / 100;
}

console.log(currencyAddition(0.1, 0.2));

//6.

function unique(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours));
console.log(unique(testScores));

//7.

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(bookId) {
  const book = books.find((b) => b.id === bookId);

  return book ? book.title : null;
}

console.log(getBookTitle(3));

//8.

const phoneBookABC = new Map();
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map();
phoneBookDEF.set("David", "0411222333");
phoneBookDEF.set("Emma", "0422333444");
phoneBookDEF.set("Frank", "0433444555");

phoneBookABC.set("Caroline", "0466778899");

function printPhoneBook(contacts) {
  contacts.forEach((phone, name) => {
    console.log(`${name}: ${phone}`);
  });
}

printPhoneBook(phoneBookABC);

const combinedPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log([...combinedPhoneBook.keys()]);

//9

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {
  let total = 0;

  for (let name in salaries) {
    total += salaries[name];
  }

  return total;
}

console.log(sumSalaries(salaries));

function topEarner(salaries) {
  let topName = "";
  let topSalary = 0;

  for (let name in salaries) {
    if (salaries[name] > topSalary) {
      topSalary = salaries[name];
      topName = name;
    }
  }

  return topName;
}

console.log(topEarner(salaries));

//10.
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + " minutes have passed so far today");

const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + " seconds have passed so far today");
