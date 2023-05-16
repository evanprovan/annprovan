'use client';
import { useRef, useEffect } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox/fancybox.umd.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const Fancybox = (props) => {
    const container = useRef(null);

    useEffect(() => {
        const delegate = props.delegate || '[data-fancybox]';
        const options = props.options || {};

        NativeFancybox.bind(container.current, delegate, options);

        return () => {
            NativeFancybox.unbind(container.current);
            NativeFancybox.close();
        };
    });

    return <div ref={container}>{props.children}</div>;
};

export default Fancybox;
