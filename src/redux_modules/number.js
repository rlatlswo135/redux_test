import {call, delay,put,takeEvery,takeLatest} from 'redux-saga/effects'
import { postGet } from '../api/post';

// redux모듈은 타입 + 액션생성함수 + 리듀서함수가 같이있다 (duks패턴)
const INCRESE_NUM = 'number/INCRESE_NUM';
const DECRESE_NUM = 'number/DECRESE_NUM';
const INCREASE_ASYNC = 'number/INCREASE_ASYNC';
const DECREASE_ASYNC = 'number/DECREASE_ASYNC';

export const increseNum = () => ({type:INCRESE_NUM})
export const decreseNum = () => ({type:DECRESE_NUM})

export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });


/******** 
 * redux-saga에서 생성자함수를 saga라고 한단다
*/

function* increaseSaga() {
    yield delay(500); // 1초를 기다립니다.
    yield put(increseNum()); // put은 특정 액션을 디스패치 해줍니다.

    // saga에선 put함수를 써서 새로운 액션을 디스패치
  }
  function* decreaseSaga() {
    yield delay(500); // 1초를 기다립니다.
    yield put(decreseNum()); // put은 특정 액션을 디스패치 해줍니다.
  }
/*
number컨테이너에서 INCREASE_ASYNC 타입 액션으로 디스패치를 보내는데 
미들웨어니까 사가를 거칠거고 해당 타입은 모두 increaseSaga를 리스닝중이니까 실행할거고
생성자함수로 들어가서 delay 1초되고 put사가 메서드를 통해 특정액션을 디스패치해주는데
그 액션이 increseNum타입생성자 함수를 이용한 타입. -> 그니까 여기서 더이상 미들웨어가없으니
리듀서로 가고 그 INCRESE_NUM타입으로 리듀서가 로직을 실행하고 state를 바꾸게싲
*/

  export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
    yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션'만'을 처리
  }

const initialState = {
    num:0
}

const number = (state = initialState,action) => {
    // 리듀서함수 내에서 비동기 처리가 안된다 ex) fetch를 통한 데이터를 store에 업데이트하는등
    switch(action.type){
        case INCRESE_NUM:
            return ({
                num:state.num+1
            })
        case DECRESE_NUM:
            return ({
                num:state.num-1
            })
        default:
            return state
    }
}

export default number

