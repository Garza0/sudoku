import Cell from './Cell.js'

export default class Board {
  constructor(domEl) {
    this.domEl = domEl
    this.cells = []
    for (let i = 0; i < 9; i++) {
      this.cells.push([])
      for (let k = 0; k < 9; k++) {
        this.cells[i].push(new Cell)
      }
    }

    this.render()
  }

  render() {

    this.domEl.innerHTML = this.cells.reduce((html, row) =>
      html + `<tr>${row.reduce((html, cell) =>
        html + `<td>${cell.num}</td>`, '')}</tr>`, '')

  }

}





