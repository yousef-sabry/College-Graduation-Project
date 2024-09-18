import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { User } from '../Context/Context'

export const Users = () => {
  const [users, setUsers] = useState([])
  const [runUseEffect, setRunUesEffect] = useState(0)

  // const context = useContext(User)
  // const token = context.auth.token
  // console.log(context)

  useEffect(() => {
    axios
      .get("https://localhost:7198/api/User", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      })
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [runUseEffect])

  async function deleteUser(id) {
    const res = await axios.delete(`https://localhost:7198/api/User/${id}`, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    try {
      setRunUesEffect(prev => prev + 1)
    } catch (error) {
      console.log(error)
    }
  }
  const showUser = users.map((user, index) =>
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td style={{ color: 'Tomato' }}>
        <Link to={`${user.id}`} >
          <button >U</button>
        </Link>
        +++
        <button onClick={() => deleteUser(user.id)}></button>
      </td>
    </tr>
  )


  
return (
  <div className='User'>
    
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>ctrl</th>
        </tr>
      </thead>
      <tbody>
        {showUser}
      </tbody>
    </table>
  </div>
)
}
export default Users;
