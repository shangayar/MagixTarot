import './App.css';
import {useState} from 'react';
import FormUsuario from './components/FormUsuario';
import Header from './components/Header';
import Card from './components/Card';

function App() {

  const [cliente, setCliente] = useState({});


  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <FormUsuario
        cliente = {cliente}
        setCliente = {setCliente}
      />
      <Card
        cliente = {cliente}
      />
    </div>
  );
}

export default App;
