import React from 'react'

const Card = ({cliente , sorteo}) => {

    const {nombre, fecha} = cliente;
    const {carta1, carta2, carta3} = sorteo;

    const tarotjson = require('../APIs/tarot.json');
    
    const personality = require('../APIs/Personality.json');

    const cartasTarot = require.context('../Images');

    let formato = "";

    const determinaSigno = (personality) =>{
        formato = formatDate(fecha);
      
      let flag =true;
      let signo = [];
      for(let i=0; i<personality.length;i++){
        const {
          nome,
          caracteristica,
          periodo: [inicio, fin],
        } = personality[i];
        flag = comparar(formato, inicio, fin);
        if (flag) {   
          signo[0] = nome;
          signo[1] = caracteristica       
          return signo;
        }
      }      
    }

    const tuCarta = (card) =>{
      let tarot = [];
      if(card === undefined){
        return ("Esperando datos")
      }else{
        const {name, image, description, interpretation } = tarotjson[card];
      
        tarot[0] = name;
        tarot[1] = description;
        tarot[3] = image;
        tarot[4] = interpretation;
  
        return tarot;
      }

    }

    const formatDate = (fecha) => {
      let fechaday = fecha.split("-")
      let newDate = `${fechaday[2]}/${fechaday[1]}`
      return newDate;
    }
    function comparar(formato, inicio, fin){
      let diaCliente = formato[0] + formato[1];
      let mesCliente = formato[3] + formato[4];

      let diaInicio = inicio[0] + inicio[1];
      let mesInicio = inicio[3] + inicio[4];

      let diaFin = fin[0] + fin[1];
      let mesFin = fin[3] + fin[4];

      diaCliente = parseInt(diaCliente);
      mesCliente = parseInt(mesCliente);

      diaInicio = parseInt(diaInicio);
      mesInicio = parseInt(mesInicio);

      diaFin = parseInt(diaFin);
      mesFin = parseInt(mesFin);

      if ((diaCliente >= diaInicio || diaCliente <= diaFin)&&(mesCliente === mesInicio || mesCliente === mesFin)){
        return true;
      }else{
        return false;
      }

    }   
    let personalidad = [];
    if (fecha !== undefined){
      personalidad = determinaSigno(personality);
    }
    
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-10 rounded-xl md:h-screen overflow-y-scroll">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Resultados de tu destino {""}
        <span className="font-bold mb-3 text-indigo-700 uppercase">
          {" "}
          {nombre}
        </span>
      </p>
      <p className="font-medium text-gray-700">
        {" "}
        Tu Signo es : {personalidad[0]}
        <br />
      </p>
      <p> {personalidad[1]}</p>
      <div className="py-5">
        <h2 className="font-bold mb-3 text-indigo-700 uppercase ">
          Tus Cartas
        </h2>
      </div>
      <div className="py-3">
        <h3 className="font-bold">Carta 1:</h3>
        <div className="flex flex-row justify-center py-5 shadow-md">
          <img
            src={cartasTarot(`./${tuCarta(carta1)[3]}`)}
            alt="Carta Tarot"
            width="200vh"
          />
        </div>
        <p className="py-2">
          <span className="font-bold">{tuCarta(carta1)[0]}</span> :{" "}
          {tuCarta(carta1)[1]}
        </p>
        <p>
          <span className="font-bold">Interpretación:</span>{" "}
          {tuCarta(carta1)[4]}
        </p>
      </div>
      <div className="py-3">
        <h3 className="font-bold">Carta 2:</h3>
        <div className="flex flex-row justify-center py-5 shadow-md">
          <img
            src={cartasTarot(`./${tuCarta(carta2)[3]}`)}
            alt="Carta Tarot"
            width="200vh"
          />
        </div>
        <p className="py-2">
          <span className="font-bold">{tuCarta(carta2)[0]}</span> :{" "}
          {tuCarta(carta2)[1]}
        </p>
        <p>
          <span className="font-bold">Interpretación:</span>{" "}
          {tuCarta(carta2)[4]}
        </p>
      </div>
      <div className="py-3">
        <h3 className="font-bold">Carta 3:</h3>
        <div className="flex flex-row justify-center py-5 shadow-md">
          <img
            src={cartasTarot(`./${tuCarta(carta3)[3]}`)}
            alt="Carta Tarot"
            width="200vh"
          />
        </div>
        <p className="py-2">
          <span className="font-bold">{tuCarta(carta3)[0]}</span> :{" "}
          {tuCarta(carta3)[1]}
        </p>
        <p>
          <span className="font-bold">Interpretación:</span>{" "}
          {tuCarta(carta3)[4]}
        </p>
      </div>
    </div>
  );
}
export default Card