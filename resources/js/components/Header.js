import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Add from './Add';
import Edit from './Edit';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
	const classes = useStyles();
    return (
        <div>
         <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            My Blog
          </Typography>
          <Link className="navbar-brand" style={{color: '#fff'}} to="/">Home</Link>
          <Link className="navbar-brand" style={{color: '#fff'}} to="/add">Add</Link>
      
        </Toolbar>
      </AppBar>
			<Route exact path='/' component={Home}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/contact' component={Contact}/>
			<Route exact path='/add' component={Add}/>
			<Route exact path='/edit/:id' component={Edit}/>
        </div>
    );
}
