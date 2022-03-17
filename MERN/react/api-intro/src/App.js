import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';


function App() {
  const [breweries, setBreweries] = useState([]);
  const [form, setForm] = useState([]);


  const fetchInfo = (event) => {
    event.preventDefault();

    console.log("calling API")

    fetch("https://api.openbrewerydb.org/breweries?by_city="+form) // call the API
      .then(res => res.json()) // get the informartion and make it readable as an object
      .then(res => { // create a function to now manipulate the data
        console.log(res);
        setBreweries(res)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <h1>Hey it's me</h1>
      <form>
        <input type="text" onChange={(event) =>setForm(event.target.value)}/>
        <button type="submit" onClick={fetchInfo} className="btn btn-primary btn-lg">Fetch Info</button>
      </form>
      <ul>
        {
          breweries.map((item, i) => {
            return <li key={i}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
