//zadanie 1

const persons = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

const generatePseudonym = persons.map((person) => {
  if (
    typeof person.firstName === "string" &&
    typeof person.lastName === "string"
  ) {
    if (
      person.firstName.trim().length >= 3 &&
      person.lastName.trim().length >= 3
    ) {
      const firstThreeLellers = person.firstName
        .slice(-3)
        .split("")
        .reverse()
        .join("");
      const lastThreeLellers = person.lastName
        .slice(0, 3)
        .split("")
        .reverse()
        .join("");
      const pseudonym =
        (firstThreeLellers + lastThreeLellers).charAt(0).toUpperCase() +
        (firstThreeLellers + lastThreeLellers).slice(1).toLowerCase();
      person.nickName = pseudonym;
      return person;
    } else {
      return person;
    }
  } else {
    return person;
  }
});

//console.log(generatePseudonym);

// Zadanie 2

const createPersonAge = persons
  .filter((person) => person.nickName)
  .map((person, index) => {
    const numberOfLetters = person.firstName.length + person.lastName.length;
    let age = 0;
    if (numberOfLetters % 2 === 1) {
      const numberOfLettersFromKeys = Object.keys(person).reduce(
        (acc, key) => (acc += key.length),
        0
      );
      const divider = index === 0 ? 1 : index;
      age = Math.ceil(numberOfLettersFromKeys / divider);
      person.age = age;
      return person;
    } else {
      age = numberOfLetters;
      person.age = age;
      return person;
    }
  });

//console.log(createPersonAge);

const mostCommonLetter = createPersonAge.map((person) => {
  const counter = {};
  const oneString =
    `${person.firstName}${person.lastName}${person.nickName}`.toLowerCase(
      person.nickName
    );
  for (const letter of oneString) {
    counter[letter] = counter[letter] ? counter[letter] + 1 : 1;
  }
  return counter;
});

const createMostCommonLetter = createPersonAge.map((person) => {
  const counter = {};
  const oneString =
    `${person.firstName}${person.lastName}${person.nickName}`.toLowerCase(
      person.nickName
    );
  for (const letter of oneString) {
    counter[letter] = counter[letter] ? counter[letter] + 1 : 1;
  }
  // console.log(counter);
  let thisLetter = "";
  let count = 0;

  for (const letter in counter) {
    if (counter[letter] > count) {
      thisLetter = letter;
      count = counter[letter];

    } else if (count === counter[letter] && letter < thisLetter) { 
      thisLetter = letter;
    }
  }
  person.mostCommonLetter = {
    letter: thisLetter,
    count: count,
  };
  return person;
});

console.log(createMostCommonLetter);




