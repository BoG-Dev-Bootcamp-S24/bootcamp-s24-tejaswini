import React, { useState } from 'react';
import './ResetButton.css';
import {IncrementButton} from '../increment/IncrementButton';

function ResetButton({ setCount }) {
    console.log(setCount)
    return (
        <button className="reset-button" onClick={() => {setCount(count => 0)}}>
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
