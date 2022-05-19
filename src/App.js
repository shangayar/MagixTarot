import './App.css';
import {useState} from 'react';
import FormUsuario from './components/FormUsuario';
import Header from './components/Header';
import Card from './components/Card';

function App() {

  const [ cliente , setCliente ] = useState({});

  const [ sorteo , setSorteo ] = useState({})


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <FormUsuario
          cliente={cliente}
          setCliente={setCliente}
          sorteo={sorteo}
          setSorteo={setSorteo}
        />
         <Card cliente={cliente} sorteo={sorteo} />
      </div>
    </div>
  );
}

export default App;
