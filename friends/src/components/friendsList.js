import React from 'react'

const FriendList = props => {
    const {friends, removeFriend, editFriend} = props

    return (
        <div>
            {
                friends.length > 0 ? friends.map(friend => {
                return (<div>
                    <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    <button onClick={() => editFriend(friend.id)}>Edit</button>
                    <button onClick={() => removeFriend(friend.id)}>Remove</button>
                    </div>
                    )
           
                }) : <p>I have no friends rn</p>
            }
        </div>
    )
}

export default FriendList