import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading'
import DeleteDoctor from './DeleteDoctor'
import DoctorRow from './DoctorRow'

const ManageDoctor = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null)
  const { data: doctors, isLoading, refetch } = useQuery('doctors', () =>
    fetch('http://localhost:5000/doctor', {
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
      <h1 className='text-primary text-4xl text-center text-bold mt-5 mb-5'>
        Total doctors:{doctors.length}
      </h1>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeleteDoctor={setDeleteDoctor}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <DeleteDoctor
          deleteDoctor={deleteDoctor}
          refetch={refetch}
          setDeleteDoctor={setDeleteDoctor}
        ></DeleteDoctor>
      )}
    </div>
  )
}

export default ManageDoctor
