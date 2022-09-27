import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useToken = user => {
  const [token, setToken] = useState('')
  useEffect(() => {
    const email = user?.user?.email
    console.log('find email', email)
    const newuser = { email: email }
    fetch(`http://localhost:5000/user/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newuser)
    })
      .then(res => res.json())
      .then(data => {
        console.log('inside fetch', data)
      })
  }, [user])
  return [token]
}

export default useToken
