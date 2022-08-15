import React from 'react';
import './scss/_global.scss';
import Hero from './components/Hero';
import Loading from './components/Loading';

function App() {
    return (
        <>
            <Loading />
            <Hero />
        </>
    );
}

export default App;
