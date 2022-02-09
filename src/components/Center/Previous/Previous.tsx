import React from 'react';
import ArrowLeft from '../../Icons/ArrowLeft';
import './Previous.scss';

export interface Props {
    index: number;
    setIndex: (value: number) => void;
}

export default function Previous({ index, setIndex }: Props) {
    const goToPrevious = () => {
        setIndex(index - 1);
    };

    return (
        <div className="LbPrevious" onClick={goToPrevious}>
            <div className="LbPrevious__Arrow">
                <ArrowLeft />
            </div>
        </div>
    );
}
