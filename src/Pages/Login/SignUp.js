import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile
} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useForm } from 'react-hook-form'
import Loading from '../../Shared/Loading'
import useToken from '../../Hooks/useToken'
// import useToken from '../../Hooks/useToken'

const SignUp = () => {
  const [signInWithGoogle, guser, gLoading, gError] = useSignInWithGoogle(auth)
  const [updateProfile, updating, updateError] = useUpdateProfile(auth)
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error
  ] = useCreateUserWithEmailAndPassword(auth)
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const [token] = useToken(user || guser)

  let signInError
  if (error || gError || updateError) {
    signInError = (
      <p className='text-red-500'>
        Error: {error?.message || gError?.message || updateError?.message}
      </p>
    )
  }
  if (loading || gLoading) {
    return <Loading></Loading>
  }
  if (token) {
    // console.log('signup user', user || guser)
    navigate('/appointment')
  }
  const onSubmit = async data => {
    console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name })
    console.log('signup update done')
  }
  return (
    <div className='flex justify-center items-center h-screen  '>
      <div className='card w-96 bg-base-100 shadow-2xl'>
        <div className='card-body'>
          <h2 className='text-3xl font-bold text-center'>Sign Up!</h2>
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
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='give password'
                className='input input-bordered w-full max-w-xs'
                {...register('password', {
                  required: {
                    value: true,
                    message: ' password is required'
                  },
                  minLength: {
                    value: 6,
                    message: 'give atlest 6 digit '
                  }
                })}
              />
              <label className='label'>
                {errors.password?.type === 'required' && (
                  <span className='label-text-alt text-red-700'>
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className='label-text-alt text-red-700'>
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <input
              type='submit'
              value='Sign Up'
              className='btn btn-accent w-full max-w-xs'
            />
            {signInError}
            <p>
              Already have an Account?{' '}
              <Link to='/login' className='text-secondary'>
                {' '}
                Log In
              </Link>
            </p>
          </form>
          <div className='divider'>OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className='btn btn-outline btn-accent w-full max-w-lg'
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
