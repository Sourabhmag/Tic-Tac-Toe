import { useState } from "react";
import Square from "../square/Square";
import "./gameBoard.css";
const GameBoard = () => {
    const emptyGame = [
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null }
    ];
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameState, setGameState] = useState(emptyGame);
    const [moves, setMoves] = useState(0);

    const handleClick = (index) => {
        let newGameState = gameState;
        if (newGameState[index].value === null) {
            newGameState[index].value = currentPlayer;
            setGameState(newGameState);
            let nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
            setCurrentPlayer(nextPlayer);
            let result = checkWin();
            if (result) {
                alert(`${result} won the match`);
                setGameState(emptyGame);
                setMoves(0);
            }
            else {
                let count = moves + 1;
                console.log(count);
                setMoves(count);
                if (count === 9) {
                    alert(`Draw.....!`);
                    setGameState(emptyGame);
                    setMoves(0);
                }
            }
        }
    }

    const checkWin = () => {
        if (gameState[0].value === gameState[1].value &&
            gameState[1].value === gameState[2].value) {
            return gameState[1].value;
        }

        if (gameState[3].value === gameState[4].value &&
            gameState[4].value === gameState[5].value) {
            return gameState[3].value;
        }

        if (gameState[6].value === gameState[7].value &&
            gameState[7].value === gameState[8].value) {
            return gameState[6].value;
        }

        if (gameState[0].value === gameState[3].value &&
            gameState[3].value === gameState[6].value) {
            return gameState[0].value;
        }

        if (gameState[1].value === gameState[4].value &&
            gameState[4].value === gameState[7].value) {
            return gameState[1].value;
        }

        if (gameState[2].value === gameState[5].value &&
            gameState[5].value === gameState[8].value) {
            return gameState[2].value;
        }

        if (gameState[0].value === gameState[4].value &&
            gameState[4].value === gameState[8].value) {
            return gameState[0].value;
        }

        if (gameState[2].value === gameState[4].value &&
            gameState[4].value === gameState[6].value) {
            return gameState[2].value;
        }
    }
    const reset = () => {
        setGameState(emptyGame);
        setMoves(0);
    }
    return (
        <div className="main">
            <div>
                <h2>Current Player : {currentPlayer}</h2>
                <button onClick={e => reset()}>Reset</button>
            </div>
            <div className="box">
                {gameState.map((square, key) => (
                    <Square key={key} index={key} handleClick={handleClick} gameState={gameState} />
                ))}
            </div>
        </div>
    );
}
export default GameBoard;