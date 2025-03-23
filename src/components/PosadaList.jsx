import React from 'react'

const PosadaList = ({ setPosada}) => {
    const posadas = [ "Posada A", "Posada B", "Posada C"];

  return (
    <div>
        <h2>Selecciona una posada</h2>
        <ul>
            {posadas.map((posada, index) => (
                <li key={index} onClick={() => setPosada(posada)}>
                    {posada}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PosadaList;