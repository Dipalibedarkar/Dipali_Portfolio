import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Icon from '@material-ui/core/Icon';
import { white } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1px 0 0 0',
        background: 'linear-gradient(308deg, rgb(8, 80, 102) 0%, rgba(15, 138, 125, 0.9) 100%)',
        
    },

    iconsAnchor:{
    margin: '10px'
    },

    // icons: {
    //     fontSize: '29px',
    //     fontWeight: '400px',
    //     color: 'white',
    //     '&:hover': {
    //         color: '#10ABB0',
    //     },
    // },

    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backToTopButton: {
        alignSelf: 'flex-end',
        borderRadius: '30px',
        width: '40px',
        padding: '5px',
        margin: '5px',
        border: 'none',
        backgroundColor: '#10ABB0',
        cursor: 'pointer',
    },

    copyIconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    copyRightTypo: {
        color: 'white',
        textAlign: 'center',
        flexGrow: 1,
        marginLeft: '55px'
    }
}));

    // <--- START scroll to top function ---> //
    function scrollToTop() {
        scroll.scrollToTop();
    }
    // <--- END scroll to top function ---> //

const Footer = () => {
    const classes = useStyles();
    const { t } = useTranslation(['footer']);  // i18n component

    return (
        
        <footer>

            <div className={classes.footerContainer}>
                <div className={classes.iconsContainer}>
                    <a className={classes.iconsAnchor} href='https://www.linkedin.com/in/dipali-bedarkar-944018138/'>
                        <LinkedInIcon style={{ color: 'white' }} />
                    </a>
                    <a href='https://github.com/Dipalibedarkar'>
                        <GitHubIcon style={{ color: 'white', fontSize: 20 }} />
                    </a>
                </div>
                <div className={classes.copyIconContainer}>
                    <Typography variant='caption' className={classes.copyRightTypo}>© All Rights Reserved</Typography>
                    <button className={classes.backToTopButton} onClick={scrollToTop}>
                        <KeyboardArrowUpIcon />
                    </button>
                </div>

            </div>
            </footer>
            
        
    )
}

export default Footer;