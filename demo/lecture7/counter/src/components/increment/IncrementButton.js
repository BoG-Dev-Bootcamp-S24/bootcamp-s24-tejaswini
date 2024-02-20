import React from 'react';
import './IncrementButton.css';

// function IncrementButton({ setCount }) {
//   return (
//     <button className="increment-button" onClick={() => {setCount((prevCount) => prevCount + 1)}}> {/* equivalent to setCount(currentCountValue + 1) */}
//       Increment
//     </button>
//   );
// }

function IncrementButton({ onIncrement }) {
  return (
    <button className="increment-button" onClick={onIncrement}>
      Increment
    </button>
  );
}

export default IncrementButton;