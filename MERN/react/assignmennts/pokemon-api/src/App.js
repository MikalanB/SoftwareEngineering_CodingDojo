import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Pokemon from './components/Pokemon';
import { useState, useEffect} from 'react';
import Pokemon from './components/Pokemon';

function App() {

  const [allPokemon, setAllPokemon] = useState([])

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setAllPokemon([...allPokemon]);
  }

  return (
    <div>
      <div>
          <h1>Pokemon API Assignment</h1>
          <br></br>
          <Pokemon />
      </div>
    </div>
  );
}

export default App;
