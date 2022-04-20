import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, Link} from 'react-router-dom';
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Main from './views/Main';
import TemporaryDrawer from './components/ShoppingNav';
import Box from '@mui/material/Box';
import YourAccount from './views/YourAccount';
import CustomerService from './views/CustomerService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CreateProduct from './views/CreateProduct';
import Delete from './views/Delete';
import Update from './views/Update';
import ViewProduct from './views/ViewProduct';
import YourCart from './views/YourCart';
import CartContext from './context/CartContext';
import { Fragment, useState } from 'react';
import Search from './components/Search';
import Login from './views/Login';
import Header from './components/Header';
import Register from './views/Register';
var store = require('store')


function App() {

  const [basket, setBasket] = useState([])
  const cart = store.get('cart');

  return (
    <div className="App">
      <CartContext.Provider value={{basket, setBasket}}>
    <Switch>
      <Fragment>
        <Route exact path="/">
          <Header />
          <Main />
        </Route>
        <Route exact path="/admin/create-product">
          <CreateProduct />
        </Route>
        <Route exact path="/account">
          <Header />
          <YourAccount />
        </Route>
        <Route exact path="/view/:_id">
          <Header />
          <ViewProduct />
        </Route>
        <Route exact path="/customer-service">
          <Header />
          <CustomerService />
        </Route>
        <Route exact path="/delete">
          <Delete />
        </Route>
        <Route exact path="/admin/update/:_id">
          <Update />
        </Route>
        <Route exact path="/cart">
          <Header />
          <YourCart />
        </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      </Fragment>
    </Switch>
    </CartContext.Provider>
    </div>
  );
}

export default App;
