import './App.css';
import AsyncContainer from './redux_container/AsyncContainer';
import NumberContainer from './redux_container/NumberContainer';
import TextContainer from './redux_container/TextContainer';
import {createBrowserHistory} from 'history'
//react-router에 있는기능임 그니까 package.json에 안보이지 삽질니은
import Main from './components/Main';
import Detail from './components/Detail';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
