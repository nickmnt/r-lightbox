import React from 'react';
import ArrowLeft from '../../Icons/ArrowLeft';
import './Next.scss';

export interface Props {
    index: number;
    setIndex: (value: number) => void;
}

export default function Next({ index, setIndex }: Props) {
    const goToNext = () => {
        setIndex(index + 1);
    };

    return (
        <div className="LbNext" onClick={goToNext}>
            <div className="Mirror LbNext__Arrow">
                <ArrowLeft />
            </div>
        </div>
    );
}
