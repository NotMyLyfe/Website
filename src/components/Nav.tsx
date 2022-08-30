import React from 'react';
import sectionList from '../interfaces/sectionList';
import '../scss/nav.scss';

interface nav{
    sections : Array<sectionList>
}

class Hero extends React.Component<nav> {
    constructor(props : nav){
        super(props);
    }

    render(): React.ReactNode {
        return (
            <nav>
                {this.props.sections.map((section) => {
                    return <a href={`#${section.id}`}><h5>{section.name}</h5></a>
                })}
            </nav>
        );
    }
}

export default Hero;
