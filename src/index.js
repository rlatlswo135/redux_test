import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './redux_modules';
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger';
// 패키지 로거미들웨어인 redux-logger쓰거나 방금만든 myLogger쓰거나 + redux데브툴과 쓰는 방법
import createSagaMiddleware from '@redux-saga/core';
import {createBrowserHistory} from 'history'
// react-router 내장기능
import {Router,BrowserRouter,unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'

const customHistory = createBrowserHistory();

const sagaMiddleWare = createSagaMiddleware({
  context:{
    history:customHistory
  }
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleWare,
      logger
)))

sagaMiddleWare.run(rootSaga)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
  {/* 
    기존의 Router로는 history가 안됬는데 위에처럼 unstable_HistoryRouter 로 끄집어내서
    history를 박아주니까 성공했다

    BrowserRouter는 history props를 무시한다늗네..

    왜이랬냐면 기존 BrowserRouter에 history를 박고 redux-saga쪽 에서 push하면 렌더링이 안됬다
    (이유는 검색해보자)

    이렇게 바까주니까 됫음

      
   */}
    <HistoryRouter history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
