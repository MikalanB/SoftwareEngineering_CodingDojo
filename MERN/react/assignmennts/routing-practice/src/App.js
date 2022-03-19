import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Home from './views/Home';
import Number from './views/Number';
import Word from './views/Word';
import Multiple from './views/Multiple';

function App() {
  return (
    <div className="App">
      <h1>Routing Practice Assignment</h1>

      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path ="/:num">
          <Number />
        </Route>

        <Route exact path ="/:word">
          <Word />
        </Route>

        <Route exact path ="/:word/:color1/:color2">
          <Multiple />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
