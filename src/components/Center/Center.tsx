import React, { useEffect, useState } from 'react';
import { LboxImage } from '../..';
import './Center.scss';
import { Next } from './Next';
import { Previous } from './Previous';

export interface Props {
    image: LboxImage;
    index: number;
    setIndex: (value: number) => void;
    images: LboxImage[];
}

export default function Center({ image, index, setIndex, images }: Props) {
    const [localImage, setLocalImage] = useState<LboxImage | null>(null);
    const [loaded, setLoaded] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        if (!localImage) {
            setLocalImage(image);
        } else {
            if (image !== localImage) {
                setLoaded(false);
                setTimeout(() => {
                    setLocalImage(image);
                    setShowLoading(true);
                }, 750);
            } else {
                setLoaded(false);
                setTimeout(() => {
                    setLoaded(true);
                }, 750);
            }
        }
    }, [image]);

    const hasPrevious = index - 1 >= 0;
    const hasNext = index + 1 < images.length;

    return (
        <div className="LbCenter">
            {localImage && (
                <img
                    src={localImage.src}
                    alt={`${index + 1}th image`}
                    className={`LbCenter__Image${!loaded ? ' LbCenter__Image--Disappear' : ''}${showLoading ? ' LbCenter__Image--Hidden' : ''}`}
                    onLoad={(e) => {
                        if (e.currentTarget.complete) {
                            setLoaded(true);
                            setShowLoading(false);
                        }
                    }}
                />
            )}
            {showLoading && <p className="LbCenter__Waiting">Downloading image...</p>}
            {hasPrevious && <Previous index={index} setIndex={setIndex} />}
            {hasNext && <Next index={index} setIndex={setIndex} />}
        </div>
    );
}
