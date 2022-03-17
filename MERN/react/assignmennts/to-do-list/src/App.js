import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState([])
  // [{ // changing it to an object to accept more things and better able to change checkbox
  //   text: "",
  //   description: "",
  //   completed: false
  // }
  const [form, setForm] = useState("")
  const [checked, setChecked] = useState(false)

  // const handleClick = () => {
  //   setChecked(!checked)
  // }

  const onSubmitHandler = (event) => {
    console.log("hello")

    event.preventDefault();
  
      const newState = [...task, form];
      setTask(newState);
  }

  const onDeleteHandler = (index) => {
    console.log(index);

    const copyState = [...task];
    copyState.splice(index, 1);
    setTask(copyState);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <form onSubmit={onSubmitHandler}>
        <div className="d-flex justify-content-around">
          <input type="text" className="form-control w-50" placeholder="Type a new task here" onChange={(event) => {setForm(event.target.value)}}/>
          {/* <input type="text" className="form-control w-50" placeholder="Describe task here" onChange={(event) => {setForm(event.target.value)}}/> */}
          <input type="submit" className="btn btn-primary btn-lg" value="Add task" />
        </div>
      </form>

      <div>
      <ul className="list-group list-group-flush">
        {
            task.map((item, i) => {
                return <div className="d-flex my-3 justify-content-evenly">
                <li className="list-group-item w-50 d-flex my-3 justify-content-evenly" key={i}>{item}
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                    Complete
                    </label>
                </div>
                <input type="submit" className="btn btn-dark btn-lg" value="Delete" onClick={()=> {onDeleteHandler(i)}}/>
                </li>
                </div>
            })
        } 
        </ul>
      </div>
    </div>
  );
}

export default App;
