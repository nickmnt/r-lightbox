import React from 'react';
import { LboxImage } from '../../types/lightbox';
import './LightBox.scss';

export interface Props {
    open: boolean;
    images: LboxImage[];
}

export default function Lightbox() {
    return <div className="LightBox">Test</div>;
}
