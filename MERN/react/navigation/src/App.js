import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import baby from './imgs/babygif.gif'
import banana from './imgs/banana.gif'
import Step from './components/Step'
import {useState} from 'react'

function App() {
  const [steps, setSteps] = useState([
    {direction:"right", instructions:"turn right at Fullerton Ave", distance:3.2},
    {direction:"forward", instructions:"continue at North Ave", distance:0.9},
    {direction:"left", instructions:"turn left at Milwaukee Ave", distance:1.1},
    {direction:"forward", instructions:"drive down North Ave", distance:2},
    {direction:"forward", instructions:"drive into lake Michigan", distance:Infinity}
  ])

  const [form, setForm] = useState({
      direction: "left", 
      instructions:"", 
      distance: 0
  })

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setSteps([
      ...steps,
      form
    ]);
  }

  const onDeleteHandler = (index) => {
    console.log(index);

    const copyState = [...steps];
    copyState.splice(index, 1);
    setSteps(copyState);
  }


  return (
    <div className="App">
      <div className="nav w-100 d-flex justify-content-evenly">
        <img classname="w-50" src={baby} alt = "dancing baby"/>
        <h1 className="w-50"><marquee>MAP QUEST</marquee></h1>
        <img src={banana} alt = "dancing banana"/>
      </div>

    <form onSubmit={onSubmitHandler}>
    <div class="row g-3 align-items-center">
      <div class="col-auto">
          <select className="form-select" name="direction" onChange={onChangeHandler}>
            <option>left</option>
            <option>right</option>
            <option>forward</option>
          </select>
        </div>
        <div class="col-auto">
          <input onChange={onChangeHandler} type="text" id="inputPassword6" class="form-control" placeholder="Where are you going?" name="instructions"/>
        </div>
        <div class="col-auto">
          <input onChange={onChangeHandler} step="0.1" type="number" id="inputPassword6" class="form-control" placeholder="How far?" name="distance"/>
        </div>
        <div class="col-auto">
          <input type="submit" class="form-control btn btn-success"/>
        </div>
      </div>
    </form>


    <div className="w-75 mx-auto">
      {
        steps.map((item, i) => {
          return <Step key={i} direction={item.direction} instructions={item.instructions} distance={item.distance} onDelete={()=> {onDeleteHandler(i)}}/>
        })
      }
    </div>
    </div>
  );
}

export default App;
