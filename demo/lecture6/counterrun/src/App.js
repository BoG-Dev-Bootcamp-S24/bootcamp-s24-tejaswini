import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ResetButton from './components/reset/ResetButton';

function App() {
  return (
    <div className="App">
     <Counter />
     <ResetButton />
    </div>
  );
}

export default App;
