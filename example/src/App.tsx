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
    const [index, setIndex] = useState(0);
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
        title: 'Description 1',
        secondaryTitle: 'Secondary Title 1'
    };
    const img2: LboxImage = {
        src: 'https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2016/06/xpbliss_7.jpg',
        description: 'Second image',
        title: 'Description 2',
        secondaryTitle: 'Secondary Title 2'
    };
    const img3: LboxImage = {
        src: 'https://wallpapers.com/images/high/mountains-and-starry-galaxy-zt0to2lebx20wyzt.jpg',
        description: 'Third image',
        title: 'Description 3',
        secondaryTitle: 'Secondary Title 3'
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
            <LightBox open={open} onClose={() => setOpen(false)} images={[img1, img2, img3]} headerElement={headerElem} selectedIndex={index} setSelectedIndex={setIndex} />
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
