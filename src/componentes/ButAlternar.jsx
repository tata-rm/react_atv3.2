import React, { useContext } from 'react';
import { TemaContext } from '../Context/useContext'; 

const ButAlternar = () => {
  const { tema, alternarTema } = useContext(TemaContext);

  return (
    <button onClick={alternarTema}>
      Alternar Tema ({tema === 'claro' ? 'Escuro' : 'Claro'})
    </button>
  );
};

export default ButAlternar;
