import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        mobile: ""
    })

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3000/users", values)
        .then(navigate("/"))
    }

    return(
        <div className="bg-body p-4 rounded shadow">
            <form onSubmit={e => handleSubmit(e)}>
          
                <label className="input-group-text mb-3">
                    Name: 
                <input className="form-control ms-3" type="text" onChange={e => setValues({...values, name: e.target.value})}></input>
                </label>
                <label className="input-group-text mb-3">
                    Email: 
                    <input className="form-control ms-3" type="email" onChange={e => setValues({...values, email: e.target.value})}></input>
                </label>
                <label className="input-group-text mb-3">
                    Phone number: 
                    <input className="form-control ms-3" type="text" onChange={e => setValues({...values, mobile: e.target.value})}></input>
                </label>
                <button className="btn btn-success" type="submit">
                    Add User
                </button>
            </form>
        </div>
           
    )
}

export default Create