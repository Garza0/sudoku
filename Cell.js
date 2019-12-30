export default class Cell {
  constructor(x, y) {
    this.x = x
    this.y = y
    const rand = Math.ceil(Math.random() * 40)

    if (rand < 10) {
      this.num = rand
      this.fixed = true
    }
    else this.num = ''
    this.render()
    this.element.cell = this
  }

  render() {

    this.element = document.createElement('td')
    this.element.innerText = this.num
    if (this.fixed != true) {
      this.element.contentEditable = true

      this.element.onkeydown = this.handleKey.bind(this)
    }

  }

  handleKey({ key }) {

    setTimeout(() =>
      this.num = this.element.innerText = '123456789'.includes(key) ? +key : '', 0)
  }

}