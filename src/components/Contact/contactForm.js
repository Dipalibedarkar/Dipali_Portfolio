import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography, Divider } from '@material-ui/core';
import './contact.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
//import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',

    justifyContent: "center",
    textAlign: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
      flexDirection: 'column',
    },
    divider: {
      border: '0px',
      width: '110px',
      height: '4px',
      backgroundColor: '#252525',
      margin: '10px 0 40px 0',
    },
    button: {
      color: '#10ABB0',
    }
  },
}));

export default function ContactForm() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };



  return (
    <>
      <br></br>
      <div className={classes.header}>

      </div>

      <div className='wrapper'>

        <h3>Get in Touch</h3>
        <Typography align='center' variant='subtitle1'>Feel free to reach out to me if you have any questions or suggestions :)
        </Typography>
      </div>
      <form className={classes.root} noValidate autoComplete="off">

        <div>
          <TextField
            id="filled-name"
            label="Full Name"
            value={name}
            onChange={handleChange}
            variant="filled"
          />

        </div>
        <div>
          <TextField
            id="filled-uncontrolled"
            label="Email"
            defaultValue=""
            variant="filled"
          />

        </div>
        <div>
          <TextField
            id="filled-uncontrolled"
            label="Phone Number"
            defaultValue=""
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="filled-uncontrolled"
            label="Message"
            defaultValue=""
            variant="filled"
          />
        </div>
        <div>
          <Button variant="contained" color='green'>
            Submit
          </Button><br></br>

        </div>
        <br></br>
      </form>
      <br></br>
      <Fade right><Divider class={classes.divider}></Divider></Fade>


    </>
  );
}
