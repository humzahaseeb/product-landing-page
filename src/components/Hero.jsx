import React, {useState} from 'react'
import { Typography} from '@mui/material'


const Hero = () => {

    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }


  return (
    <form
        id='form'
        action="https://www.freecodecamp.com/email-submit"
        method='SUBMIT'
    >
        <Typography
            variant="h5"
            style={{
                fontWeight: 500,
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <span className='heading'>Handcrafted, home-made masterpieces</span>
        </Typography>

        <div
            action=""
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '1rem 0'
            }}
        >
            <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleChange}
                style={{height: '1.5rem', width: '15rem'}}
                id='email'
            />
        </div>
        <div
            className="button"
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <button
                style={{
                    backgroundColor: '#f1c40f',
                    color: '#000',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                }}
                id='submit'
                action="https://www.freecodecamp.com/email-submit"
            >
                Get Started
            </button>
        </div>
    </form>
  )
}

export default Hero