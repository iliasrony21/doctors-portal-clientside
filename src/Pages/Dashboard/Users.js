import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading'
import UserRow from './UserRow'

const Users = () => {
  const { data: Users, isLoading, refetch } = useQuery('users', () =>
    fetch('http://localhost:5000/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  )
  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className='text-2xl'>All users:{Users.length}</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>user status</th>
              <th>remove user</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
