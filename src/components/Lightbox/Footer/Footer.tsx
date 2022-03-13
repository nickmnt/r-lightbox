import React from 'react';
import { LboxImage } from '../../../types/lightbox';
import './Footer.scss';

export interface Props {
    image: LboxImage;
    footerElement?: React.ReactNode;
}
export default function Footer({ image, footerElement }: Props) {
    return (
        <div className="LbFooter">
            <div className="LbFooter__Left">
                <div className="LbFooter__Title">{image.title}</div>
                <div className="LbFooter__SecondaryTitle">{image.secondaryTitle}</div>
            </div>
            <div className="LbFooter__Right">{footerElement}</div>
        </div>
    );
}
