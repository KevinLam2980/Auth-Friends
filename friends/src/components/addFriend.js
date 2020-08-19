import React from 'react'

const AddFriend = props => {
const { form, handleChanges, addFriend, editing, edit } = props
    return(
        <form onSubmit={(evt) => {
                editing ? edit(evt) : addFriend(evt)
            }}>
        <p>Add another friend</p>
        <input
            type='text'
            placeholder='Name'
            value={form.name}
            name='name'
            onChange={handleChanges}
        >
        </input>
        <input
            type='number'
            placeholder='age'
            value={form.age}
            name='age'
            onChange={handleChanges}
        >
        </input>
        <input
            type='email'
            placeholder='email'
            value={form.email}
            name='email'
            onChange={handleChanges}
        >
        </input>
        <button type='submit'>{editing ? 'edit' : 'add'}</button>
    </form>
    )
}

export default AddFriend