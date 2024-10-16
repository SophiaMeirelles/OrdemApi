import React from 'react';
import CardPersonagens from './CardPersonagens';

function ListaPersonagens({ personagens }) {
  return (
    <div>
      {personagens.map((personagem) => (
        <CardPersonagens
          personagem={personagem}
        />
      ))}
    </div>
  );
}

export default ListaPersonagens;