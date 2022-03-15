import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Box from './components/Box';


function App() {
  const [color, setColor] = useState([
  ])

  const [form,setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newState = [...color, form];
    setColor(newState);
  }

  return (
    <div className="App">
      <h1>Box Generator</h1>

        <form onSubmit={onSubmitHandler}>
          <input type="text" className="w-50 mx-auto form-control my-3" onChange={(event)=> {setForm(event.target.value)}}/>
          <input type="submit" className="w-50 mx-auto btn btn-primary btn-lg my-2"/>
        </form>

      <div className="d-flex justify-content-around">
      {
        color.map((item, i) => {
          return <Box color={item} key={i}></Box>
        })
      }
      </div>
    </div>
  );
}


export default App;
