import { useState } from "react"

const TURNS = {
  X: 'x',
  O:'o'
}

//<Square/> inside App Component

const Square = ({ children, isSelected, updateBoard, index })  => {

  //Conditional rendering
  const className = `square ${isSelected} ? 'is-selected' : ''`

  const handleClick = () => {
    updateBoard()
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  
  const [board, setBoard] = useState(Array(9).fill(null))
  
  //Create state to see whose turn is it
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = () => {
    // if turn euals turns.x; then, new turn is turns.o; if not, it's turns.x
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  }

  return (
    <main className="board">
      
      <h1>Tic-tac-toe</h1>
      
      <section className="game">
        {
          board.map((_, index) => {
            return (

              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}>

                {index}

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
