import React from 'react'

const Card = ({cliente}) => {

    const {nombre, edad, genero, fecha} = cliente;

  return (
    <div>
      <h2>Prueba de Conceptos</h2>
      <h3>
          {nombre}
          {edad}
          {genero}
          {fecha}
      </h3>
    </div>
  );
}
export default Card