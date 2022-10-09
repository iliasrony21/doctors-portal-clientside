import React from 'react'
import { toast } from 'react-toastify'

const DeleteDoctor = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
  const { name, email } = deleteDoctor

  const handleDelete = () => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          toast.success(`doctor: ${name} successfully deleted`)
          setDeleteDoctor(null)
          refetch()
        }
      })
  }
  return (
    <div>
      <input type='checkbox' id='deletedModal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-red-700'>
            Are you sure to deleted {name}?
          </h3>
          <p className='py-4'>
            If you delete this doctor then dont find this doctor anymore.
          </p>
          <div className='modal-action'>
            <button
              onClick={() => handleDelete()}
              className='btn btn-outline btn-error '
            >
              Delete
            </button>
            <label htmlFor='deletedModal' className='btn'>
              cancle
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteDoctor
