import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Container } from "./styled";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { types } from "../../utils/pokemon-types";

export default function Details() {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const handleStatText = (status) => {
    if (status.stat.name === "special-attack") {
      return status.stat.name.replace("special-attack", "Sp.Att");
    }
    if (status.stat.name === "special-defense") {
      return status.stat.name.replace("special-defense", "Sp.Def");
    }
    return status.stat.name;
  };

  useEffect(() => {
    api.get(`pokemon/${id}`).then((response) => setPokemon(response.data));
  }, [id]);
  return (
    <>
      {pokemon && (
        <>
          <Header pokemon={pokemon} />
          <Container>
            <h1>Detalhes</h1>
            <section
              style={{
                backgroundColor: types[pokemon.types[0].type.name].color,
              }}
            >
              <div className="sprites-container">
                <img
                  src={pokemon.sprites.front_default}
                  alt="pokemon front"
                  className="sprite-details"
                />
                <img
                  src={pokemon.sprites.back_default}
                  alt="pokemon back"
                  className="sprite-details"
                />
              </div>
              <div className="stats-container">
                <h3>Base stats</h3>
                {pokemon.stats.map((status) => (
                  <li>
                    <span>{handleStatText(status)}</span>
                    <span>{status.base_stat}</span>
                    <div
                      className="stats-bar"
                    >
                      <div style={{
                        width: `${status.base_stat}%`
                      }}></div>
                    </div>
                  </li>
                ))}
              </div>
              <div className="pokemon-details">
                <p>#{pokemon.id}</p>
                <p>#{pokemon.name}</p>
                <div className="pokemon-type">
                  {pokemon.types.map((item) => {
                    return <img src={types[item.type.name].img} alt="tipo" />;
                  })}
                </div>
                <div className="moves-container">
                  <h3>Moves</h3>
                  <ul>
                    {pokemon.moves.slice(0, 4).map((item) => (
                      <li>{item.move.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt="pokemon"
                />
              </div>
            </section>
          </Container>
        </>
      )}
    </>
  );
}
