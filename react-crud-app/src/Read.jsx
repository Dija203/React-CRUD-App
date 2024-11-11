import react, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const Read = () => {

    const [values, setValues] = useState({
    
        name: '',
        email: '', 
        mobile: ''
    
    })

    const { id } = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/users?id=${id}`)
        .then(res => {
            const data = res.data
            const user = data[0]
            // console.log(user)
            setValues({name: user.name, email: user.email, mobile: user.mobile})
        })
    }, [])

    return(
        <div className="bg-body rounded shadow p-4">
            <form> 
                <label className='input-group-text mb-3'>
                    Name:
                    <input className="form-control" type="text" value={values.name} readOnly></input>
                </label>
                <label className='input-group-text mb-3'> 
                    Email:
                    <input className="form-control" type="text" value={values.email} readOnly></input>
                </label>
                <label className='input-group-text mb-3'>
                    Phone number:
                    <input className="form-control" type="text" value={values.mobile} readOnly></input>
                </label>
            </form>
            <Link to="/" className="btn btn-secondary" >Back</Link>
        </div>
    )
}

export default Read