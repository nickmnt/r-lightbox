import React from 'react';
import { LboxImage } from '../../types/lightbox';
import { Center } from '../Center';
import { Footer } from './Footer';
import { Header } from './Header';
import './LightBox.scss';

export interface Props {
    open: boolean;
    images: LboxImage[];
    selectedIndex: number;
    setSelectedIndex: (newVal: number) => void;
    onClose: () => void;
    onChange?: (oldImg: LboxImage, newImg: LboxImage) => void;
    headerElement?: React.ReactNode;
    footerElement?: React.ReactNode;
}

export default function Lightbox({ open, images, onChange, onClose, headerElement, footerElement, selectedIndex, setSelectedIndex }: Props) {
    const image = selectedIndex < images.length ? images[selectedIndex] : null;

    if (!open) return null;
    if (!image) return null;

    return (
        <div className="LightBox">
            <Header images={images} index={selectedIndex} onClose={onClose} headerElement={headerElement} />
            <div className="LightBox__Container">
                <Center image={image} index={selectedIndex} images={images} setIndex={setSelectedIndex} onChange={onChange} />
            </div>
            <Footer image={image} footerElement={footerElement} />
            {image.description && <div className="LbDescription">{image.description}</div>}
        </div>
    );
}
