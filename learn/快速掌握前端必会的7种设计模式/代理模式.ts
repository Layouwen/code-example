// 类形式
class RealImg {
  constructor(private fileName: string) {}
  public display() {
    this.loadFromDisk()
    console.log(`display ${this.fileName}`)
  }
  private loadFromDisk() {
    console.log(`loading ${this.fileName}`)
  }
}

class ProxyImg {
  constructor(private realImg: RealImg) {}
  public display() {
    console.log('proxy display')
    this.realImg.display()
  }
}

const realImg = new RealImg('1.png')
const proxyImg = new ProxyImg(realImg)

proxyImg.display()

// proxy 语法
const student = {
  name: 'Avan',
  age: 22,
  address: 'guangzhou',
}

const proxyStudent = new Proxy(student, {
  get(target, key) {
    if (key === 'address') {
      return 'connect my wx: 123456789'
    }
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    if (key === 'age') {
      if (typeof value === 'number') {
        Reflect.set(target, key, value)
      }
    } else {
      Reflect.set(target, key, value)
    }
    return true
  },
  has(target, key) {
    if (key === 'address') {
      return false
    }
    return true
  },
})

console.log(proxyStudent.name, 'name')
console.log(proxyStudent.age, 'age')
console.log(proxyStudent.address, 'address')
// @ts-ignore
proxyStudent.age = '25'
proxyStudent.name = 'avan'
console.log(proxyStudent.name, 'name')
console.log(proxyStudent.age, 'age')
proxyStudent.age = 26
console.log(proxyStudent.age, 'age')
console.log('address' in proxyStudent, 'name' in proxyStudent)

export default {}
