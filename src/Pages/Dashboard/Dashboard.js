import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import useAdmin from '../../Hooks/useAdmin'

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div>
      <div className='drawer drawer-mobile'>
        <input
          id='dashboardSidebar'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content '>
          {/* <!-- Page content here --> */}
          <h1 className='text-5xl text-center text-purple-700'>
            Welcome to {user.displayName} Dashboard
          </h1>
          <Outlet></Outlet>
        </div>
        <div className='drawer-side'>
          <label htmlFor='dashboardSidebar' className='drawer-overlay'></label>
          <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/dashboard'>My Appointments</Link>
            </li>
            <li>
              <Link to='/dashboard/review'>My Reviews</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to='/dashboard/user'>All users</Link>
                </li>
                <li>
                  <Link to='/dashboard/addDoctor'>Add a dactor</Link>
                </li>
                <li>
                  <Link to='/dashboard/manageDoctor'>All doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
