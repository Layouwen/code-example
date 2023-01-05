const obj = {};
const arr: never[] = [];

class People {
  static good = "good";

  constructor(private name: string, private age: number) {}

  sayInfo() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
  }
}

class Student extends People {
  constructor(name: string, age: number, private stdNo: number) {
    super(name, age);
  }

  public sayStdNo() {
    console.log(`My student number is ${this.stdNo}`);
  }
}

const std = new Student("Jack", 18, 2019001);
std.sayInfo();
std.sayStdNo();
const p1 = new People("Tom", 20);
p1.sayInfo();

// @ts-ignore
console.log(obj.__proto__ === Object.prototype);
// @ts-ignore
console.log(arr.__proto__ === Array.prototype);
// @ts-ignore
console.log(arr.__proto__.__proto__ === Object.prototype);
// @ts-ignore
console.log(std.__proto__ === Student.prototype);
// @ts-ignore
console.log(std.__proto__.__proto__ === People.prototype);
// @ts-ignore
console.log(std.__proto__.__proto__.__proto__ === Object.prototype);
// @ts-ignore
console.log(obj.__proto__.__proto__ === null);

// @ts-ignore
People.aaa = "aaa";
// @ts-ignore
People.prototype.aaaa = "aaaa";

// @ts-ignore
console.log(p1.aaaa);
// @ts-ignore
console.log(People.aaa);
console.log(People.good);

export default {};
