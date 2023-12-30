import React from 'react';
import sectionList from '@interfaces/sectionList';
import '@styles/nav.scss';

interface nav {
    sections: Array<sectionList>;
    curSection: number;
}

function Nav({ sections, curSection }: nav): React.ReactElement {
    const [visible, setVisible] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState(0);
    const [curSelection, setCurSelection] = React.useState(-1);
    const navRef = React.useRef<HTMLElement>(null);

    const grow = () => {
        let tempMax = 0;
        Array.from(navRef.current!.children as HTMLCollectionOf<HTMLElement>).forEach((element) => {
            const header = element!.children[0];
            tempMax = tempMax > header.scrollWidth ? tempMax : header.scrollWidth;
        });
        setMaxWidth(tempMax);
        setVisible(true);
    };

    const shrink = () => {
        setMaxWidth(0);
        setVisible(false);
        setCurSelection(-1);
    };

    const navHoverSelection = (index: number) => {
        setCurSelection(index);
    };

    const scroll = (id: string) => {
        const element = document.getElementById(id);
        console.log(element);
        if (element)
            window.scrollTo({
                top: element.offsetTop,
            });
        return undefined;
    };

    return (
        <nav ref={navRef} onMouseEnter={grow} onMouseLeave={shrink}>
            {sections.map((section, index) => {
                return (
                    <button
                        className={`${visible ? 'visible' : ''} ${
                            curSelection === index || curSection === index ? 'active' : ''
                        }`}
                        style={{ maxWidth: `${maxWidth != 0 ? `calc(${maxWidth}px + 3rem)` : '2.5rem'}` }}
                        onMouseOver={() => {
                            navHoverSelection(index);
                        }}
                        onFocus={() => {
                            navHoverSelection(index);
                        }}
                        onClick={() => {
                            scroll(section.id);
                        }}
                        key={`${section.id}Nav`}
                    >
                        <h5>{section.name}</h5>
                    </button>
                );
            })}
        </nav>
    );
}

export default Nav;
