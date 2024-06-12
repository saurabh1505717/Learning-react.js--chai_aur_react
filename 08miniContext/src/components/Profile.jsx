import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
UserContext

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>Please do Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile