import './App.scss';
import { Footer } from './widgets/Footer';
import {Header} from './widgets/Header';
import { Main } from './widgets/Main';

function App() {
  return (
    <>
      <div className='app'>
        <Header />

        <Main />

        <Footer />
      </div>
    </>
  );
}

export default App;
