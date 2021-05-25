import React, { useState } from 'react';

import Lightbox from "react-image-lightbox";

interface ILightBoxWrapperProps {
    images: string[];
    setSetShowLightBoxToFalse: any;
}

export default function LightBoxWrapper(props: ILightBoxWrapperProps) {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const {images} = props;

    return (
        <div>
            { /* isOpen &&  */
            <Lightbox 
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={
                    // () => setIsOpen(false)
                    () => props.setSetShowLightBoxToFalse()
                }
                onMovePrevRequest={() =>
                    // this.setState({
                    //     photoIndex: (photoIndex + images.length - 1) % images.length
                    // })
                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                    // this.setState({
                    //     photoIndex: (photoIndex + 1) % images.length
                    // })
                    setPhotoIndex((photoIndex + 1) % images.length)
                }
            />}
        </div>
    )
}