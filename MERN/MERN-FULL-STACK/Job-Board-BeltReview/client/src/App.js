import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Main from './views/Main';
import SingleJob from './views/SingleJob';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path="/">
        <Main />
      </Route>

      <Route exact path="/jobs/create">

      </Route>

      <Route exact path="/jobs/:_id">
        <SingleJob />
      </Route>
      <Route exact path="/jobs/update/:_id">

      </Route>
    </Switch>
    </div>
  );
}

export default App;
