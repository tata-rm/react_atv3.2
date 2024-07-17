import React from 'react';
import ButAlternar from './ButAlternar';
import { useContext } from 'react';
import { TemaContext } from '../Context/useContext';


const Alternar = () => {
    const { corFundo, corTexto } = useContext(TemaContext);

    return (
        <div style={{ backgroundColor: corFundo, color: corTexto, height: '100vh' }}>
        <h2>Alternar o Tema</h2>
        <ButAlternar />
        </div>
    );
};

export default Alternar;
