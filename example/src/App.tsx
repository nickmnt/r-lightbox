import { LightBox, LboxImage } from 'r-lightbox';
import { useState } from 'react';
import './App.css';

function App() {
    const [open, setOpen] = useState(true);

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
    return (
        <div className="App">
            <div>dsadsa</div>
            <LightBox open={open} onClose={() => setOpen(false)} images={[img1, img2, img3]} />
        </div>
    );
}

export default App;
