import React from 'react';
import './scss/_global.scss';
import UseIntersectionObserver from './helpers/UseIntersectionObserver';
import * as Section from './components/sections';
import Nav from './components/Nav';
import Footer from './components/Footer';
import sectionList from './interfaces/sectionList';

const sectionIntersectionObserverOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-15% 0px',
};

function App(): React.ReactElement | null {
    const sections: Array<sectionList> = [
        {
            id: 'hero',
            name: 'Welcome',
            component: (visible) => {
                return <Section.Hero visible={visible} />;
            },
            ...UseIntersectionObserver(sectionIntersectionObserverOptions),
        },
        {
            id: 'about',
            name: 'About Me',
            component: (visible) => {
                return <Section.About visible={visible} />;
            },
            ...UseIntersectionObserver(sectionIntersectionObserverOptions),
        },
    ];

    const [loading, setLoading] = React.useState(true);
    const [curSection, setCurSection] = React.useState(-1);

    React.useEffect(() => {
        if (loading) {
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

        for (let i = sections.length - 1; i >= 0; i--) {
            if (sections[i].visible) {
                setCurSection(i);
                break;
            }
        }
    }, [loading, sections]);

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
