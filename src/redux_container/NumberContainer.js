import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increseNum,decreseNum,increaseAsync,decreaseAsync } from '../redux_modules/number';
import Number from '../components/Number';

const NumberContainer = () => {
    const dispatch = useDispatch();
    const {number} = useSelector(state => state);

    const onIncrese = () => dispatch(increaseAsync());

    const onDecrese = () => dispatch(decreaseAsync());


    return (
        <>
            <Number number={number} onIncrese={onIncrese} onDecrese={onDecrese} />
        </>
    );
};

export default NumberContainer;