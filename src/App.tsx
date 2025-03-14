import './App.scss';
import {Header} from './widgets/Header';
import { Main } from './widgets/Main';

function App() {
  return (
    <>
      <div className='app'>
        <Header />

        <Main />
      </div>
    </>
  );
}

export default App;
