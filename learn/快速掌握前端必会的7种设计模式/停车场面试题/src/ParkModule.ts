// 停车场有 3 层，每层 100 个车位
// 车辆进入时，由摄像头拍摄车牌号和时间
// 车辆进入时，显示屏提示还有几个空余车位
// 车辆离开后，车牌和停车时长

class Car {
  constructor(public no: number) {}
}

class ParkPlace {
  car?: Car
  constructor(public index: number) {}

  in(car: Car) {
    this.car = car
  }

  out() {
    this.car = undefined
  }

  isEmpty() {
    return this.car === undefined
  }
}

class ParkFloor {
  placeList: ParkPlace[] = []

  constructor(public index: number) {}

  get emptyCount() {
    return this.placeList.filter(place => place.isEmpty()).length
  }

  addPlace(place: ParkPlace) {
    this.placeList.push(place)
  }
}

class Park {
  private camera = new Camera()
  private screen = new ParkScreen()
  private floorList: ParkFloor[] = []
  public cameraInfo = new Map<number, ParkInfo>()

  constructor() {}

  addFloor(floor: ParkFloor) {
    this.floorList.push(floor)
  }

  showPlace(floorIndex: number): void {
    const floor = this.floorList.find(floor => floor.index === floorIndex)
    if (!floor) return
    console.log(`第${floorIndex}层还有${floor.emptyCount}个空余车位`)
  }

  private _enter(floorIndex: number, placeIndex: number, car: Car) {
    const floor = this.floorList.find(floor => floor.index === floorIndex)
    if (!floor) return false
    const place = floor.placeList.find(place => place.index === placeIndex)
    if (!place) return false
    place.in(car)
    return true
  }

  enter(floorIndex: number, placeIndex: number, car: Car): boolean {
    this.showPlace(floorIndex)
    if (this._enter(floorIndex, placeIndex, car)) {
      this.cameraInfo.set(car.no, this.camera.shot(car))
      return true
    }
    return false
  }

  _leave(car: Car) {
    for (const floor of this.floorList) {
      for (const place of floor.placeList) {
        ;if (place.car && place.car.no === car.no) {
          place.out()
          return true
        }
      }
    }
    return false
  }

  leave(car: Car) {
    if (this._leave(car)) {
      const info = this.cameraInfo.get(car.no)
      if (info) {
        this.cameraInfo.delete(car.no)
        this.screen.show(car, info)
      }
    }
  }
}

interface ParkInfo {
  no: number
  inTime: number
}

class Camera {
  shot(car: Car): ParkInfo {
    return {
      no: car.no,
      inTime: Date.now(),
    }
  }
}

class ParkScreen {
  show(car: Car, info: ParkInfo) {
    console.log(`车牌号：${car.no}，停车时间：${Date.now() - info.inTime}`)
  }
}
