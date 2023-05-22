import React, { useEffect } from "react";
import { Container } from "./styled";
import Logo from "../../assets/pokemon-logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { usePokemons } from "../../context/global";

export default function Header({ pokemon }) {
  const { selectedPokemons, setSelectedPokemons } = usePokemons();
  const navigate = useNavigate();
  const location = useLocation();
  const isInPokedex = () => {
    return selectedPokemons.some(
      (selectedPokemon) => selectedPokemon.id === pokemon?.id
    );
  };

  return (
    <Container>
      {location.pathname !== "/" && (
        <button className="home-button" onClick={() => navigate("/")}>
          {"<"} Todos os Pokémon
        </button>
      )}
      <img src={Logo} className="logo" alt="logo" />
      {location.pathname === "/" && (
        <button onClick={() => navigate("/pokedex")} className="pokedex-button">
          Pokédex
        </button>
      )}
      {location.pathname.includes("/details") &&
        (isInPokedex() ? (
          <button
            onClick={() =>
              setSelectedPokemons((prev) =>
                prev.filter(
                  (selectedPokemon) => selectedPokemon.id !== pokemon.id
                )
              )
            }
            className="remove-pokedex"
          >
            excluir da pokédex
          </button>
        ) : (
          <button
            onClick={() => setSelectedPokemons((prev) => [...prev, pokemon])}
            className="pokedex-button"
          >
            Adicionar á pokédex
          </button>
        ))}
    </Container>
  );
}
