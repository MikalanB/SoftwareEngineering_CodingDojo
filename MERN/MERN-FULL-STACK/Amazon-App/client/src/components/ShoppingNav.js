import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TreeItem, TreeView } from '@mui/lab';


export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 ,}}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List sx={{margin: '0px', paddingTop: '0px'}}>
            <Box sx={{ display: 'flex', height: '55px', backgroundColor: '#0F1111', alignItems: 'center', paddingLeft: '10px'}}>
                <AccountCircleIcon style={{marginLeft: '15px', color: "white", marginBottom: '5px'}}/> 
                <h4 style={{marginLeft: '10px', color: "white"}}>Hello, sign in</h4>
            </Box>
            <ListItem sx={{marginTop: "10px", marginLeft: '10px'}}>
                <h5><strong>Trending</strong></h5>
            </ListItem>
            {['Best Sellers', 'New Releases', 'Movers & Shakers'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemText primary={text} sx={{marginLeft: '10px'}}/>
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            <ListItem sx={{marginTop: "10px", marginLeft: '10px'}}>
                <h5><strong>Digital Content & Devices </strong></h5>
            </ListItem>
            {['Prime Video', 'Amazon Music', 'Echo & Alexa', 'Fire Tablets', 'Fire TV', 'Kindle E-readers & Books', 'Audible Books & Originals', "Amazon Photos", 'Appstore for Android', 'AWS Courses'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemText primary={text} sx={{marginLeft: '10px'}}/>
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            <ListItem sx={{marginTop: "10px", marginLeft: '10px'}}>
                <h5><strong>Shop By Department </strong></h5>
            </ListItem>
            {['Clothin, Shoes, Jewelry & Watches', 'Books', 'Movies, Music & Games', 'Electronics', "See All"].map((text, index) => (
            <ListItem button key={text}>
                <ListItemText primary={text} sx={{marginLeft: '10px'}}/>
            </ListItem>
            ))}
        </List>
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
        <Divider />
        <List>
            <ListItem sx={{marginTop: "10px", marginLeft: '10px'}}>
                <h5><strong>Programs & Features</strong></h5>
            </ListItem>
            {['Whole Foods Market', 'Pharmacy', 'Amazon Physical Stores', "Subscrib and Save", 'See All'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemText primary={text} sx={{marginLeft: '10px'}} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            <ListItem sx={{marginTop: "10px", marginLeft: '10px'}}>
                <h5><strong>Help & Settings</strong></h5>
            </ListItem> 
            <ListItem button component={Link} to="/account">
                <ListItemText primary="Your Account" sx={{marginLeft: '10px'}} />
            </ListItem>
            <ListItem>
                <LanguageIcon sx={{marginLeft: '10px'}} />
                <ListItemText primary="English" sx={{marginLeft: '10px'}} />
            </ListItem> 
            <ListItem>
                <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" style={{height: "20px", width: "20px", marginLeft: '10px'}} />
                <ListItemText primary="United States" sx={{marginLeft: '10px'}} />
            </ListItem>
            <ListItem button component={Link} to="/customer-service">
                <ListItemText primary="Customer Service" sx={{marginLeft: '10px'}} />
            </ListItem>
            <ListItem button component={Link} to="/sign-out">
                <ListItemText primary="Sign In" sx={{marginLeft: '10px'}} />
            </ListItem>
        </List>
        </Box>
    );

    return (
        <div>
        {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} sx={{color: 'white'}}><MenuIcon /> All</Button>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
            </React.Fragment>
        ))}
        </div>
    );
    }