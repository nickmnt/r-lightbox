import React, { useState } from 'react';
import { LboxImage } from '../../types/lightbox';
import { Center } from '../Center';
import { Footer } from './Footer';
import { Header } from './Header';
import './LightBox.scss';

export interface Props {
    open: boolean;
    images: LboxImage[];
}

export default function Lightbox({ open, images }: Props) {
    const [index, setIndex] = useState(0);

    return (
        <div className="LightBox">
            <Header images={images} index={index} />
            <div className="LightBox__Container">
                <Center image={images[index]} index={index} />
            </div>
            <Footer image={images[index]} />
        </div>
    );
}
