import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/').
            then(response=>{
                setData(response.data);
        });
    },[]);

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
                            <Link to={"/delete/" + row.id}>delete</Link>
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



