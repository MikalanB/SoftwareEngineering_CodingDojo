import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeCard from './components/PokeCard';

function App() {
  return (
    <div className="App">
      <h1>Hey it's me</h1>
      <PokeCard pokemon="mawile" />
    </div>
  );
}

export default App;
