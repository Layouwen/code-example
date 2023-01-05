// 有快车和专车
// 快车每公里 1 元，专车每公里 2 元
// 开始行程时，显示车辆信息
// 结束行程时，显示车辆信息和价格

abstract class Car {
  dist = 0;
  abstract price: number;

  protected constructor(public no: number, public name: string) {}
}

class FastCar extends Car {
  price = 1;

  constructor(no: number, name: string) {
    super(no, name);
  }
}

class SpecialCar extends Car {
  price = 2;

  constructor(no: number, name: string) {
    super(no, name);
  }
}

class Trip {
  private timer?: NodeJS.Timeout;

  constructor(private car: Car) {}

  private showInfo() {
    console.log(`No: ${this.car.no}, Name: ${this.car.name}`);
  }

  private showPrice() {
    console.log(`Price: ${this.car.dist * this.car.price}`);
  }

  start() {
    this.timer = setInterval(() => {
      this.car.dist++;
    }, 100);
    this.showInfo();
  }

  end() {
    this.timer && clearInterval(this.timer);
    this.showPrice();
  }
}

const fastCar = new FastCar(18812312, "快车");
const fastCarTrip = new Trip(fastCar);
const specialCar = new SpecialCar(83123, "专车");
const specialCarTrip = new Trip(specialCar);

fastCarTrip.start();
specialCarTrip.start();

setTimeout(() => {
  fastCarTrip.end();
  specialCarTrip.end();
}, 2000);

export default {};
