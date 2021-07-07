import React from 'react';
import Wireframe1 from '../../Assets/Images/inq-wirefram.jpg';
import Wireframe2 from '../../Assets/Images/wireframe2.jpg';

import { Typography, Card, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import './wirfram.css';
const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '0px 0 80px 0',
        [theme.breakpoints.down('xs')]: {
            padding: '0',
            paddingBottom: '100px',
        }
    },

    projectContainer: {
        display: 'flex',
        marginTop: theme.spacing(5),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'hidden',
        margin: '15px',
        padding: '0 0 20px 0',
        [theme.breakpoints.down('xs')]: {
            margin: '5px',
            padding: '5px'
        }
    },

    card: {
        margin: 'auto',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background: '#F6F6F6',
        height: '300px',
        width: '300px',
        borderBottom: '4px solid #10ABB0',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: ' no-repeat',
        borderRadius: '10px',
        [theme.breakpoints.down('xs')]: {
            height: '200px',
            width: '300px',
        }
    },

    backContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonAnchor: {
        color: 'black',
        textDecoration: 'none'
    },

    learnMoreButton: {
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 'bold',
        marginTop: theme.spacing(4),
        paddingLeft: theme.spacing(2),
         backgroundColor: '#10ABB0',
        margin: '20px',
        borderRadius: '0px',
        border: '3px solid white',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black'
        }
    },

    typo: {
        fontFamily: 'Raleway, sans-serif',
    },

    inProductionTypo: {
        boxShadow: 'rgba(0, 0, 0, 0.4)',
        fontFamily: 'Raleway, sans-serif',
        border: '4px solid #ff7d00',
        borderRadius: '5px',
        padding: '10px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
}))

const Wireframe = () => {
    const classes = useStyles();
    const { t } = useTranslation(['wirefram']);  // i18n component



    const wireframIteams = [
        {
            'cardTitle': 'Mobile Wireframe for Inquziable',
            'imageURL': Wireframe1,
            'stack': 'Design in Figma ',
            'learnMoreButton': 'projects: WireFrame',
            'link': 'https://www.figma.com/proto/I5NdL5ou6My2V6eNsFVC7U/Inquizable-Mobile-Wireframe?node-id=2%3A2&scaling=scale-down&page-id=0%3A1',
        },
        {
            'cardTitle': 'Desktop Wirframe:Frontend monitor',
            'imageURL': Wireframe2,
            'stack': 'Design in Figma ',
            'learnMoreButton': 'projects: WireFrame',
            'link': 'https://www.figma.com/proto/H7d9RAnqHaalvFwhlEnjtO/Fronted-Monitor-Design-Challenge?node-id=2%3A2&scaling=min-zoom&page-id=0%3A1',
        },

    ];




    return (
        <>
            <div className={classes.wrapper}>
            
                {
                    wireframIteams.map(flipCardItem => {
                        return (
                            
                                <div className={classNames("wf-card", classes.projectContainer)}><br></br>
                                    <div className={classNames("wf-card-inner", classes.projectContainer)}> <br></br>
                                        <Card style={{backgroundImage: `url(${flipCardItem.imageURL})`}} elevation={8} className={classNames("wf-card-front", classes.card)}>
                                        </Card>
                                        <div className={classNames("wf-card-back", classes.backContent)}>
                                            <Typography className={classes.typo}>{flipCardItem.cardTitle}</Typography>
                                            <br/>Stack <br/> 
                                            <Typography className={classes.typo}>{flipCardItem.stack}{flipCardItem['stack-continued']}</Typography>
                                            <a className={classes.buttonAnchor} target="_blank" href={flipCardItem.link} ><Button disableRipple='true' variant="contained" color='secondary' className={classes.learnMoreButton}>
                                                {t(flipCardItem.learnMoreButton)}
                                                </Button>
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }

              
                
                </div>
    
           
            
            </>
        
    )
}

export default Wireframe;