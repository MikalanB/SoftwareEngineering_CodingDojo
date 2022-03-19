import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import '@mui/material'
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <h1>Axios Pokemon API</h1>
      <Button variant="contained">Fetch Pokemon</Button>

      <Pokemon></Pokemon>
    </div>
  );
}

export default App;
