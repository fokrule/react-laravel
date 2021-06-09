import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default function Home() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            axios.get('http://localhost:8000/api/').
                then(response=>{
                    setData(response.data);
            });
        }
        catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    },[]);

    const deleteData = async (id) => {
        // e.preventDefault()
        console.warn(id)
        try {
            axios.delete('http://localhost:8000/api/destroy/'+id);
            fetchData()
        }
        catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {
                data.map(row => {
                    return (
                        <tr key={row.id}>
                          <td>{ row.name }</td>
                          <td>{ row.email }</td>
                          <td>
                            <Link to={"/edit/" + row.id}>edit</Link>
                            <br/>
                            <form>
                                <input type="hidden" value={row.id} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                              <Button size="small" variant="contained" color="primary" onClick={() => deleteData(row.id)}>
                                Delete
                              </Button>
                            </form>
                          </td>
                        </tr>
                        );
                })
              }
              </tbody>
            </table>
        </div>
    );
}



