import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  labelRoot: {
    fontSize: [[30], '!important'],
    margin: [[5, 10], '!important']
  }
}));
export default function Add() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const classes = useStyles();

    async function addData(e) {
        e.preventDefault()
        $(".warning").html('');
        $(".success").html('');
        if ( !(name) || !(email) ) {
          $(".warning").html('Both fields are required');
        }
        else {
          let insert = await axios.post(process.env.MIX_BASE_URL+'/api/store', {
            name : name,
            email : email,
          })
          .then((response) => {
            $(".success").html('Data saved successfully');
            window.setTimeout(function() {
              window.location = process.env.MIX_BASE_URL+'/';
            }, 1000);
          }, (error) => {
            console.warn(error);
          });
        }
    }
    return (
        <div>
        <p style={{color:'green', marginLeft:'5px', marginTop:'10px'}} className="success"></p>
        <p style={{color:'red', marginLeft:'5px'}} className="warning"></p>
        <form className={classes.root} noValidate>
          <p style={{marginLeft:'5px',marginTop:'10px'}}>Enter the title</p>
          <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Enter title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{marginLeft:'5px',marginTop:'10px'}}>Enter details</p>
          <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Enter full text"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            multiline
            rows={12}
          />
          <Button variant="contained" style={{marginLeft:'5px'}} color="primary" onClick={addData}>
            Save
          </Button>
        </form>
        </div>
    );
}