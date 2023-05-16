'use client';
import { useRef, useEffect } from 'react';
import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.thumbs.css';
import { Carousel as NativeCarousel } from '@fancyapps/ui/dist/carousel/carousel.umd.js';
import '@fancyapps/ui/dist/carousel/carousel.css';

function Carousel(props) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        // const options = props.options || {};
        const options = {
            infinite: false,
            adaptiveHeight: true,
        };

        const instance = new NativeCarousel(container, options);

        return () => {
            instance.destroy();
        };
    });

    return (
        <div className='f-carousel' ref={containerRef}>
            {props.children}
        </div>
    );
}

export default Carousel;
