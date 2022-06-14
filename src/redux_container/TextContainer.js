import React from 'react';
import Text from '../components/Text';
import { useDispatch,useSelector } from 'react-redux';
import { addText } from '../redux_modules/text';


const TextContainer = () => {
    const {text} = useSelector(state => state);
    const dispatch = useDispatch();

    const onSubmit = (text) => dispatch(addText(text));

    return (
        <>
            <Text text={text} onSubmit={onSubmit}/>
        </>
    );
};

export default TextContainer;