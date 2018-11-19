import React, { Component } from 'react'
import Cell from './Cell'
import axios from 'axios'

class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playing: false,
      game: {
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
  }

  newGame = event => {
    axios.post('https://minesweeper-api.herokuapp.com/games').then(response => {
      this.setState({
        playing: true,
        game: response.data
      })
    })
  }

  headerText = () => {
    if (this.state.playing) {
      return 'Happy mining!'
    } else {
      return 'Start a new game!'
    }
  }

  minesText = () => {
    if (this.state.playing) {
      return `${this.state.game.mines} mines left`
    } else {
      return ''
    }
  }

  render() {
    const board = this.state.game.board

    return (
      <table>
        <thead>
          <tr>
            <th colSpan="8">
              <select>
                <option value="0">Easy</option>
                <option value="1">Intermediate</option>
                <option value="2">Expert</option>
              </select>
              <button onClick={this.newGame}>
                <span role="img" aria-label="new game">
                  👽
                </span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="8">{this.headerText()}</td>
          </tr>
          <tr>
            <Cell value={board[0][0]} />
            <Cell value={board[0][1]} />
            <Cell value={board[0][2]} />
            <Cell value={board[0][3]} />
            <Cell value={board[0][4]} />
            <Cell value={board[0][5]} />
            <Cell value={board[0][6]} />
            <Cell value={board[0][7]} />
          </tr>
          <tr>
            <Cell value={board[1][0]} />
            <Cell value={board[1][1]} />
            <Cell value={board[1][2]} />
            <Cell value={board[1][3]} />
            <Cell value={board[1][4]} />
            <Cell value={board[1][5]} />
            <Cell value={board[1][6]} />
            <Cell value={board[1][7]} />
          </tr>
          <tr>
            <Cell value={board[2][0]} />
            <Cell value={board[2][1]} />
            <Cell value={board[2][2]} />
            <Cell value={board[2][3]} />
            <Cell value={board[2][4]} />
            <Cell value={board[2][5]} />
            <Cell value={board[2][6]} />
            <Cell value={board[2][7]} />
          </tr>
          <tr>
            <Cell value={board[3][0]} />
            <Cell value={board[3][1]} />
            <Cell value={board[3][2]} />
            <Cell value={board[3][3]} />
            <Cell value={board[3][4]} />
            <Cell value={board[3][5]} />
            <Cell value={board[3][6]} />
            <Cell value={board[3][7]} />
          </tr>
          <tr>
            <Cell value={board[4][0]} />
            <Cell value={board[4][1]} />
            <Cell value={board[4][2]} />
            <Cell value={board[4][3]} />
            <Cell value={board[4][4]} />
            <Cell value={board[4][5]} />
            <Cell value={board[4][6]} />
            <Cell value={board[4][7]} />
          </tr>
          <tr>
            <Cell value={board[5][0]} />
            <Cell value={board[5][1]} />
            <Cell value={board[5][2]} />
            <Cell value={board[5][3]} />
            <Cell value={board[5][4]} />
            <Cell value={board[5][5]} />
            <Cell value={board[5][6]} />
            <Cell value={board[5][7]} />
          </tr>
          <tr>
            <Cell value={board[6][0]} />
            <Cell value={board[6][1]} />
            <Cell value={board[6][2]} />
            <Cell value={board[6][3]} />
            <Cell value={board[6][4]} />
            <Cell value={board[6][5]} />
            <Cell value={board[6][6]} />
            <Cell value={board[6][7]} />
          </tr>
          <tr>
            <Cell value={board[7][0]} />
            <Cell value={board[7][1]} />
            <Cell value={board[7][2]} />
            <Cell value={board[7][3]} />
            <Cell value={board[7][4]} />
            <Cell value={board[7][5]} />
            <Cell value={board[7][6]} />
            <Cell value={board[7][7]} />
          </tr>
          <tr>
            <td colSpan="8">{this.minesText()} mines left</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
