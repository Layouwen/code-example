class Student {
  constructor(private name: string, private age: number) {}

  sayName() {
    console.log(`我的名字是${this.name}，今年${this.age}岁`);
  }
}

const createStudent = (name: string, age: number) => {
  return new Student(name, age);
};

const avan = createStudent("Avan", 18);
const vanyu = createStudent("Vanyu", 22);
avan.sayName();
vanyu.sayName();

export default {};
