import React from 'react';
import ReactDOM from 'react-dom';
import PokeDex from './components/PokeDex.js';

const App = () => {
    return (
        <React.StrictMode>
            <PokeDex />
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;