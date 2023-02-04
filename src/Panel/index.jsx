import React from 'react';

function Panel({ score }) {
    return (
        <div className='panel'>
            <h1>Rock Paper Scissors Lizard Spock</h1>
            <h2>Score<br />{score}</h2>
        </div>
    )
};

export default Panel;