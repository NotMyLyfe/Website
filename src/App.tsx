import React from 'react';
import '@styles/_global.scss';
import UseIntersectionObserver from '@helpers/UseIntersectionObserver';
import * as Sections from '@components/sections';
import { Nav, Footer } from '@/components';
import { Section } from '@/interfaces';

const sectionIntersectionObserverOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-15% 0px',
};

function App(): React.ReactElement | null {
    const sections: Array<Section.SectionList> = [
        {
            id: 'hero',
            name: 'Welcome',
            component: (visible) => {
                return <Sections.Hero visible={visible} />;
            },
            ...UseIntersectionObserver(sectionIntersectionObserverOptions),
        },
        {
            id: 'experience',
            name: 'Experience',
            component: (visible) => {
                return <Sections.Experience visible={visible} />;
            },
            ...UseIntersectionObserver(sectionIntersectionObserverOptions),
        },
        {
            id: 'projects',
            name: 'Projects',
            component: (visible) => {
                return <Sections.Projects visible={visible} />;
            },
            ...UseIntersectionObserver(sectionIntersectionObserverOptions),
        },
        {
            id: 'photography',
            name: 'Photography',
            component: (visible) => {
                return <Sections.Photography visible={visible} />;
            },
            ...UseIntersectionObserver(sectionIntersectionObserverOptions),
        },
    ];

    const [curSection, setCurSection] = React.useState(-1);

    sections.findLast((val, idx) => {
        if (val.visible) {
            if (curSection !== idx) setCurSection(idx);
            return true;
        }
    });

    return (
        <>
            <Nav sections={sections} curSection={curSection} />
            {sections.map((sectionObj) => {
                return (
                    <section id={sectionObj.id} key={sectionObj.id} ref={sectionObj.ref}>
                        {sectionObj.component(sectionObj.visible)}
                    </section>
                );
            })}
            <Footer />
        </>
    );
}

export default App;
