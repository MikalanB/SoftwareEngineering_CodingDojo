import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, Link} from 'react-router-dom';
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TemporaryDrawer from './ShoppingNav';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Fragment, useState } from 'react';
import Search from './Search';
var store = require('store')


const Header = (props) => {
    const [basket, setBasket] = useState([])
    const cart = store.get('cart');

    return (
        <div className="App">
            <div className="header">
                <Link to="/">
                    <img
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /></Link>


                <div className="header__search">
                    <Search />
                    <input className="header__searchInput" type="text" />
                    <SearchIcon className="header__searchIcon" />
                </div>

                <div className="header__nav">
                    <Link to="/signin">
                        <div className="header__option">
                            <span className="header__optionLineOne">Hello Guest</span>
                            <span className="header__optionLineTwo">Sign In</span>
                        </div>
                    </Link>


                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>



                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>


                    <div className="header__optionBasket">
                        <Link to="/cart"><ShoppingBasketIcon /></Link>
                        <span className="header__optionLineTwo header__basketCount">
                            {cart?.length}
                        </span>
                    </div>

                </div>
            </div>
            <div className="shopping_nav">
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px', marginRight: '20px', width: '100%' }}>
                        <TemporaryDrawer />
                        <List sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Best Sellers" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Amazon Basics" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="New Releases" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/customer-service">
                                <ListItemText primary="Customer Service" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Today's Deal" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Prime" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Amaszon Home" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Books" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Music" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Registry" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Fashion" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Kindle Books" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                            <ListItem button component={Link} to="/best-sellers">
                                <ListItemText primary="Gift Cards" className="menu-list" primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItem>
                        </List>
                    </Box>
            </div>
        </div>
    )}

export default Header;