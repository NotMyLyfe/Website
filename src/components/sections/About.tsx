import React from 'react';
import sectionProps from '../../interfaces/section_props';
import '../../scss/about.scss';

function About({ visible }: sectionProps): React.ReactElement {
    return (
        <div className="about">
            <div className="about__content"></div>
        </div>
    );
}

export default About;
