import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyPoundTwoToneIcon from '@mui/icons-material/CurrencyPoundTwoTone';


const Cards = (props) => {
  return (
    <div className='card'>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>

        <Typography
          variant='h6'
          style={{
            fontFamily: 'Roboto',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
        >
          <em>{props.title}</em>
        </Typography>

        <br />

        <Typography
          variant="h4"
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'bold',
          }}
        >
          <CurrencyPoundTwoToneIcon
          fontSize='medium'
          />
          {props.price}
        </Typography>

        <br />

        <Typography
          variant="h8"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Lorem ipsum. <br />
          Lorem ipsum. <br />
          Lorem ipsum dolor. <br />
          Lorem ipsum. <br />
        </Typography>

          <br /><br />

      </CardContent>

      <CardActions
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          size="medium"
          variant='contained'
          style={{
            backgroundColor: '#f1c40f',
            color: '#000',
          }}
        >
          Select
        </Button>
      </CardActions>
      </Card>
    </div>
  )
}

export default Cards