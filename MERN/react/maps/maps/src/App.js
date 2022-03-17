import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Place from './components/Place';

function App() {
  const [places, setPlace] = useState([
    "Mason's Creamery",
    "Mitchel's Ice Cream",
    "Margie's Candies",
    "Mannings"
    // <li>Mason's Creamery</li>, - this is what react wants you to do
    // <li>Mitchel's Ice Cream</li>
    // <li>Margie's Candies</li>
  ]);

  const [form,setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newState = [...places, form];
    setPlace(newState)

  }

  return (
    <div className="App">
      <h1>Favorite Ice Cream</h1>
      {/* {
        for (let i = 0; i < places.length; i++) {
          <p>{places[i]}</p>
        }
      } */}
      <form onSubmit={onSubmitHandler}>
        <input type="text" className="w-50 mx-auto form-control" placeholder="What's your favorite ice cream?" onChange={(event)=> {setForm(event.target.value)}}/>
        <input type="submit" className="w-50 mx-auto btn btn-primary btn-lg my-2"/>
      </form>

      <ol>
      {
        places.map((item, i) => {
          console.log(`function run ${i}, item: ${item}`);
          return <Place key={i} name={item}/>
        })
      }
      </ol>
    </div>
  );
}

export default App;
