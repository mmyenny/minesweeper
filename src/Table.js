import React, { Component } from 'react'
import Cell from './Cell'
import axios from 'axios'

class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playing: false,
      difficulty: 0,
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
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: this.state.difficulty
      })
      .then(response => {
        this.setState({
          playing: true,
          game: response.data
        })
      })
  }

  checkCell = (row, col) => {
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${
          this.state.game.id
        }/check`,
        { id: this.state.game.id, row: row, col: col }
      )
      .then(response => {
        this.setState({
          game: response.data
        })
      })
  }

  flagCell = (row, col) => {
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${
          this.state.game.id
        }/flag`,
        { id: this.state.game.id, row: row, col: col }
      )
      .then(response => {
        this.setState({
          game: response.data
        })
      })
  }

  headerText = () => {
    if (this.state.playing) {
      if (this.state.game.state === 'won') {
        return '✨You win!✨'
      }

      if (this.state.game.state === 'lost') {
        return 'You lost!'
      }

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

  buttonText = () => {
    if (this.state.game.state === 'lost') {
      return '☄️'
    } else {
      return '👽'
    }
  }

  chooseDifficulty = event => {
    this.setState({
      difficulty: parseInt(event.target.value)
    })
  }

  render() {
    const board = this.state.game.board

    return (
      <table>
        <thead>
          <tr>
            <th colSpan="8">
              <select
                value={this.state.difficulty}
                onChange={this.chooseDifficulty}
              >
                <option value="0">Easy</option>
                <option value="1">Intermediate</option>
                <option value="2">Expert</option>
              </select>
              <button onClick={this.newGame}>{this.buttonText()}</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="gameStatus" colSpan="8">
              {this.headerText()}
            </td>
          </tr>
          <tr>
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={0}
              col={0}
              value={board[0][0]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={0}
              col={1}
              value={board[0][1]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={0}
              col={2}
              value={board[0][2]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={0}
              col={3}
              value={board[0][3]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={0}
              col={4}
              value={board[0][4]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={0}
              col={5}
              value={board[0][5]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={0}
              col={6}
              value={board[0][6]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={0}
              col={7}
              value={board[0][7]}
            />
          </tr>
          <tr>
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={1}
              col={0}
              value={board[1][0]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={1}
              col={1}
              value={board[1][1]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={1}
              col={2}
              value={board[1][2]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={1}
              col={3}
              value={board[1][3]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={1}
              col={4}
              value={board[1][4]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={1}
              col={5}
              value={board[1][5]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={1}
              col={6}
              value={board[1][6]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={1}
              col={7}
              value={board[1][7]}
            />
          </tr>
          <tr>
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={2}
              col={0}
              value={board[2][0]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={2}
              col={1}
              value={board[2][1]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={2}
              col={2}
              value={board[2][2]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={2}
              col={3}
              value={board[2][3]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={2}
              col={4}
              value={board[2][4]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={2}
              col={5}
              value={board[2][5]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={2}
              col={6}
              value={board[2][6]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={2}
              col={7}
              value={board[2][7]}
            />
          </tr>
          <tr>
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={3}
              col={0}
              value={board[3][0]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={3}
              col={1}
              value={board[3][1]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={3}
              col={2}
              value={board[3][2]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={3}
              col={3}
              value={board[3][3]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={3}
              col={4}
              value={board[3][4]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={3}
              col={5}
              value={board[3][5]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={3}
              col={6}
              value={board[3][6]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={3}
              col={7}
              value={board[3][7]}
            />
          </tr>
          <tr>
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={4}
              col={0}
              value={board[4][0]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={4}
              col={1}
              value={board[4][1]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={4}
              col={2}
              value={board[4][2]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={4}
              col={3}
              value={board[4][3]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={4}
              col={4}
              value={board[4][4]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={4}
              col={5}
              value={board[4][5]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={4}
              col={6}
              value={board[4][6]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={4}
              col={7}
              value={board[4][7]}
            />
          </tr>
          <tr>
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={5}
              col={0}
              value={board[5][0]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={5}
              col={1}
              value={board[5][1]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={5}
              col={2}
              value={board[5][2]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={5}
              col={3}
              value={board[5][3]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={5}
              col={4}
              value={board[5][4]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={5}
              col={5}
              value={board[5][5]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={5}
              col={6}
              value={board[5][6]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={5}
              col={7}
              value={board[5][7]}
            />
          </tr>
          <tr>
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={6}
              col={0}
              value={board[6][0]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={6}
              col={1}
              value={board[6][1]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={6}
              col={2}
              value={board[6][2]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={6}
              col={3}
              value={board[6][3]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={6}
              col={4}
              value={board[6][4]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={6}
              col={5}
              value={board[6][5]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={6}
              col={6}
              value={board[6][6]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={6}
              col={7}
              value={board[6][7]}
            />
          </tr>
          <tr>
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={7}
              col={0}
              value={board[7][0]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={7}
              col={1}
              value={board[7][1]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={7}
              col={2}
              value={board[7][2]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={7}
              col={3}
              value={board[7][3]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={7}
              col={4}
              value={board[7][4]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={7}
              col={5}
              value={board[7][5]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={7}
              col={6}
              value={board[7][6]}
            />
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={7}
              col={7}
              value={board[7][7]}
            />
          </tr>
          <tr>
            <td className="footer" colSpan="8">
              {this.minesText()}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
