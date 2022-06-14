import React from 'react';
import Async from '../components/Async';
import { useSelector,useDispatch } from 'react-redux';
import { asyncGetPutData,asyncDeleteData,goHome } from '../redux_modules/async';

const AsyncContainer = ({id=null}) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const onClick = () => dispatch(asyncGetPutData());
    const onRollBack = () => dispatch(asyncDeleteData())
    const onGoHome = () => dispatch(goHome());

    const filter = state.async.filter(item => item.id === Number(id))

    return (
        <>
        {
            id
            ? <div>
                <p>{filter[0].title}</p>
                <p>{filter[0].body}</p>
                <button onClick={onGoHome}>goHome</button>
            </div>
            :
            <Async data={state.async} onGoHome={onGoHome} onClick={onClick} onRollBack={onRollBack}/>   
        }
        </>
    );
};

export default AsyncContainer;