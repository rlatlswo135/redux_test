import React from 'react';
import NumberContainer from '../redux_container/NumberContainer';
import TextContainer from '../redux_container/TextContainer';
import AsyncContainer from '../redux_container/AsyncContainer';

const Main = () => {
    console.log(`main render`)
    return (
        <div className="App">
            <NumberContainer />
            <br />
            <TextContainer />
            <br />
            <AsyncContainer />
            <br />
        </div>
    );
};

export default Main;