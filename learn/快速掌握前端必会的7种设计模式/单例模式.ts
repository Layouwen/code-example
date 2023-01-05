class People {
  static instance: People;

  constructor(private name: string, private age: number) {
    if (People.instance) {
      return People.instance;
    } else {
      People.instance = this;
    }
  }
}

const avan = new People("Avan", 18);
const vanyu = new People("Vanyu", 22);
console.log(avan === vanyu);

export default {};
