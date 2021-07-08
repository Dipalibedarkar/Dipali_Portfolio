import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Button from '@material-ui/core/Button';
import './contact.css'


import { useForm, ValidationError } from '@formspree/react';
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


        techStackContainer: {
            marginTop: theme.spacing(2),
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 0 50px 0',
            margin: '60px',
        },



    },
}));
function ContactForm() {
    const classes = useStyles();
    const [state, handleSubmit] = useForm("xoqylkqq");
    if (state.succeeded) {
        return (
            <div className='heading'>
                <h2>Thanks for Contacting Me!</h2>
            </div>
        )
    }
    return (
        <>
            <div className='contact'>
                <Grid container spacing={4} className={classes.techStackContainer}>
                    <Card className='card'>
                        <h3>Get in Touch</h3>
                        <Typography align='center' variant='subtitle1'>Feel free to reach out to me if you have any questions or suggestions :)
                        </Typography>
                        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder='Email Address'
                                />
                                <div>
                                    <TextField
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder='Your Name'
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    /></div>
                                <div>
                                    <TextField
                                        id="message"
                                        name="message"
                                        placeholder='Type Message....'
                                    /></div>
                                <div>
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    /></div>
                                <div>
                                    <Button type="submit" disabled={state.submitting}>
                                        <h4>Submit</h4>
                                    </Button></div>
                            </div>
                        </form>
                    </Card>
                </Grid>
            </div>
            <Fade right></Fade>
            <br></br> <br></br>
        </>
    );
}

export default ContactForm