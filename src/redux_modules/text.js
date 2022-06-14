const ADD_TEXT = 'text/ADD_TEXT';

export const addText = (text) => ({
    type:ADD_TEXT,
    text
});

const initialState = {
    text:"initial"
}

const text = (state=initialState,action) => {
    switch(action.type){
        case ADD_TEXT:
            return ({
                text:action.text
            })
        default:
            return state
    }
}

export default text