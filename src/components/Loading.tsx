import React from 'react';
import '../scss/_loading.scss';

class Loading extends React.Component {
    componentDidMount() {

    }
    
    render(): React.ReactNode {
        return (
            <div className="loading">
                <span className="circle"></span>
            </div>
        );
    }
}

export default Loading;
