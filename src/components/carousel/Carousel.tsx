import React from 'react';
import { cardProps } from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import className from '@helpers/className';
import '@styles/carousel.scss';

interface carouselProps {
    children: React.ReactElement<cardProps>[] | React.ReactElement<cardProps>;
}

type Direction = 'left' | 'right';

function Carousel({ children }: carouselProps): React.ReactElement {
    const childArray = React.Children.toArray(children);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    const [exiting, setExiting] = React.useState(false);
    const [direction, setDirection] = React.useState<Direction>('right');

    const goTo = (index: number, dir: Direction) => {
        if (exiting || index === currentIndex) return;
        setDirection(dir);
        setExiting(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setExiting(false);
        }, 300);
    };

    const prev = () => goTo((currentIndex - 1 + childArray.length) % childArray.length, 'left');
    const next = () => goTo((currentIndex + 1) % childArray.length, 'right');

    React.useEffect(() => {
        if (paused) return;
        const interval = setInterval(() => {
            goTo((currentIndex + 1) % childArray.length, 'right');
        }, 3000);
        return () => clearInterval(interval);
    }, [paused, currentIndex, childArray.length]);

    return (
        <div
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="carousel-viewport">
                <div
                    className={className({
                        'carousel-slide': true,
                        exiting,
                        left: exiting && direction === 'left',
                        right: exiting && direction === 'right',
                    })}
                >
                    {childArray[currentIndex]}
                </div>
            </div>
            <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="carousel-btn carousel-next" onClick={next} aria-label="Next">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className="carousel-dots">
                {childArray.map((_, i) => (
                    <button
                        key={i}
                        className={className({ dot: true, active: i === currentIndex })}
                        onClick={() => goTo(i, i > currentIndex ? 'right' : 'left')}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
