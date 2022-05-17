import React from 'react'
import { useState } from 'react';
import Error from './Error';

function FormUsuario({cliente , setCliente}) {

    const [nombre , setNombre] = useState("");
    const [edad , setEdad ] = useState("");
    const [genero , setGenero ] = useState("");
    const [fecha , setFecha ] = useState("");
    const [error, setError] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, edad, genero, fecha].includes('')){
        // console.log('Hay almenos un campo vacío')
        setError(true);
        return;
    }
    setError(false);

    setCliente({ nombre , edad , genero , fecha });

    //reinicio el form
    setNombre('');
    setEdad('');
    setGenero('');
    setFecha('');
}

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
          {error && <Error mensaje='Todos los Campos son Obligaotiors'/>}

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Tu Nombre
          </label>

          <input
            type="text"
            placeholder="Ingresa tu Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Edad
          </label>

          <input
            type="number"
            placeholder="Ingresa tu Edad"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Genero
          </label>

          <input
            list="genero"
            placeholder="Ingresa tu Genero"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
          <datalist id="genero">
            <option value="Varon" />
            <option value="Mujer" />
            <option value="No binario" />
          </datalist>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Fecha Nac.
          </label>

          <input
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Adivina mi suerte"
        />
      </form>
    </div>
  );
}

export default FormUsuario