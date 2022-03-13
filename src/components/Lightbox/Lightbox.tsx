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
    headerElement?: React.ReactNode;
    footerElement?: React.ReactNode;
}

export default function Lightbox({ open, images, onChange, onClose, headerElement, footerElement }: Props) {
    const [index, setIndex] = useState(0);

    const image = images[index];

    if (!open) return null;

    return (
        <div className="LightBox">
            <Header images={images} index={index} onClose={onClose} headerElement={headerElement} />
            <div className="LightBox__Container">
                <Center image={image} index={index} images={images} setIndex={setIndex} onChange={onChange} />
            </div>
            <Footer image={image} footerElement={footerElement} />
            {image.description && <div className="LbDescription">{image.description}</div>}
        </div>
    );
}
