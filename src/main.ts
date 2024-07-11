document.querySelector(
  '#app'
)!.innerHTML = /*html */ `<h1>This is my first Vite App</h1>
`
// const house: IHouseOne = {
//   color: 'red',
//   size: '200kvm2',
//   postNumber: 234,
//   isInsured: false,
// }
// interface IHouseOne {
//   color: string
//   size: string
//   postNumber: number
//   isInsured: boolean
// }
// console.log(house)
interface IHouse {
  color: string
  size: string
  adress: string
  postNumber: number
  isInsured: boolean
  occupants: string[]
  // sayHi: Function
  sayHi: (name: string) => string
}
interface IVilla extends IHouse {
  hasRoof: boolean
}
const villa: IVilla = {
  color: 'yellow',
  size: '140kvm2',
  adress: 'Ringvägen',
  postNumber: 34,
  isInsured: true,
  occupants: ['Paul', 'Yashouh'],
  hasRoof: true,
  sayHi: function () {
    return 'HI'
  },
}
console.log(villa)
// console.log(house)
const anotherHouse: IHouse = {
  color: 'yellow',
  size: '140kvm2',
  adress: 'Ringvägen',
  postNumber: 34,
  isInsured: true,
  occupants: ['Paul', 'Yashouh'],
  sayHi: function () {
    return 'HI'
  },
}
console.log(anotherHouse.occupants)
