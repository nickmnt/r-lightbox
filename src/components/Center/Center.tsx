import React from 'react';
import { LboxImage } from '../..';
import './Center.scss';
import { Next } from './Next';
import { Previous } from './Previous';

export interface Props {
    image: LboxImage;
    index: number;
}

export default function Center({ image, index }: Props) {
    return (
        <div className="LbCenter">
            <img src={image.src} alt={`${index + 1}th image`} className="LbCenter__Image" />
            <Previous />
            <Next />
        </div>
    );
}
