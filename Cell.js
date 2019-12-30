export default class Cell {
  constructor() {

    const rand = Math.ceil(Math.random() * 40)
    //  this.num = (rand < 10 ?  rand : '')
    if (rand < 10) this.num = rand
    else this.num = ''
  }
}