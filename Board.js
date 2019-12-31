import Cell from './Cell.js'

export default class Board {
  constructor(domEl) {
    this.domEl = domEl
    this.cells = []
    for (let y = 0; y < 9; y++) {
      this.cells.push([])

      for (let x = 0; x < 9; x++) {
        this.cells[y].push(new Cell(x, y))
      }
    }
    this.render()
  }

  render() {
    this.cells.forEach(row => {
      const tr = document.createElement('tr')
      row.forEach(cell => tr.appendChild(cell.element))
      this.domEl.appendChild(tr)
    })
  }
  check() {
    let finishArr = this.cells.map(row => row.map(cell => cell.num))
    finishArr = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]]
    let newArr = []

    for (let i = 0; i < 9; i += 3) {
      for (let k = 0; k < 9; k += 3) {
        const arr = []
        for (let j = i; j < i + 3; j++) {
          for (let n = k; n < k + 3; n++) {
            arr.push(finishArr[j][n])
          }
        }
        newArr.push(arr)

      }
    }

    if (!finishArr.every(row => row.every(Boolean)) ||
      !finishArr.every(row => new Set(row).size == 9) ||
      !finishArr.every((_, i) => new Set(finishArr.map(row => row[i])).size == 9) ||
      !newArr.every(row => new Set(row).size == 9)
    ) return false


    return true


  }
}





