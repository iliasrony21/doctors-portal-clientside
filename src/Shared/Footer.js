import React from 'react'
import { Link } from 'react-router-dom'
import footer from '../assets/images/footer.png'

const Footer = () => {
  return (
    <div>
      <div className='px-12'>
        <footer
          style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
          }}
          className='footer p-10 '
        >
          <div>
            <span className='footer-title'>Services</span>
            <Link className='link link-hover'>Emergency Checkup</Link>
            <Link className='link link-hover'>Monthly Checkup</Link>
            <Link className='link link-hover'>Weekly Checkup</Link>
            <Link className='link link-hover'>Deep Checkup</Link>
          </div>
          <div>
            <span className='footer-title'>ORAL HEALTH</span>
            <Link className='link link-hover'>Fluoride Treatment</Link>
            <Link className='link link-hover'>Cavity Filling</Link>
            <Link className='link link-hover'>Teath Whitening</Link>
          </div>
          <div>
            <span className='footer-title'>OUR ADDRESS</span>
            <Link className='link link-hover'>New York - 101010 Hudson</Link>
          </div>
        </footer>
      </div>
      <div className='text-center mb-12'>
        <p>Copyright © 2022 - All right reserved </p>
        <p>MD.Ilias Ahomed (Rony)</p>
      </div>
    </div>
  )
}

export default Footer
