import React, { Component } from 'react'
import './App.css'
import Table from './Table'

class App extends Component {
  render() {
    return (
      <main>
        <div>
          <h1>Minesweeper</h1>
          <Table />
        </div>
      </main>
    )
  }
}

export default App
