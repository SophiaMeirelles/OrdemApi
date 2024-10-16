import React from 'react';

function CardPersonagens({ personagem }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{personagem.Nome}</h3>
      <img src={personagem.Imagem} alt={`Imagem do(a) ${personagem.Nome}`} width="300" />
      <p>
        <strong>Temporada: </strong>{personagem.Temporada}<br />
        <strong>Ator:</strong> {personagem.Ator} <br />
        <strong>Elemento:</strong> {personagem.Elemento}
      </p>
    </div>
  );
}

export default CardPersonagens;