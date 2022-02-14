import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content-upper'>
            <span className='footer-text'>Privacy</span>
            <span className='footer-text'>Terms</span>
            <span className='footer-text'>Contact</span>
        </div>
        <br />
        <div className='footer-content-lower'>
            <span style={{color: '#444'}}>Copyright ©2022, Original Trombones</span>
        </div>
    </div>
  )
}

export default Footer