import React, { Component } from 'react'

class Cell extends Component {
  checkCell = event => {
    console.log('click')
    this.props.checkCell(this.props.row, this.props.col)
    return
  }

  flagCell = event => {
    console.log('right')
  }

  render() {
    return (
      <td onClick={this.checkCell} onContextMenu={this.flagCell}>
        {this.props.value}
      </td>
    )
  }
}

export default Cell
