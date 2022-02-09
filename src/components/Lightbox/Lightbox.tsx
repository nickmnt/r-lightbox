import React, { useState } from 'react';
import { LboxImage } from '../../types/lightbox';
import { Center } from '../Center';
import { Footer } from './Footer';
import { Header } from './Header';
import './LightBox.scss';

export interface Props {
    open: boolean;
    images: LboxImage[];
    onClose: () => void;
    onChange?: (oldImg: LboxImage, newImg: LboxImage) => void;
}

export default function Lightbox({ open, images, onChange, onClose }: Props) {
    const [index, setIndex] = useState(0);

    if (!open) return null;

    return (
        <div className="LightBox">
            <Header images={images} index={index} onClose={onClose} />
            <div className="LightBox__Container">
                <Center image={images[index]} index={index} images={images} setIndex={setIndex} onChange={onChange} />
            </div>
            <Footer image={images[index]} />
        </div>
    );
}
