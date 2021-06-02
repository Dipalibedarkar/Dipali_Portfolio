import React from 'react';
import { Grid, Typography, Icon, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
//import ComputerIcon from '@material-ui/icons/Computer';
import './TS.css'

/************************************************************************************/
                    // START Tech-stack STYLES //
/************************************************************************************/

const useStyles = makeStyles((theme) => ({

    techStackContainer: {
        marginTop: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 0 50px 0',
    },

    iconsDiv: {
        margin: 'auto',
        // marginTop: theme.spacing(3),
        width: '80px', height: '80px',
    },

    icons: {
        color: '#252525',
        padding: '10px 0px 10px 0px',
        height: '50px',
        width: '50px', 
        fontSize: '40px', 
        textAlign: 'center',
        margin: '10px 0 0 0',
    },

    divider: {
        width: '30px',
        height: '4px',
        backgroundColor: 'rgb(123,120,125);',
        margin: 'auto',
        marginTop: '10px'
    },

    card: {
        background: '#a0b1c6',
        height: '300px',
        width: '300px',
        borderBottom: '4px solid rgb(123,120,125);',

    },

    

    cardTypo: {
        fontFamily: 'Raleway, sans-serif',
        padding: '50px 0 10px 0',
        textAlign: 'center',
        fontWeight: '10px', 
    },

    typoSpan: {
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 'bold',
    }
}))


/************************************************************************************/
                    // END Tech.stack STYLES //
/************************************************************************************/

const TechStack = ({match}) => {
    const classes = useStyles();
    const { t } = useTranslation(['about']);  // i18n component

    const myTechStack = [
        {
            id: 1,
            category: 'about:Front-End Development',
            icon: 'fas fa-database',
            languages_practices: 'about:Languages',
            language_PracticeList: 'HTML5, CSS3, JavaScript, ReactJS',
            tools: 'about:Tools',
            tooList: 'GitHUB, Material UI,Bootstrap, Figma, Miro, Netlify'
        },
        {
            id: 2,
            category: 'about:Back-End Development',
            icon: 'fas fa-database',
            languages_practices: 'about:Languages',
            language_PracticeList: 'NodeJs, NoSQL, SQL',
            tools: 'about:Tools',
            tooList: 'Express, MySQL, MongoDB, PostgreSQL, GitHUB, Heroku'
        },
        {
            id: 3,
            category: 'about:Project Management',
            icon: 'fas fa-sitemap',
            languages_practices: 'about:Practices',
            language_PracticeList: 'Agile, SCRUM',
            tools: 'about:Tools',
            tooList: 'Trello, Discord'
        }
    ]

return (
    
        <Grid container spacing={4} className={classes.techStackContainer}>
            {myTechStack && myTechStack.map(tech => {
                    return (
                    
                        <Grid item className={classes.techStackContainer} >
                            <Card elevation={0}  className={classes.card}>
                            <Typography variant='h6' className={classes.cardTypo}>{t(tech.category)}</Typography>
                                <div className={classes.iconsDiv}>
                                    <Icon className={classNames(`${tech.icon}`, classes.icons)} />
                                    <div class={classes.divider}></div>
                                    
                                </div>
                                
                                <Typography variant='body2' align='center'>
                                    <span className={classes.typoSpan}>{t(tech.languages_practices)}</span><br/>{tech.language_PracticeList}
                                </Typography>
                                <Typography variant='body2' style={{padding: '15px 25px', margin: 'auto'}}>
                                    <span className={classes.typoSpan}>{t(tech.tools)}</span><br/>{tech.tooList}
                                </Typography>              
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
    
    )
}

export default TechStack;