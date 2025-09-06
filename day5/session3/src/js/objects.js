// =========================
// Objects in JavaScript - 40 Examples
// =========================

// Ex1: Object Literal
const student = { name: "Ashvini", age: 22 };
console.log(student);
// Output: { name: 'Ashvini', age: 22 }

// Ex2: Access properties with dot notation
console.log(student.name);
// Output: Ashvini

// Ex3: Access properties with bracket notation
console.log(student["age"]);
// Output: 22

// Ex4: Add a new property
student.branch = "ENTC";
console.log(student);
// Output: { name: 'Ashvini', age: 22, branch: 'ENTC' }

// Ex5: Update property
student.age = 23;
console.log(student.age);
// Output: 23

// Ex6: Delete property
delete student.branch;
console.log(student);
// Output: { name: 'Ashvini', age: 23 }

// Ex7: Method inside object
const person = {
  firstName: "Rashmi",
  greet: function () {
    return "Hello " + this.firstName;
  },
};
console.log(person.greet());
// Output: Hello Rashmi

// Ex8: Shorthand method
const user = {
  name: "Om",
  sayHi() {
    return "Hi " + this.name;
  },
};
console.log(user.sayHi());
// Output: Hi Om

// Ex9: Nested Object
const company = {
  name: "Thinkbridge",
  department: { head: "Sanjana", employees: 10 },
};
console.log(company.department.head);
// Output: Sanjana

// Ex10: Object inside array
const students = [
  { name: "Ayush", age: 21 },
  { name: "Rohit", age: 22 },
];
console.log(students[1].name);
// Output: Rohit

// Ex11: Array inside object
const course = {
  title: "JavaScript",
  topics: ["Functions", "Objects", "Scope"],
};
console.log(course.topics[1]);
// Output: Objects

// Ex12: Check property existence
console.log("name" in student);
// Output: true

// Ex13: for...in loop
for (let key in student) {
  console.log(key, student[key]);
}
// Output: name Ashvini
// age 23

// Ex14: Object.keys()
console.log(Object.keys(student));
// Output: [ 'name', 'age' ]

// Ex15: Object.values()
console.log(Object.values(student));
// Output: [ 'Ashvini', 23 ]

// Ex16: Object.entries()
console.log(Object.entries(student));
// Output: [ [ 'name', 'Ashvini' ], [ 'age', 23 ] ]

// Ex17: Copy object using Object.assign
const copy1 = Object.assign({}, student);
console.log(copy1);
// Output: { name: 'Ashvini', age: 23 }

// Ex18: Copy object using spread operator
const copy2 = { ...student };
console.log(copy2);
// Output: { name: 'Ashvini', age: 23 }

// Ex19: Freeze object
const frozen = Object.freeze({ lang: "JS" });
frozen.lang = "Python";
console.log(frozen.lang);
// Output: JS

// Ex20: Seal object
const sealed = Object.seal({ city: "Pune" });
sealed.city = "Mumbai";
delete sealed.city;
console.log(sealed.city);
// Output: Mumbai

// Ex21: Object with boolean values
const settings = { darkMode: true, notifications: false };
console.log(settings.darkMode);
// Output: true

// Ex22: Object with null
const item = { id: 1, description: null };
console.log(item.description);
// Output: null

// Ex23: Object constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}
const car1 = new Car("Toyota", "Corolla");
console.log(car1);
// Output: Car { make: 'Toyota', model: 'Corolla' }

// Ex24: Add method to constructor
Car.prototype.getMake = function () {
  return this.make;
};
console.log(car1.getMake());
// Output: Toyota

// Ex25: Object.create
const proto = {
  greet: function () {
    return "Hello";
  },
};
const obj = Object.create(proto);
console.log(obj.greet());
// Output: Hello

// Ex26: Destructuring object
const { name, age } = student;
console.log(name, age);
// Output: Ashvini 23

// Ex27: Nested destructuring
const emp = { id: 10, address: { city: "Nagpur" } };
const {
  address: { city },
} = emp;
console.log(city);
// Output: Nagpur

// Ex28: Dynamic property name
const prop = "score";
const game = { [prop]: 100 };
console.log(game.score);
// Output: 100

// Ex29: Check object type
console.log(typeof student);
// Output: object

// Ex30: Compare objects (reference check)
const objA = { val: 1 };
const objB = { val: 1 };
console.log(objA === objB);
// Output: false

// Ex31: Merge objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged);
// Output: { a: 1, b: 2 }

// Ex32: Optional chaining
const user1 = { profile: { email: "abc@test.com" } };
console.log(user1.profile?.email);
// Output: abc@test.com

// Ex33: Object with array of objects
const library = {
  books: [{ title: "Book1" }, { title: "Book2" }],
};
console.log(library.books[0].title);
// Output: Book1

// Ex34: JSON stringify
console.log(JSON.stringify(student));
// Output: {"name":"Ashvini","age":23}

// Ex35: JSON parse
const str = '{"x":5,"y":10}';
const parsed = JSON.parse(str);
console.log(parsed.x + parsed.y);
// Output: 15

// Ex36: hasOwnProperty
console.log(student.hasOwnProperty("age"));
// Output: true

// Ex37: Object.is
console.log(Object.is(25, 25));
// Output: true

// Ex38: Object.entries with for...of
for (let [key, value] of Object.entries(settings)) {
  console.log(key, value);
}
// Output: darkMode true
// notifications false

// Ex39: Function returning object
function createUser(name, role) {
  return { name, role };
}
console.log(createUser("Ashvini", "Leader"));
// Output: { name: 'Ashvini', role: 'Leader' }

// Ex40: Object as function parameter
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
printUser(student);
// Output: Ashvini is 23 years old
