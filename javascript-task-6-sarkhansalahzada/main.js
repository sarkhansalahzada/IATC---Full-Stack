// 1
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person('John Doe', 25);

console.log('john instanceof Person:', john instanceof Person);

// 2
function User(name) {
  this.name = name;
}

function Employee(name, position) {
  User.call(this, name); // Call the User constructor with the provided name
  this.position = position;
}

Employee.prototype = Object.create(User.prototype);
Employee.prototype.constructor = Employee;

const jane = new Employee('Jane Doe', 'Manager');

console.log(john instanceof Employee); // true
console.log(john instanceof User); // true

// 3

// 4

// 5

// 6

// 7

// 8
globalThis.name = 'foo';

function log(name) {
  new Function('\tconsole.log(name);')();
}

log('bar');

// 9
const obj = {
  name: 'foo',
  log: function () {
    console.log(this.name);
  },
};

// const log = obj.log;

log();

// 10
const person = {
  name: 'foo',
  age: 20,
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.age;
    }
    if (hint === 'string') {
      return this.name;
    }
    return this.name;
  },
};

console.log(Number(person) + 10); // 30
`${person} is ${Number(person) > 18 ? 'adult' : 'child'}`; // 'foo is adult'


