const person = {
  name: "Farjana",
  age: 19,
  isMarried: false,
};
console.log(person, typeof person);

const personStr = JSON.stringify(person);
console.log(personStr, typeof personStr);

const convertObj = JSON.parse(personStr);
console.log(convertObj, typeof convertObj);
