import React from 'react';
import { Section } from '@/interfaces';
import '@styles/hero.scss';
function Hero(props: Section.SectionProps): React.ReactElement {
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
    };

    if (props.visible) typing();

    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Hello there!</h1>
                <h2>
                    I&apos;m <span className={typingState}>{curText}</span>
                </h2>
                <p className="hero-bio">
                    CS (Stat minor) @ UWaterloo &mdash; clarinetist, photographer, and avid gamer.
                </p>
            </div>
        </div>
    );
}

export default Hero;
