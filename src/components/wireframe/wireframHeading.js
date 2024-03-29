import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wireframe from './Wirefram';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({    
    wrapper: {
        background: '#F5F5F5',
        padding: '80px 0 20px 0',
        paddingBottom: '5px',
        margin: 'auto'
    },

    header: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'column',
    },

    portfolioTypo: {
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
        margin: '10px 0 80px 0'
    },
}))

const WireframeTitle = () => {
    const classes = useStyles();
    const { t } = useTranslation(['wirefram']);  // i18n component

    return (
       
            <div id="Wireframe" className={classes.wrapper}>
                <div className={classes.header}>
                    <Fade left><Typography className={classes.portfolioTypo} variant='h4'>{t('projects:Wireframe')}</Typography></Fade>
                    <Fade right><Divider class={classes.divider}>

                    </Divider>
                    </Fade>
                </div>
                <Slide bottom>

                <Wireframe/>
                </Slide>
            </div>
                
    )
}

export default WireframeTitle