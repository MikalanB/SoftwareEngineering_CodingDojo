import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Second from './views/Second';
import Repeater from './views/Repeater';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Pokemon from './views/Pokemon';

function App() {
  const [category, setCategory] = useState("pokemon")
  const [detail, setDetail] = useState("")

  const history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    history.push(`/${category}/${detail}`)
  }

  return (
    <div className="App">
      <h1>Hey it's me</h1>
      <div className="navBar">
        <Link to="/repeat/heyItsMe/64" className="btn btn-primary btn-lg">Test</Link>
        <form onSubmit={onSubmitHandler}>
          <select className="form-select w-25 d-inline-block" onChange={(event) => setCategory(event.target.value)}>
            <option>pokemon</option>
            <option>repeat</option>
          </select>
          <input type="text" className="form-control w-25 d-inline-block" onChange={(event) => setDetail(event.target.value)}/>
          <input type="submit" className="btn btn-primary btn-lg" />
        </form>
      </div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path ="/second">
          <Second/>
        </Route>

        <Route exact path ="/repeat/:word">
          <Repeater />
        </Route>

        <Route exact path="/pokemon/:name">
          <Pokemon />
        </Route>
      </Switch>
      {/* <Home/>
      <Second /> */}
    </div>
  );
}

export default App;
