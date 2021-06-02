import React from 'react';
import profileImage from '../../Assets/Images/dp.png';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
import Typist from 'react-text-typist';

const useStyles = makeStyles((theme) => ({
    typoContainer: {
        position: "relative", // This style helps position the navbar below the page
        height: '100vh', // This style also helps position the navbar below the page
        width: '80%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },

    typo: {
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Raleway, sans-serif',
        lineHeight: '1.4em',
    },

    nameTypo: {
        fontWeight: '1000',
        [theme.breakpoints.down('sm')]: {
            lineHeight: '1em',
            fontSize: '50px',
            color: '#10ABB0',
        }
    },

    fullstackTypo: {
        width: '80%'
    }, 

    downScrollButton: {
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 'bold',
        marginTop: theme.spacing(4),
        paddingLeft: theme.spacing(2),
        backgroundColor: 'transparent',
        marginRight: '20px',
        borderRadius: '0px',
        borderRadius: '5px',
        border: '3px solid white',
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#10ABB0'
        }
    },

    buttonAnchor: {
        color: 'black',
        textDecoration: 'none',
        borderRadius: '5px'
    },

    image: {
        
        width: '15%',
        height: '30%',
        borderRadius: '2%',
        
        
    }
}))

const Home = () => {
const classes = useStyles();
const { t } = useTranslation(['home']); // i18n component

    return (
       
            <div id='home'>
                <div className={classes.typoContainer}>
                <img src={profileImage} alt={'Dipali'} className={classes.image}/>
                    <Typography className={classNames(classes.typo, classes.nameTypo)} variant='h2'>
                        <Typist
                            sentences={[t('I am Dipali...')]}
                            cursorColor={'#10ABB0'}
                            typingSpeed={120}
                            loop={false} 
                        />
                    </Typography>
                    <Typography className={classNames(classes.typo, classes.fullstackTypo)} variant='h5'>
                        {t('Passionate  about Designing and Styling Websites')}
                    </Typography>
                    <Link activeClass="active" to="Portfolio" spy={true} smooth={true} offset={5} duration={1000} className={classes.buttonAnchor}>
                        <Button disableRipple='true' variant="contained" color='secondary' className={classes.downScrollButton}>
                            {t('My Work')}<KeyboardArrowDownIcon fontSize='large' style={{paddingLeft: '10px'}}/>
                        </Button>
                    </Link>
                </div>
               
            </div>



            
       
    )
}

export default Home