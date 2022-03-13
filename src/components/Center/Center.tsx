import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { LboxImage } from '../..';
import './Center.scss';
import { Next } from './Next';
import { Previous } from './Previous';

export interface Props {
    image: LboxImage;
    index: number;
    setIndex: (value: number) => void;
    images: LboxImage[];
    onChange?: (oldImg: LboxImage, newImg: LboxImage) => void;
}

export default function Center({ image, index, setIndex, images, onChange }: Props) {
    const hasPrevious = index - 1 >= 0;
    const hasNext = index + 1 < images.length;

    const goToPrevious = () => {
        if (hasPrevious) {
            setIndex(index - 1);
            if (onChange) {
                onChange(images[index + 1], images[index]);
            }
        }
    };

    const goToNext = () => {
        if (hasNext) {
            setIndex(index + 1);
            if (onChange) {
                onChange(images[index - 1], images[index]);
            }
        }
    };

    const handlers = useSwipeable({ onSwipedRight: () => goToPrevious(), onSwipedLeft: () => goToNext() });

    const [localImage, setLocalImage] = useState<LboxImage | null>(null);
    const [loaded, setLoaded] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        console.log('yes');
        if (!localImage) {
            console.log('yes1');
            setLocalImage(image);
        } else {
            console.log('yes2');
            if (image.src !== localImage.src) {
                console.log('yes3');
                setLoaded(false);
                setTimeout(() => {
                    setLocalImage(image);
                    setShowLoading(true);
                }, 750);
            } else {
                console.log('yes4');
                // setLoaded(false);
                // setTimeout(() => {
                // setLoaded(true);
                // }, 750);
            }
        }
    }, [image]);

    return (
        <div className="LbCenter" {...handlers}>
            {localImage && (
                <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0}>
                    <TransformComponent contentStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    </TransformComponent>
                </TransformWrapper>
            )}
            {showLoading && <p className="LbCenter__Waiting">Downloading image...</p>}
            {hasPrevious && <Previous goToPrevious={goToPrevious} />}
            {hasNext && <Next goToNext={goToNext} />}
        </div>
    );
}
