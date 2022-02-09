import React from 'react';
import ArrowLeft from '../../Icons/ArrowLeft';
import './Next.scss';

export interface Props {
    goToNext: () => void;
}

export default function Next({ goToNext }: Props) {
    return (
        <div className="LbNext" onClick={goToNext}>
            <div className="Mirror LbNext__Arrow">
                <ArrowLeft />
            </div>
        </div>
    );
}
