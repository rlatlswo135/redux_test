//타입 액션생성함수 리듀서

import { call, delay, getContext, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { postGet } from '../api/post';

const ASYNC_GET_PUTDATA = 'async/ASYNC_GET_PUTDATA'
const ASYNC_DELETE_DATA = 'async/ASYNC_POST_PUTDATA'

const ASYNC_GET = 'async/ASYNC_GET';
const ASYNC_DELETE = 'async/ASYNC_DELETE';

const GO_HOME = 'async/GO_HOME';

export const asyncGet = (data) => ({type:ASYNC_GET,data});
export const asyncDelete = () => ({type:ASYNC_DELETE});

export const asyncGetPutData = () => ({type:ASYNC_GET_PUTDATA})
export const asyncDeleteData = () => ({type:ASYNC_DELETE_DATA})

export const goHome = () => ({type:GO_HOME});

const initialState = [];

function* postGetSaga(){
    try{
        const {data} = yield call(postGet);
        yield put(asyncGet(data));
    }catch(e){
        console.log(e)
    }
}
function* postDeleteSaga(){
    yield put(asyncDelete());
}

function* postGoHomeSaga(){
    const history = yield getContext('history')
    history.push('/')
}

export function* asyncSaga(){
    yield takeEvery(ASYNC_GET_PUTDATA,postGetSaga)
    yield takeLatest(ASYNC_DELETE_DATA,postDeleteSaga)
    yield takeEvery(GO_HOME,postGoHomeSaga)
}

const async = (state=initialState,action) => {
    switch(action.type){
        case ASYNC_GET:
            return state.concat(action.data)
        case ASYNC_DELETE:
            return []
        default:
            return state
    }
}

export default async