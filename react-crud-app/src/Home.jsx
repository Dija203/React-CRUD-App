import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const [data, setData] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res => {
            setData(res.data)
    })
        .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const removeUser = (id) => {
        const confirm = window.confirm("are you sure you want to remove this user?!")

        if (confirm) {
            axios.delete(`http://localhost:3000/users/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))

            //refresh page
            window.location.reload()
        }

        
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light" >
            <h1 >List of Users</h1>
            <div className="bg-white border rounded shadow p-4">
                <div className="d-flex justify-content-end">
                    <Link to="/create" className="btn btn-sm btn-success">Add User</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th >Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, idx) => (
                                <tr key={idx}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>
                                        <Link to={`read/${user.id}`} className="btn btn-sm btn-info ms-3 me-3">View</Link>
                                        <Link to={`update/${user.id}`} className="btn btn-sm btn-primary me-3 ">Edit</Link>
                                        <Link className="btn btn-sm btn-danger me-3" onClick={e => removeUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                        
                </table>
            </div>
            
        </div>
     
        
    )
}

export default Home