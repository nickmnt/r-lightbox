import Menu from '@mui/material/Menu/Menu';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import { LightBox, LboxImage } from 'r-lightbox';
import React from 'react';
import { useState } from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function App() {
    const [open, setOpen] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const img1: LboxImage = {
        src: 'https://wallpapers.com/images/high/mountains-and-starry-galaxy-zt0to2lebx20wyzt.jpg',
        description: 'First image',
        title: 'Beautiful Wallpaper 1',
        secondaryTitle: '31.01.22 at 1:06 PM'
    };
    const img2: LboxImage = {
        src: 'https://wallpapers.com/images/high/mountains-and-starry-galaxy-zt0to2lebx20wyzt.jpg',
        description: 'Second image',
        title: 'Beautiful Wallpaper 2',
        secondaryTitle: '31.01.22 at 1:07 PM'
    };
    const img3: LboxImage = {
        src: 'https://wallpapers.com/images/high/mountains-and-starry-galaxy-zt0to2lebx20wyzt.jpg',
        description: 'Third image',
        title: 'Beautiful Wallpaper 3',
        secondaryTitle: '31.01.22 at 1:08 PM'
    };

    const headerElem = (
        <>
            <IconButton sx={{ color: 'white' }}>
                <ShortcutIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }} onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
        </>
    );
    return (
        <div className="App">
            <div>Example Usage</div>
            <LightBox open={open} onClose={() => setOpen(false)} images={[img1, img2, img3]} headerElement={headerElem} />
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <VisibilityOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Show in chat</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <DeleteOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default App;
