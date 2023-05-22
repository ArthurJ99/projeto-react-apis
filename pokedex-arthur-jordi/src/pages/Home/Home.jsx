import { useEffect, useState } from "react";
import { api } from "../../services/api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { Container } from "./styled";
import Header from "../../components/Header/Header";
import { usePokemons } from "../../context/global";
import ReactModal from "react-modal";
import Capture from "../../assets/capture-alert.png";

function Home() {
  const { selectedPokemons } = usePokemons();
  const [pokemons, setPokemons] = useState([]);
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

  useEffect(() => {
    api.get("pokemon").then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

  return (
    <>
      <Header />
      {pokemons && (
        <Container>
          <div className="pokemon-list">
            {pokemons.length > 0 &&
              pokemons
                .filter(
                  (pokemon) =>
                    !selectedPokemons.some(
                      (selectedPokemon) => selectedPokemon.name === pokemon.name
                    )
                )
                .map((pokemon) => {
                  return (
                    <PokemonCard
                      key={`Home-${pokemon.name}`}
                      pokemon={pokemon}
                      setModalIsOpen={setModalIsOpen}
                    />
                  );
                })}
          </div>
        </Container>
      )}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src={Capture} alt="Aviso captura" />
      </ReactModal>
    </>
  );
}

export default Home;
