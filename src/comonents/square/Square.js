import React from 'react';
import "../square/square.css";

export default function Square( {index, handleClick, gameState}) {
    return (
        <div class = "square" onClick={e => handleClick(index)}>
            {gameState[index].value}
        </div>
    )
}
