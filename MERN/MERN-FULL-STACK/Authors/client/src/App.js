import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import Create from './views/Create';
import {Switch, Route, Link} from 'react-router-dom';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >Authors</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Add Author</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1>Favorite Authors</h1>

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/edit/:_id">
          <Update />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
