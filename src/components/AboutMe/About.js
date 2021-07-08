import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button } from '@material-ui/core';
import Techstack from './TechStack';
import profileImage from '../../Assets/Images/dpd.jpg';
import Fade from 'react-reveal/Fade';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useTranslation } from 'react-i18next';
//import CV from '../ResumeComponent/ReactPDF'



const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'column',
        paddingTop: '80px',
        margin: 'auto',
    },

    aboutTypo: {
        fontFamily: 'Raleway, sans-serif',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#252525',
        textAlign: 'center',
    },

    divider: {
        border: '0px',
        width: '110px',
        height: '4px',
        backgroundColor: '#252525',
        margin: '10px 0 40px 0',
    },

    aboutMe: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    image: {
        padding: '10px 0 32px 0',
        width: '20%',
        height: '25%',
       
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            height: '50%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '50%',
            height: '50%',
        }
    },
    buttonAnchor: {
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: '#10ABB0',
            color: 'white'
        }
    },
    downloadButton: {
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 'bold',
        width: '300px',
        paddingLeft: theme.spacing(2),
        backgroundColor: 'transparent',
        borderRadius: '15px',
        border: '3px ',
        '&:hover': {
            backgroundColor: '#10ABB0',
            color: 'white'
        }
    },
}));

const About = () => {
    const classes = useStyles()
    const { t } = useTranslation(['about']);  // i18n component

    return (

        <div className={classes.wrapper} id='about-me'>
            <Fade left>
                <Typography className={classes.aboutTypo} variant='h4'>{t('About Me')}</Typography>
            </Fade>
            <Fade right><Divider class={classes.divider}></Divider></Fade>
            <Typography style={{ fontFamily: 'Raleway, sans-serif', textAlign: 'center', width: '50%', padding: '30px 20px 0 2px' }} variant='body1'>
                {t('I am a creative, artistic and ambitious Software Developer with a talent for thinking outside the box and coming up with innovative ideas and designs.')}
            </Typography>

            <div className={classes.aboutMe} >
                <img src={profileImage} alt={'Dipali'} className={classes.image} />
                <br></br>
                <a href={('https://dipali-bedarkar-cv.netlify.app/')} target="blank" className={classes.buttonAnchor}>
                    <Button
                        disableRipple='true' variant="contained" className={classes.downloadButton} to="CV">
                        {t('Resume')}<VisibilityIcon fontSize='medium' style={{ paddingLeft: '10px' }} />
                    </Button>
                </a>
            </div>
            <Techstack />

        </div>


    )
}

export default About;