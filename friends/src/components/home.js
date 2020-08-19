import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import AddFriend from './addFriend'
import FriendList from './friendsList'

const initialFormValues = {
    name: '',
    age: '',
    email: ''
}

const Home = () => {
    const [friends, setFriends] = useState([])
    const [form, setForm] = useState(initialFormValues)
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        axiosWithAuth()
        .get('api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleChanges = evt => {
        setForm({...form, [evt.target.name]: evt.target.value})
    }

    const addFriend = (evt) => {
        evt.preventDefault()
        axiosWithAuth()
        // .post('api/friends', {...form, id: friends.length + 1})
        .post('api/friends', form)
        .then(res => {
            console.log('add friend')
            setFriends(res.data)
            setForm(initialFormValues)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const editFriend = id => {
        axiosWithAuth()
        .get(`api/friends/${id}`)
        .then(res => {
            setForm(res.data)
            setEditing(true)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const edit = (evt) => {
        evt.preventDefault()
        console.log(form)
        axiosWithAuth()
        .put(`api/friends/${form.id}`, form)
        .then(res => {
            console.log('edit friend')
            console.log(res)
            setFriends(res.data)
            setForm(initialFormValues)
            setEditing(false)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const removeFriend = (id) => {
        axiosWithAuth()
        .delete(`api/friends/${id}`)
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
           <AddFriend form={form} handleChanges={handleChanges} addFriend={addFriend} editing={editing} edit={edit}/>
            <FriendList friends={friends} removeFriend={removeFriend} editFriend={editFriend} />
        </div>
    )
}

export default Home