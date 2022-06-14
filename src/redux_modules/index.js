import number from './number'
import text from './text'
import async, { asyncSaga } from './async'
import { combineReducers } from 'redux'
import { counterSaga } from './number'
import { all } from 'redux-saga/effects'


const rootReducer = combineReducers({
    number,text,async
})

export function* rootSaga(){
    // all은 배열안에 사가를 다 실행시켜줌
    yield all([counterSaga(),asyncSaga()])
}

export default rootReducer