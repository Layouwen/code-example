// 类形式
class People {
  constructor(private name: string) {}
  sayHello() {
    console.log(`Hello, I'm ${this.name}`)
  }
}

class PeopleDecorator {
  constructor(private people: People) {}
  sayHello() {
    this.sayHelloBase()
    this.people.sayHello()
    this.sayHelloBase()
  }
  private sayHelloBase() {
    console.log('====================')
  }
}

const tom = new People('Tom')
const tomDecorator = new PeopleDecorator(tom)
tomDecorator.sayHello()

// 装饰器模式
// rome-ignore lint/suspicious/noExplicitAny: <explanation>
const DogDecorator = (target: any) => {
  target.level = 20
}

const log = (prefix: string) => {
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    console.log(target, 'target')
    const originMethod = descriptor.value
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    descriptor.value = function (...args: any[]) {
      console.log(`${prefix} ${key} is called ${prefix}`)
      const returnValue = originMethod.apply(this, args)
      console.log(`${prefix} ${key} is called ${prefix}`)
      return returnValue
    }
  }
}

@DogDecorator
class Dog {
  static level = 0
  constructor(private name: string) {}

  @log('*******************')
  bark() {
    console.log(`${this.name} is barking, level: ${Dog.level}`)
  }
}

const dog = new Dog('Vanyu')
dog.bark()

export default {}
