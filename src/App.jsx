import { useState } from 'react';
import Panel from './Panel';
import Result from './Result';
import Start from './Start';

function App() {
  const [state, setState] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  
  const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  const play = (playerChoice) => {
    setPlayerChoice(playerChoice);
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    setComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
      setResult('Draw');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors')
      ||
      (playerChoice === 'rock' && computerChoice === 'lizard')
      ||
      (playerChoice === 'paper' && computerChoice === 'rock')
      ||
      (playerChoice === 'paper' && computerChoice === 'spock')
      ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
      ||
      (playerChoice === 'scissors' && computerChoice === 'lizard')
      ||
      (playerChoice === 'lizard' && computerChoice === 'spock')
      ||
      (playerChoice === 'lizard' && computerChoice === 'paper')
      ||
      (playerChoice === 'spock' && computerChoice === 'scissors')
      ||
      (playerChoice === 'spock' && computerChoice === 'rock')
    ) {
      setResult('You win');
      setScore(score + 1);
    } else {
      setResult('You lose');
      if (score !== 0){
        setScore(score - 1);
      }
    }
    setState(true)
  };

  return (
    <div>
      <Panel score={score} />
      {state
        ? (
          <Result
            score={score}
            setState={setState}
            result={result}
            computerChoice={computerChoice}
            playerChoice={playerChoice}
          />
        ) :
        <Start
          score={score}
          play={play}
        />
      }
    </div>
  );
}

export default App;

