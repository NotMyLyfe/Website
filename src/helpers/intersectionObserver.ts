import React from "react";

function intersectionObserver(options? : IntersectionObserverInit){
    const ref = React.useRef<HTMLElement | null>(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref.current)
            observer.observe(ref.current);

        return () => {
            if(ref.current)
                observer.unobserve(ref.current);
        };
    }, [ref, options]);

    return {ref, visible};
}

export default intersectionObserver;