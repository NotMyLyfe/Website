import React from 'react';
import sectionProps from '../../interfaces/section_props';
import '../../scss/hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Hero({ visible }: sectionProps): React.ReactElement {
    const hero_text = [
        'Gordon Lin!',
        'a student!',
        'a programmer!',
        'a musician!',
        'a photographer!',
        'a gamer!',
        'a board game enthusiast!',
    ];
    const typingStates = ['typing', 'waiting', 'deleting'];
    const [index, setIndex] = React.useState(0);
    const [typingState, setTypingState] = React.useState(typingStates[0]);
    const [curText, setCurText] = React.useState('');
    const [arrowMoving, setArrowMoving] = React.useState(true);

    const scroll = (id: string) => {
        const element = document.getElementById(id);
        if (element)
            window.scrollTo({
                top: element.offsetTop,
            });
        return undefined;
    };

    const typing = () => {
        if (typingState === 'typing') {
            if (curText.length === hero_text[index].length) {
                setTypingState(typingStates[1]);
                setTimeout(() => {
                    setTypingState(typingStates[2]);
                }, 3000);
            } else {
                setTimeout(() => {
                    setCurText(curText + hero_text[index][curText.length]);
                }, 100);
            }
        } else if (typingState === 'deleting') {
            if (curText.length === 0) {
                setTypingState(typingStates[1]);
                setIndex((index + 1) % hero_text.length);
                setTimeout(() => {
                    setTypingState(typingStates[0]);
                }, 1000);
            } else {
                setTimeout(() => {
                    setCurText(curText.slice(0, -1));
                }, 50);
            }
        }
    }

    React.useEffect(() => {
        if(visible)
            typing();
    });

    React.useEffect(() => {
        setArrowMoving(visible);
    }, [visible]);

    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Hello there!</h1>
                <h2>
                    I&apos;m <span className={typingState}>{curText}</span>
                </h2>
            </div>
            <div className="hero-down">
                <FontAwesomeIcon
                    onClick={() => {
                        scroll('about');
                    }}
                    className={`${arrowMoving ? 'arrow-move' : ''}`}
                    icon={faChevronDown}
                />
            </div>
        </div>
    );
}

export default Hero;
