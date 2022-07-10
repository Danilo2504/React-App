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
      <CurdApp name="Travis Jackson" age="18"/>
      <CurdApp name="Linda Moorhouse" age="22"/>
      <CurdApp name="Jeffrey Delgado"age="21"/>
    </>
  );
}

export default App;