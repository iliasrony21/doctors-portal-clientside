import React from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../../Shared/Loading'

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm()
  const { data: services, isLoading } = useQuery('services', () =>
    fetch('http://localhost:5000/service').then(res => res.json())
  )

  if (isLoading) {
    return <Loading></Loading>
  }
  const imageStorageKey = '0572349ba0b42e82fee3568e60f9cefb'
  const onSubmit = async data => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        console.log('imagebb', result)
        if (result.success) {
          const img = result.data.url
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: img
          }
          //send to your database
          fetch('http://localhost:5000/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(inserted => {
              console.log('doctor', inserted)
              if (inserted.insertedId) {
                toast.success('Doctor added successfully')
                reset()
              } else {
                toast.error('There is a problem to added a doctor')
              }
            })
        }
      })
  }
  return (
    <div>
      <h1 className='text-2xl text-primary'>Add a new doctor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full max-w-lg'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='Your Name'
            className='input input-bordered w-full max-w-xs'
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required'
              }
            })}
          />
          <label className='label'>
            {errors.name?.type === 'required' && (
              <span className='label-text-alt text-red-700'>
                {errors.name.message}
              </span>
            )}
          </label>

          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='Your Email'
            className='input input-bordered w-full max-w-xs'
            {...register('email', {
              required: {
                value: true,
                message: 'email is not valid'
              },
              pattern: {
                value: /[A-Za-z]{3}/,
                message: 'Provide a valid email'
              }
            })}
          />
          <label className='label'>
            {errors.email?.type === 'required' && (
              <span className='label-text-alt text-red-700'>
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className='label-text-alt text-red-700'>
                {errors.email.message}
              </span>
            )}
          </label>
          <label className='label'>
            <span className='label-text'>speciality</span>
          </label>
          <select
            {...register('speciality')}
            className='select w-full max-w-xs mb-2'
          >
            {services.map(service => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          <label className='label'>
            <span className='label-text'>Photo</span>
          </label>
          <input
            type='file'
            className='input input-bordered w-full max-w-xs'
            {...register('image', {
              required: {
                value: true,
                message: 'image is required'
              }
            })}
          />
          <label className='label'>
            {errors.image?.type === 'required' && (
              <span className='label-text-alt text-red-700'>
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          type='submit'
          value='Add a doctor'
          className='btn btn-accent w-full max-w-xs'
        />
      </form>
    </div>
  )
}

export default AddDoctor
