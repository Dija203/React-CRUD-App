import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom';


const Update = () => {

    const [values, setValues] = useState({
    
        name: '',
        email: '', 
        mobile: ''
    
    })

    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${id}`)
        .then(res => {
            const user = res.data
            setValues({name: user.name, email: user.email, mobile: user.mobile})
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.put(`http://localhost:3000/users/${id}`, {
            id: id,
            name: values.name,
            email: values.email,
            mobile: values.mobile
        })
        .then(res => console.log(res))
        .catch(err=> console.log(err))

        navigate("/")
    }

    return(
        <div className="bg-body rounded shadow p-4">
            <form onSubmit={e => handleSubmit(e)}> 
                <label className='input-group-text mb-3'>
                    Name:
                    <input className="form-control" type="text" defaultValue={values.name} onChange={(e)=>setValues({...values, name: e.target.value})}></input>
                </label>
                <label className='input-group-text mb-3'> 
                    Email:
                    <input className="form-control" type="text" defaultValue={values.email} onChange={(e) => setValues({...values, email: e.target.value})}></input>
                </label>
                <label className='input-group-text mb-3'>
                    Phone number:
                    <input className="form-control" type="text" defaultValue={values.mobile} onChange={(e) => setValues({...values, email: e.target.value})} ></input>
                </label>
                <button type="submit" className='btn btn-success me-3'>
                    Update
                </button>
                <Link to="/" className="btn btn-secondary" >Back</Link>
            </form>
            
        </div>
    )
}

export default Update