const park = new Park()
for (let i = 0; i < 3; i++) {
  const floor = new ParkFloor(i + 1)
  park.addFloor(floor)
  for (let j = 0; j < 100; j++) {
    const place = new ParkPlace(j)
    floor.addPlace(place)
  }
}

console.log('====================================');
console.log(park, 'park');
console.log('====================================');

const car1 = new Car(111111111)
const car2 = new Car(222222222)
const car3 = new Car(333333333)

document.querySelector('#enter1')?.addEventListener('click', () => {
  park.enter(1, 1, car1)
})
document.querySelector('#leave1')?.addEventListener('click', () => {
  park.leave(car1)
})
document.querySelector('#enter2')?.addEventListener('click', () => {
  park.enter(1, 2, car2)
})
document.querySelector('#leave2')?.addEventListener('click', () => {
  park.leave(car2)
})
document.querySelector('#enter3')?.addEventListener('click', () => {
  park.enter(1, 3, car3)
})
document.querySelector('#leave3')?.addEventListener('click', () => {
  park.leave(car3)
})
