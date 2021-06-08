import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default function Edit(id) {
    
    const [ name, setName] = useState([]);
    const [ email, setEmail] = useState([]);

      useEffect( () =>  {
        const singleData = async () => {
            try{ 
                let response = await axios.get( 'http://localhost:8000/api/show/' + id.match.params.id)
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
        let insert = await axios.put('http://localhost:8000/api/update/'+ id.match.params.id, {
          name : name,
          email : email,
        })
        .then((response) => {
          console.warn(response);
          $(".success").html('Data saved successfully');
        }, (error) => {
          console.warn(error);
        });
    }

    return (
        <div>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" value={name}  onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <Button variant="contained" color="primary" onClick={editData}>
                Update
              </Button>
            </form>
        </div>
    );
}