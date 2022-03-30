import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, Link} from 'react-router-dom';
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Main from './views/Main';
import TemporaryDrawer from './components/ShoppingNav';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TreeItem, TreeView } from '@mui/lab';
import Box from '@mui/material/Box';
import YourAccount from './views/YourAccount';
import CustomerService from './views/CustomerService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { typography } from '@mui/system';
import CreateProduct from './views/CreateProduct';
import Delete from './views/Delete';
import Update from './views/Update';
import ViewProduct from './views/ViewProduct';


function App() {
  return (
    <div className="App">
      <div className="header">
          
          <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          /></Link>
        

        <div className="header__search">
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
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                0
              </span>
            </div>
    
        </div>
      </div>
      <div className="shopping_nav">
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px', marginRight: '20px', width: '100%'}}>
          <TemporaryDrawer />
          <List sx={{ display: 'flex', alignItems: 'center'}}>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Best Sellers" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Amazon Basics" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="New Releases" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/customer-service">
                <ListItemText primary="Customer Service" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Today's Deal" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Prime" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Amaszon Home" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Books" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Music" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Registry" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Fashion" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Kindle Books" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
            <ListItem button component={Link} to="/best-sellers">
                <ListItemText primary="Gift Cards" className="menu-list" primaryTypographyProps={{fontSize: '14px'}}  />
            </ListItem>
          </List>
        </Box>

      </div>

        {/* <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandLessIcon />}
            defaultExpandIcon={<ExpandMoreIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
            <TreeItem nodeId="1" label="Applications">
                <TreeItem nodeId="2" label="Calendar" />
            </TreeItem>
            <TreeItem nodeId="5" label="Documents">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="MUI">
                <TreeItem nodeId="8" label="index.js" />
                </TreeItem>
            </TreeItem>
        </TreeView> */}


    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/admin/create-product">
        <CreateProduct />
      </Route>
      <Route exact path="/account">
        <YourAccount />
      </Route>
      <Route exact path="/view/:_id">
        <ViewProduct />
      </Route>
      <Route exact path="/customer-service">
        <CustomerService />
      </Route>
      <Route exact path="/delete">
        <Delete />
      </Route>
      <Route exact path="/admin/update/:_id">
        <Update />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
