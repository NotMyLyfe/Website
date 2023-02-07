import React from 'react';
import sectionProps from '../../interfaces/section_props';
import '../../scss/about.scss';

function About(props: sectionProps): React.ReactElement {
    return (
        <div className="about">
            <div className="info">
                <h1>Hello there! I'm Gordon Lin!</h1>
                <p>
                    I'm a Computer Science student at the University of Waterloo pursuing a Bachelor of Mathematics
                    degree in Computer Science with a specialization in Bioinformatics!
                </p>
                <p>
                    I'm also a programmer, where I primarily program in TypeScript/&#8203;JavaScript/&#8203;Node.js, but
                    I also program in Python, C++, and C!
                </p>
                <p>
                    In my free time, I enjoy the arts, with me being a clarinetist and a photographer! I also enjoy
                    playing video games and board games with friends and family!
                </p>
            </div>
            <div className="images">
                <h1>Under Construction, More Coming Soon...?</h1>
            </div>
        </div>
    );
}

export default About;
