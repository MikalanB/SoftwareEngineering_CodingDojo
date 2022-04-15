import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateSundae from './views/CreateSundae';

function App() {
  const [sundae, setSundae] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/sundae/findAll")
      .then(res => {
        console.log(res.data)
        setSundae(res.data);
      })
  }, [])

  return (
    <div className="App">
      <ul>
      {
        sundae.map((item, i) => {
          return <li key={i}>Name: <strong>{item.name}</strong>, 
          Flavor: <strong>{item.flavor}</strong>, 
          Num Scoops: <strong>{item.numScoops}</strong>, 
          Whipped: <strong>{item.whipped}</strong>, 
          Toppings: <strong>{item.toppings}</strong>
          </li>
        })
      }
      </ul>

{/* 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav> */}

        <Switch>
          {/* <Route exact path="/">
            <Main />
          </Route> */}

          <Route exact path="/create">
            <CreateSundae />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
