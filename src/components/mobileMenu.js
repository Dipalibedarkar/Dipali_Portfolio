import React, {Fragment} from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';

const MobileMenu = () => {
    const { t } = useTranslation(['navbar']);  // i18n component


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const menuItems = [
        {
            'menuTitle': 'navbar:home',
            'offset': -70,
            'component-id': 'home'
        },
        {
            'menuTitle': 'navbar:about',
            'offset': 5,
            'component-id': 'about-me'
        },
        {
            'menuTitle': 'navbar:portfolio',
            'offset': 5,
            'component-id': 'Portfolio'
        },
        {
            'menuTitle': 'navbar:wireframe',
            'offset': 5,
            'component-id': 'WireFrame'
        },
        {
            'menuTitle': 'navbar:contact',
            'offset': 5,
            'component-id': 'Contact'
        },
    ];


    return (
        <Fragment>
            <IconButton
                aria-label="toggle-menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleMenuClose}
            >
                {menuItems.map(menuItem => {
                    return(
                    <Link activeClass="active" to={menuItem['component-id']} spy={true} smooth={true} offset={menuItem.offset} duration={1000}>
                        <MenuItem onClick={handleMenuClose}>{t(menuItem.menuTitle)}</MenuItem>
                    </Link>
                    )
                })}
            </Menu>
            </Fragment>
    )
}

export default MobileMenu;