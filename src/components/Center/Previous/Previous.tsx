import React from 'react';
import ArrowLeft from '../../Icons/ArrowLeft';
import './Previous.scss';

export interface Props {
    goToPrevious: () => void;
}

export default function Previous({ goToPrevious }: Props) {
    return (
        <div className="LbPrevious" onClick={goToPrevious}>
            <div className="LbPrevious__Arrow">
                <ArrowLeft />
            </div>
        </div>
    );
}
