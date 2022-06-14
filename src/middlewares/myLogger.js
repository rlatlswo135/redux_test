const myLogger = store => next => action => {
    // 1인자는 리덕스스토어 인스턴스 -> dispatch getState subscribe등 메서드가 들어있고

    // 2인자는 액션을 다음 미들웨어에게 보내는 함수. -> next를 호출하지 않게되면 리듀서에게 전달이안되겠지?

    // 3인자는 액션
    console.log('action',action);
    const result = next(action)
    // 다음 미들웨어에게 액션을 전달 -> 미들웨어가 없다면 리듀서에게 전달

    console.log('\t',store.getState().number);
    
    return result;

    // return 하는 값은 dispatch(action)의 결과물
}
export default myLogger


/*
지금만든게 store의 저장로그를 보여주는 로거니까 이역할을해주는 미들웨어가 redux-logger라고 있다

그걸 적용시켜주면 아무튼 같은결과 나옴
*/