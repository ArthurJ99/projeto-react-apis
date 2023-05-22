import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, PokemonInfo } from "./styled";
import { usePokemons } from "../../context/global";
import { useLocation, useNavigate } from "react-router-dom";
import { types } from "../../utils/pokemon-types";
import Background from "../../assets/background-pokeball.png";

export default function PokemonCard({ pokemon, setModalIsOpen }) {
  const { setSelectedPokemons } = usePokemons();
  const navigate = useNavigate();
  const location = useLocation();
  const [pokemonData, setPokemonData] = useState(null);

  const handleCapture = () => {
    setSelectedPokemons((prev) => [...prev, pokemonData]);
    setModalIsOpen(true);
  };

  const handleRemove = () => {
    setSelectedPokemons((prev) =>
      prev.filter((pokemon) => pokemon.id !== pokemonData.id)
    );
    setModalIsOpen(true);
  };

  useEffect(() => {
    api
      .get(`pokemon/${pokemon.name}`)
      .then((response) => setPokemonData(response.data));
  }, [pokemon]);

  return (
    <>
      {pokemonData && (
        <Container
          style={{
            backgroundColor: types[pokemonData.types[0].type.name].color,
          }}
        >
          <div className="pokemon-section">
            <PokemonInfo>
              <p className="pokemon-id">#{pokemonData.id}</p>
              <p className="pokemon-name">{pokemonData.name}</p>
              <div className="pokemon-type">
                {pokemonData.types.map((item, index) => {
                  return (
                    <img
                      key={`types-${pokemonData.name}-${index}`}
                      src={types[item.type.name].img}
                      alt="tipo"
                    />
                  );
                })}
              </div>
            </PokemonInfo>
          </div>
          <div className="pokemon-sprite-front">
            <img src={Background} alt="background" className="background-card"/>
            <img
              src={pokemonData.sprites.other["official-artwork"].front_default}
              alt="pokemon"
            />
          </div>
          <div className="card-footer">
            <button
              className="details"
              onClick={() => navigate(`/details/${pokemonData.id}`)}
            >
              <p>detalhes</p>
            </button>
            {location.pathname === "/pokedex" ? (
              <button className="remove" onClick={handleRemove}>
                Excluir
              </button>
            ) : (
              <button className="capture" onClick={handleCapture}>
                Capturar!
              </button>
            )}
          </div>
        </Container>
      )}
    </>
  );
}
