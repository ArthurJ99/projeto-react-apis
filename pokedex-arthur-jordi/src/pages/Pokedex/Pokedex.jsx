import React, { useState } from "react";
import { Container } from "./styled";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { usePokemons } from "../../context/global";
import ReactModal from "react-modal";
import Delete from "../../assets/delet-alert.png";

export default function Pokedex() {
  const { selectedPokemons } = usePokemons();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  ReactModal.setAppElement('#root')


  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <Header setModalIsOpen={setModalIsOpen}/>
      <Container>
        <div className="pokemon-list">
          {selectedPokemons.length > 0 &&
            selectedPokemons.map((pokemon) => {
              return (
                <PokemonCard
                  key={`pokedex-${pokemon.id}`}
                  pokemon={pokemon}
                  setModalIsOpen={setModalIsOpen}
                />
              );
            })}
        </div>
      </Container>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src={Delete} alt="Aviso remoção" />
      </ReactModal>
    </>
  );
}
