import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import {Switch, Route} from 'react-router-dom';
import CreateProduct from './views/CreateProduct';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/create">
          <CreateProduct />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
