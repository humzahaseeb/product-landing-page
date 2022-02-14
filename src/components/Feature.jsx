import React from 'react'
import { Typography } from '@mui/material'
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Feature = () => {
  return (
    <div style={{
        width: '50%',
        marginTop: '3rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    }}
    >

        <Typography variant='h5' style={{fontWeight: 'bold'}}>
            <LocalFireDepartmentRoundedIcon fontSize='large'/>
            <span
                style={{
                    position: 'relative',
                    bottom: '0.5rem',
                    margin: '0.5rem'
                }}
            >
                Premium Materials
            </span>
        </Typography>
        <Typography variant='body1'>
            Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.
        </Typography>
        <br /> <br />

        <Typography variant='h5' style={{fontWeight: 'bold'}}>
            <LocalShippingIcon fontSize='large'/>
            <span
                style={{
                    position: 'relative',
                    bottom: '0.5rem',
                    margin: '0.5rem'
                }}
            >
                Fast Shipping
            </span>
        </Typography>
        <Typography variant='body1'>
            We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.
        </Typography>
        <br /> <br />

        <Typography variant='h5' style={{fontWeight: 'bold'}}>
            <CheckBoxIcon fontSize='large'/>
            <span
                style={{
                    position: 'relative',
                    bottom: '0.5rem',
                    margin: '0.5rem'
                }}
            >
                Quality Assurance
            </span>
        </Typography>
        <Typography variant='body1'>
            For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.
        </Typography>

    </div>
  )
}

export default Feature