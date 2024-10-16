import React, { useState } from 'react';
import "./App.css";
import ListaPersonagens from "./components/ListaPersonagens";
import { fetchPersonagens } from "./services/api";

const Home = () => {
    const [personagensData, setPersonagensData] = useState([]);
    const [temporada, setTemporada] = useState("");
    const [elemento, setElemento] = useState("");
    const [filtroVisivel, setFiltroVisivel] = useState(false);
    const [filtroAtivo, setFiltroAtivo] = useState({ temporada: "", elemento: "" });
  
    const carregaPersonagens = async () => {
      try {
        const dadosPersonagens = await fetchPersonagens();
        setPersonagensData(dadosPersonagens);
      } catch (error) {
        console.error("Erro de acesso api: ", error);
      }
    };
  
    const filtrarPersonagens = (personagem) => {
      const filtroTemporada = !temporada || personagem.Temporada === temporada;
      const filtroElemento = !elemento || personagem.Elemento === elemento;
      return filtroTemporada && filtroElemento;
    };
  
    const personagensFiltrados = personagensData.filter(filtrarPersonagens);
  
    const filtrarTemporadas = (Temporada) => {
      setTemporada(Temporada);
      setFiltroVisivel(true);
      setFiltroAtivo({ ...filtroAtivo, temporada: Temporada });
    };
  
    const filtrarElemento = (Elemento) => {
      setElemento(Elemento);
      setFiltroVisivel(true);
      setFiltroAtivo({ ...filtroAtivo, elemento: Elemento });
    };
  
    return (
      <>
        <div className="titulo">
          <h1>Ordem Paranormal</h1>
          <button onClick={carregaPersonagens}>Carregar Personagens</button>
          <div id="filtro">
            <button
              className={filtroAtivo.temporada === "Calamidade" ? "active" : ""}
              onClick={() => filtrarTemporadas("Calamidade")}
            >
              Calamidade
            </button>
            <button
              className={filtroAtivo.temporada === "Desconjuração" ? "active" : ""}
              onClick={() => filtrarTemporadas("Desconjuração")}
            >
              Desconjuração
            </button>
            <button
              className={filtroAtivo.temporada === "Floresta" ? "active" : ""}
              onClick={() => filtrarTemporadas("Floresta")}
            >
              O Segredo na Floresta
            </button>
            <button
              className={filtroAtivo.temporada === "" ? "active" : ""}
              onClick={() => filtrarTemporadas("")}
            >
              Todos
            </button>
          </div>
        </div>
        {filtroVisivel && (
          <div className="filtroElementos">
            <button
              className={filtroAtivo.elemento === "Energia" ? "active" : ""}
              onClick={() => filtrarElemento("Energia")}
            >
              Energia
            </button>
            <button
              className={filtroAtivo.elemento === "Conhecimento" ? "active" : ""}
              onClick={() => filtrarElemento("Conhecimento")}
            >
              Conhecimento
            </button>
            <button
              className={filtroAtivo.elemento === "Sangue" ? "active" : ""}
              onClick={() => filtrarElemento("Sangue")}
            >
              Sangue
            </button>
            <button
              className={filtroAtivo.elemento === "Morte" ? "active" : ""}
              onClick={() => filtrarElemento("Morte")}
            >
              Morte
            </button>
            <button
              className={filtroAtivo.elemento === "Medo" ? "active" : ""}
              onClick={() => filtrarElemento("Medo")}
            >
              Medo
            </button>
            <button
              className={filtroAtivo.elemento === "" ? "active" : ""}
              onClick={() => filtrarElemento("")}
            >
              Todos
            </button>
          </div>
        )}
        <div className="list">
          <ListaPersonagens personagens={personagensFiltrados} />
        </div>
      </>
    );
  };
  
  export default Home;