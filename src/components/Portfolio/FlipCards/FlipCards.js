import React from 'react';
import Project1 from '../../../Assets/Images/Y_Combinator.png';
import Project2 from '../../../Assets/Images/MEME.jpg';
import Project3 from '../../../Assets/Images/poke.jpg';
import Project4 from '../../../Assets/Images/Inq.jpg';
import { Typography, Card, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';


import './FlipCard.css';
import { useTranslation } from 'react-i18next';

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
        marginTop: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '15px',
        padding: '0 0 20px 0',
        [theme.breakpoints.down('xs')]: {
            margin: '0px',
            padding: '0px'
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
        backgroundRepeat:' no-repeat',
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
        backgroundColor: 'transparent',
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

const FlipCard = () => {
    const classes = useStyles();
    const { t } = useTranslation(['projects']);  // i18n component

    // <--- START - JSX items list ---> //

    const flipCardItems = [
        {
            'cardTitle': 'Hacker New Clone',
            'imageURL': Project1,
            'stack': 'ReactJS, Material UI, Bootstrape ',
            'stack-continued': 'API Clone',
            'learnMoreButton': 'projects:Project',
            'link': 'https://hacker-news-clone-dipali.netlify.app/',
        },
        {
            'cardTitle': 'Meme Generator',
            'imageURL': Project2,
            'stack': 'ReactJS, CSS, Bootstrape, API fetch',
            'learnMoreButton': 'projects:Project',
            'link': 'https://memegeneratordipali.netlify.app/',
        },
        {
            'cardTitle': 'Pokemone Fight Game',
            'imageURL': Project3,
            'stack': 'ReactJS, CSS, JS3, Fiber, Rebuss UI, Node Express, MongoDB ',
            'learnMoreButton': 'projects:Project',
            'link': 'https://pokefight-workshop.netlify.app/',
        },
        {
            'cardTitle': 'Inquziable : Ignite Your Brain',
            'imageURL': Project4,
            'stack': 'ReactJS, Tailwind CSS, Socket Io, Node Express, PostgreSQL, Figma ',
            'learnMoreButton': 'projects:Final Project In WBS Coding School',
            'link': 'https://www.inquizable.com/',
        },
    ];
    
    // <--- END - JSX items list ---> //


    return (
        <>
            <div className={classes.wrapper}>
                {
                    flipCardItems.map(flipCardItem => {
                        return (
                            
                                <div className={classNames("flip-card", classes.projectContainer)}>
                                    <div className={classNames("flip-card-inner", classes.projectContainer)}>
                                        <Card style={{backgroundImage: `url(${flipCardItem.imageURL})`}} elevation={8} className={classNames("flip-card-front", classes.card)}>
                                        </Card>
                                        <div className={classNames("flip-card-back", classes.backContent)}>
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

export default FlipCard;