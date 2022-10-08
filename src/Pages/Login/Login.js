import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useForm } from 'react-hook-form'
import Loading from '../../Shared/Loading'
import { useEffect } from 'react'
import useToken from '../../Hooks/useToken'

const Login = () => {
  const [signInWithGoogle, guser, gLoading, gError] = useSignInWithGoogle(auth)
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || '/'

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error
  ] = useSignInWithEmailAndPassword(auth)

  const [token] = useToken(user || guser)

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true })
    }
  }, [token, from, navigate])

  let signInError
  if (error || gError) {
    signInError = (
      <p className='text-red-500'>Error: {error?.message || gError?.message}</p>
    )
  }
  if (loading || gLoading) {
    return <Loading></Loading>
  }
  const onSubmit = data => {
    console.log('login data', data)
    signInWithEmailAndPassword(data.email, data.password)
  }
  return (
    <div className='flex justify-center items-center h-screen  '>
      <div className='card w-96 bg-base-100 shadow-2xl'>
        <div className='card-body'>
          <h2 className='text-3xl font-bold text-center'>Log In!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full max-w-lg'>
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
              value='Log In'
              className='btn btn-accent w-full max-w-xs'
            />
            {signInError}
            <p>
              New to Doctor sheba?{' '}
              <Link to='/signup' className='text-secondary'>
                {' '}
                Create an Account
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

export default Login
