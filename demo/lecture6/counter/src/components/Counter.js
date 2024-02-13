
import React, { useState } from 'react';
import './Counter.css';
import IncrementButton from './increment/IncrementButton';
import ResetButton from './reset/ResetButton';


function Counter() {
    let count = 0;
  
    const increment = () => {
    };
  
    const decrement = () => {
      }
  
    return (
      <div className="counter">
        
      </div>
    );
  }


//--------------------------------------------------------------------------------------------

// naive implementation of a counter
// function Counter() {
//   let count = 0;

//   const increment = () => {
//     count++;
//     console.log(count);
//   };

//   const decrement = () => {
//     count--;
//     console.log(count);
//     }

//   return (
//     <div className="counter">
//       <h1>Counter: {count}</h1>
//       <button onClick={increment}>Increment</button> {/* equivalent to onClick={() => increment()} */}
//       <button onClick={decrement}>Decrement</button> {/* equivalent to onClick={() => decrement()} */}
//     </div>
//   );
// }

//--------------------------------------------------------------------------------------------

// correct implementation of a counter
// function Counter() {
//   const [count, setCount] = useState(0);
// const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div className="counter">
//       <h1>Counter: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

//--------------------------------------------------------------------------------------------

// changing state through child components
// function Counter() {
//     const [count, setCount] = useState(0);
  
//     return (
//       <div className="counter">
//         <h1>Counter: {count}</h1>
//         <IncrementButton setCount={setCount} />
//         <ResetButton setCount={setCount} />
//       </div>
//     );
//   }

//--------------------------------------------------------------------------------------------
// changing state through child components with restricted access
// function Counter() {
//     const [count, setCount] = useState(0);
  
//     const increment = () => {
//       setCount(count + 1);
//     };
  
//     const reset = () => {
//       setCount(0);
//     };
  
//     return (
//       <div className="counter">
//         <h1>Counter: {count}</h1>
//         <IncrementButton onIncrement={increment} />
//         <ResetButton onReset={reset} />
//       </div>
//     );
//   }


export default Counter;