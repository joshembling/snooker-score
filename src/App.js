import './App.css';

import { useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  const [score1, setScore1] = useState(0);
  const [break1, setBreak1] = useState(0);

  const [score2, setScore2] = useState(0);
  const [break2, setBreak2] = useState(0);

  const [player, setPlayer] = useState('player1');

  const [red, setRed] = useState(15);

  const breakArray = [];
  const handlePoints = (el) => {
    if (el.target.value == 1) {
      red !== 0 && setRed((prev) => red - 1);
    }

    if (player === 'player1') {
      setScore1((prev) => {
        return prev + parseInt(el.target.value);
      });

      setBreak1((prev) => {
        return prev + parseInt(el.target.value);
      });
    } else {
      setScore2((prev) => {
        return prev + parseInt(el.target.value);
      });

      setBreak2((prev) => {
        return prev + parseInt(el.target.value);
      });
    }
  };

  const handleRedo = (el) => {
    const value = el.target.value;

    const ballValues = [1, 2, 3, 4, 5, 6, 7];

    ballValues.forEach((val) => {
      if (val == value) {
        switch (value) {
          case value:
            setRed((prev) => prev + val);

            if (player === 'player1') {
              setScore1((prev) => prev - val);
              setBreak1((prev) => prev - val);
            } else {
              setScore2((prev) => prev - val);
              setBreak2((prev) => prev - val);
            }

            break;

          default:
            break;
        }
      }
    });
  };

  const handleFoul = (el) => {
    if (player === 'player1') {
      setScore1((prev) => {
        return prev + parseInt(el.target.value);
      });
    } else {
      setScore2((prev) => {
        return prev + parseInt(el.target.value);
      });
    }
  };

  const handleTurn = (el) => {
    setPlayer(el.target.value);
    player === 'player1' ? setBreak2(0) : setBreak1(0);
  };

  return (
    <div className='App'>
      <p>
        Player 1: {score1} {player === 'player1' ? '(' + break1 + ')' : ''}
      </p>
      <p>
        Player 2: {score2} {player === 'player2' ? '(' + break2 + ')' : ''}
      </p>

      <button value='player1' onClick={handleTurn}>
        Player 1 Turn
      </button>
      <button value='player2' onClick={handleTurn}>
        Player 2 Turn
      </button>
      <br />
      <br />

      <button
        value='1'
        onClick={handlePoints}
        disabled={red == 0 && 'disabled'}
      >
        Red ({red})
      </button>
      <button value='2' onClick={handlePoints}>
        Yellow
      </button>
      <button value='3' onClick={handlePoints}>
        Green
      </button>
      <button value='4' onClick={handlePoints}>
        Brown
      </button>
      <button value='5' onClick={handlePoints}>
        Blue
      </button>
      <button value='6' onClick={handlePoints}>
        Pink
      </button>
      <button value='7' onClick={handlePoints}>
        Black
      </button>
      <br />
      <br />
      <button value='1' onClick={handleRedo} disabled={red == 15 && 'disabled'}>
        Add red
      </button>
      <button value='2' onClick={handleRedo}>
        Add yellow
      </button>
      <br />
      <br />
      <button value='4' onClick={handleFoul}>
        Foul 4
      </button>
      <button value='5' onClick={handleFoul}>
        Foul 5
      </button>
      <button value='6' onClick={handleFoul}>
        Foul 6
      </button>
      <button value='7' onClick={handleFoul}>
        Foul 7
      </button>
    </div>
  );
}

export default App;
