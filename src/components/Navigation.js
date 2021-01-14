import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StyleIcon from '@material-ui/icons/Style';
import HomeIcon from '@material-ui/icons/Home';
import '../styles/navigation.css';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function Navigation() {
    const [drawer, setDrawer] = useState(false);
    const classes = useStyles();

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setDrawer(open);
    };

    const list = (anchor) => (
        // console.log([classes.fullList]: anchor === 'top' || anchor === 'bottom');
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'Men', 'Women', 'LookBook'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <StyleIcon /> : <HomeIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </div>
    );

    return (
        <div className="navigation">
            <div className="hamburger_icon">
                <React.Fragment key={'bottom'}>
                    <Button onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </Button>
                    <SwipeableDrawer
                        anchor="bottom"
                        open={drawer}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        {list('bottom')}
                    </SwipeableDrawer>
                </React.Fragment>
            </div>
            <span class="flex_nav"></span>
            <div className="navigation__menu">
                <p>HOME</p>
                <p>
                    MEN <ArrowDropDownIcon />
                </p>
                <p>
                    WOMEN <ArrowDropDownIcon />
                </p>
                <p>LOOKBOOK</p>
                <p>BLOG</p>
            </div>
            <div className="navigation__right">
                <FavoriteBorderIcon />
                <hr />
                <SearchIcon />
            </div>
        </div>
    );
}

export default Navigation;
