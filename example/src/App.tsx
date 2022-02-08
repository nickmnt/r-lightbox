import { LightBox, LboxImage } from 'r-lightbox';
import './App.css';

function App() {
    const img1: LboxImage = {
        src: 'https://wallpapers.com/images/high/mountains-and-starry-galaxy-zt0to2lebx20wyzt.jpg',
        description: 'First image',
        title: 'Beautiful Wallpaper',
        secondaryTitle: '31.01.22 at 1:06 PM'
    };
    return (
        <div className="App">
            <div>dsadsa</div>
            <LightBox open={true} images={[img1]} />
        </div>
    );
}

export default App;
