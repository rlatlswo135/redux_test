import React from 'react';
import { useParams } from 'react-router-dom';
import AsyncContainer from '../redux_container/AsyncContainer';

const Detail = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <>
            <AsyncContainer id={id}/>
        </>
    );
};

export default Detail;