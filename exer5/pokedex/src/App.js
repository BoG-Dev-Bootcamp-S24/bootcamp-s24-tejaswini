import React from 'react';
import ReactDOM from 'react-dom';
import PokeDex from './PokeDex';

const App = () => {
    return (
        <React.StrictMode>
            <PokeDex />
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));