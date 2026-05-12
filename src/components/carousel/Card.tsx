import React from 'react';

interface cardProps {
    img: string;
    alt?: string;
    text?: string;
}

function Card(props: cardProps): React.ReactElement {
    return (
        <>
            <img src={props.img} {...(props.alt ? { alt: props.alt } : {})} />
            {props.text && (
                <div className="card-text">
                    <p>{props.text}</p>
                </div>
            )}
        </>
    );
}

export default Card;
export type { cardProps };
