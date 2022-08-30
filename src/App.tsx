import React from 'react';
import './scss/_global.scss';
import * as Section from './components/sections';
import Nav from './components/Nav';
import sectionList from './interfaces/sectionList';

class App extends React.Component<unknown, { loading: boolean }> {
    private sections: Array<sectionList>;
    constructor(props: unknown) {
        super(props);
        this.state = {
            loading: true,
        };
        this.sections = [
            {
                id: 'hero',
                name: 'Welcome',
                component: <Section.Hero />,
            },
        ];
    }

    componentDidMount() {
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) {
                this.setState({ loading: false });
                loader.classList.add('loaded');
                setTimeout(() => {
                    loader.remove();
                }, 3000);
            }
        }, 2000);
    }

    render(): React.ReactNode {
        if (this.state.loading) {
            return null;
        }
        return (
            <>
                <Nav sections={this.sections}/>
                {this.sections.map((sectionObj) => {
                    return (
                        <section id={sectionObj.id} key={sectionObj.id}>
                            {sectionObj.component}
                        </section>
                    );
                })}
            </>
        );
    }
}

export default App;
