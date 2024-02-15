import React from 'react';
import './ResetButton.css';

function ResetButton({ setCount }) {
    return (
        <button className="reset-button" onClick={() => {setCount(0)}}>
        Reset
        </button>
    );
}

// function ResetButton({ onReset }) {
//   return (
//     <button className="reset-button" onClick={onReset}>
//       Reset
//     </button>
//   );
// }

export default ResetButton;
