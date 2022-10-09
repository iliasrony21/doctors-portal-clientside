import React from 'react'

const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
  const { name, img, speciality, email } = doctor

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className='avatar'>
          <div className='w-16 rounded-full'>
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <label
          onClick={() => setDeleteDoctor(doctor)}
          htmlFor='deletedModal'
          className='btn btn-outline btn-error'
        >
          Delete
        </label>
      </td>
    </tr>
  )
}

export default DoctorRow
