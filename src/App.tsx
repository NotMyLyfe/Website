import React, { ReactElement, useEffect, useState } from 'react';
import './scss/_global.scss';
import intersectionObserver from './helpers/intersectionObserver';
import * as Section from './components/sections';
import Nav from './components/Nav';
import sectionList from './interfaces/sectionList';

const sectionIntersectionObserverOptions : IntersectionObserverInit = {
    rootMargin: "-30%"
};

function App() : ReactElement | null{
    const sections : Array<sectionList> = [
        {
            id: 'hero',
            name: 'Welcome',
            component: <Section.Hero />,
            ...intersectionObserver(sectionIntersectionObserverOptions)
        },
    ];

    const [loading, setLoading] = useState(true);
    const [curSection, setCurSection] = useState(-1);

    useEffect(() => {
        if(loading){
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if (loader) {
                    setLoading(false);
                    loader.classList.add('loaded');
                    setTimeout(() => {
                        loader.remove();
                    }, 3000);
                }
            }, 2000);
        }

        for(let i = sections.length - 1; i >= 0; i--){
            if(sections[i].visible){
                setCurSection(i);
                break;
            }
        }
    });

    if(loading) return null;
    else{
        return (
            <>
                <Nav sections={sections} curSection={curSection}/>
                {sections.map((sectionObj) => {
                    return (
                        <section id={sectionObj.id} key={sectionObj.id} ref={sectionObj.ref}>
                            {sectionObj.component}
                        </section>
                    );
                })}
            </>
        );
    }
}

export default App;
