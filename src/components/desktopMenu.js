import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';



const useStyles = makeStyles((theme) => ({

    toolBarOptions: {
        justifyContent: 'space-between',
        minHeight: '15px',
        background: 'rgb(37, 37, 37)',
        fontWeight: 'bold',
        fontSize:'15px',
    },

    desktopNav: {
        display: "flex",
        justifyContent: "space-between",
        width: '100%'
    },

    deskTopNavTypo: {
        textTransform: 'capitalize',
        borderRadius: '0',
        padding: theme.spacing(2),
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#10ABB0',
            color: 'white',
            borderRadius: '30px',

        },
    },
}))


const DesktopMenu = () => {
    const classes = useStyles();
    const { t } = useTranslation(['navbar']);  // i18n component need to update

    

    const menuItems = [
        {
            'menuTitle': 'Home',
            'offset': -70,
            'component-id': 'home'
        },
        {
            'menuTitle': 'About Me',
            'offset': 5,
            'component-id': 'about-me'
        },
        {
            'menuTitle': 'Portfolio',
            'offset': 5,
            'component-id': 'Portfolio'
        },
        {
            'menuTitle': 'navbar:wireframe',
            'offset': 5,
            'component-id': 'Wireframe'
        },
         {
             'menuTitle': 'Contact',
             'offset': 5,
             'component-id': 'contact'
         },
        

    ];

   

    return (

        <div className={classes.desktopNav}>
            {menuItems.map(menuItem => {
                return (
                    <>
                    <Link activeClass="active" to={menuItem['component-id']} spy={true} smooth={true} offset={menuItem.offset} duration={1000}>
                        <Button vartiant='body2' className={classes.deskTopNavTypo}>{t(menuItem.menuTitle)}</Button>
                    </Link>
                    
                </>
                )
            })}
            <a href={('https://dipali-bedarkar-cv.netlify.app/')} target= "blank" >
               <Button
                         variant="body2" className={classes.deskTopNavTypo} >
                        {('Resume')}
                    </Button>
                </a>
        </div>

    )
}

export default DesktopMenu;