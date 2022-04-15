import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Switch, Route} from 'react-router-dom'
import Main from './views/Main';
import Create from './views/Create';
import ViewPirate from './views/ViewPirate';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/pirates">
          <Main />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/pirate/:_id">
          <ViewPirate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
