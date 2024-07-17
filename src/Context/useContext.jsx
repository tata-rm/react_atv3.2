import React, { createContext, useState } from 'react';

export const TemaContext = createContext();

export const ProviderTema = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const temaAtual = tema === 'claro' ? 'claro' : 'escuro';
  const cores = {
    claro: { corFundo: '#FFFFFF', corTexto: '#000000' },
    escuro: { corFundo: '#000000', corTexto: '#FFFFFF' },
  };

  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema, ...cores[temaAtual] }}>
      {children}
    </TemaContext.Provider>
  );
};
