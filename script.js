import Board from './Board.js'

const board = new Board(document.querySelector('.board'))

Object.assign(window, { board })

