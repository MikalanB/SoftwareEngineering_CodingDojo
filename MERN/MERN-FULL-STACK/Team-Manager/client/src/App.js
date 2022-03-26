import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Link, Route} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import PlayerStatus from './views/PlayerStatus';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/players/list" className="navbar-brand" >Team Manager</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/players/list" className="nav-link" aria-current="page">Manage Players</Link>
              </li>
              <li className="nav-item">
                <Link to="/status/game/1" className="nav-link">Manage Player Status</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/players/list">
          <Main />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/edit/:_id">
          <Update />
        </Route>
        <Route exact path="/status/game/1">
          <PlayerStatus />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
