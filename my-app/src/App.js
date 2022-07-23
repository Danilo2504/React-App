import './App.css';
import './styles.css';
import Calculator from './components/Calculator';
import InputKids from './components/InputKids';
import CurdApp from './components/CurdApp';

function App() {
  return(
    <>
      {/*To Do: buscar diferencia entre fragment y div */}
      <InputKids/>

      <Calculator/>

      <CurdApp/>
    </>
  );
}

export default App;