import './App.css'
import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom } from './logic/board'



function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  console.log(board)

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // No actualizamos posición, sino se repite el juego
    if (board[index] || winner) return
    // actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //cambio de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // nuevo ganador
    const newWinner = checkWinnerFrom(newBoard)

    if (newWinner) {
      setWinner(newWinner)
      alert('has')
    }

  }



  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

    </main>
  )
}

export default App
