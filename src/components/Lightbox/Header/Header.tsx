import IconButton from '@mui/material/IconButton/IconButton';
import React from 'react';
import { LboxImage } from '../../../types/lightbox';
import ArrowLeft from '../../Icons/ArrowLeft';
import './Header.scss';

export interface Props {
    images: LboxImage[];
    index: number;
}

export default function Header({ images, index }: Props) {
    return (
        <div className="LbHeader">
            <div className="LbHeader__Left">
                <IconButton sx={{ color: 'white' }}>
                    <ArrowLeft />
                </IconButton>
                <p className="LbHeader__Text">
                    {index + 1} of {images.length}
                </p>
            </div>
            <div className="LbHeader__Right"></div>
        </div>
    );
}
