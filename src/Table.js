import React, { Component } from 'react'
import Cell from './Cell'
import Minesweeper from './Minesweeper'

class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 1,
      board: [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
      ],
      state: 'new',
      mines: 10
    }
  }
  render() {
    const board = Minesweeper['board']

    return (
      <table>
        <thead>
          <tr>
            <th colspan="8">
              <button>🤟</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* {this.state.values(board).map(Minesweeper => ( */}
            <Cell value={Minesweeper.board[0][0]} />
            <Cell value={Minesweeper.board[0][1]} />
            <Cell value={Minesweeper.board[0][2]} />
            <Cell value={Minesweeper.board[0][3]} />
            <Cell value={Minesweeper.board[0][4]} />
            <Cell value={Minesweeper.board[0][5]} />
            <Cell value={Minesweeper.board[0][6]} />
            <Cell value={Minesweeper.board[0][7]} />

            {/* ))} */}
          </tr>
          <tr>
            <Cell value="0" />
            <Cell value="1" />
            <Cell value="2" />
            <Cell value="3" />
            <Cell value="4" />
            <Cell value="5" />
            <Cell value="6" />
            <Cell value="7" />
          </tr>
          <tr>
            <Cell value="0" />
            <Cell value="1" />
            <Cell value="2" />
            <Cell value="3" />
            <Cell value="4" />
            <Cell value="5" />
            <Cell value="6" />
            <Cell value="7" />
          </tr>
          <tr>
            <Cell value="0" />
            <Cell value="1" />
            <Cell value="2" />
            <Cell value="3" />
            <Cell value="4" />
            <Cell value="5" />
            <Cell value="6" />
            <Cell value="7" />
          </tr>
          <tr>
            <Cell value="0" />
            <Cell value="1" />
            <Cell value="2" />
            <Cell value="3" />
            <Cell value="4" />
            <Cell value="5" />
            <Cell value="6" />
            <Cell value="7" />
          </tr>
          <tr>
            <Cell value="0" />
            <Cell value="1" />
            <Cell value="2" />
            <Cell value="3" />
            <Cell value="4" />
            <Cell value="5" />
            <Cell value="6" />
            <Cell value="7" />
          </tr>
          <tr>
            <Cell value="0" />
            <Cell value="1" />
            <Cell value="2" />
            <Cell value="3" />
            <Cell value="4" />
            <Cell value="5" />
            <Cell value="6" />
            <Cell value="7" />
          </tr>
          <tr>
            <Cell value="0" />
            <Cell value="1" />
            <Cell value="2" />
            <Cell value="3" />
            <Cell value="4" />
            <Cell value="5" />
            <Cell value="6" />
            <Cell value="7" />
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
