import './App.css';
import Header from './components/header.jsx';
import Game from './components/game.jsx';

function App() {
  return (
    <div className="App">
      <Header score = "0" highScore = "0" />
      <Game />
    </div>
  );
}

export default App;
