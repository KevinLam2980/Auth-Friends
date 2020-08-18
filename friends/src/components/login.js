import React, {useState} from 'react' 
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const History = useHistory()

    const onHandleChanges = evt => {
        setCredentials({...credentials, [evt.target.name]: evt.target.value })
    }

    const login = evt => {
        evt.preventDefault()
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            History.push('/home')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={login}>
                <label htmlFor='username'>
                    <input
                    type='text'
                    placeholder='Enter username'
                    id='username'
                    name='username'
                    onChange={onHandleChanges}
                    value={credentials.username}
                    >
                    </input>
                </label>
                <label htmlFor='password'>
                    <input
                           type='password'
                           placeholder='Enter password'
                           id='password'
                           name='password'
                           onChange={onHandleChanges}
                           value={credentials.password}
                    >
                    </input>
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login