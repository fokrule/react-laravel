import React, { useState, useContext, useEffect } from 'react';
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

export default function Edit(id) {
    
    const classes = useStyles();
    const [ name, setName] = useState([]);
    const [ email, setEmail] = useState([]);

      useEffect( () =>  {
        const singleData = async () => {
            try{ 
                let response = await axios.get( process.env.MIX_BASE_URL+'/api/show/' + id.match.params.id)
                 .then(res => {
                  setName(res.data.name);
                  setEmail(res.data.email);
                })
                .catch((error) => {
                  console.log(error);
                })
            }
            catch(error) {
                console.log(error)
            }
        }
        singleData()
    },[])  

      async function editData(e) {
        e.preventDefault()
        let insert = await axios.put(process.env.MIX_BASE_URL+'/api/update/'+ id.match.params.id, {
          name : name,
          email : email,
        })
        .then((response) => {
          console.warn(response);
          $(".success").html('Data saved successfully');
          window.setTimeout(function() {
            window.location = process.env.MIX_BASE_URL+'/';
          }, 1000);
        }, (error) => {
          console.warn(error);
        });
    }

    return (
        <div>
            <p style={{color:'green', marginLeft:'5px', marginTop:'10px'}} className="success"></p>
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
            <Button variant="contained" style={{marginLeft:'5px'}} color="primary" onClick={editData}>
              Update
            </Button>
          </form>
        </div>
    );
}