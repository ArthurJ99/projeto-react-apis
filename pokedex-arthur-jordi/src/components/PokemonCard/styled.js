import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 15px;
  border: 1px solid black;
  border-radius: 20px;
  width: 440px;
  height: 210px;
  position: relative;

  .card-footer {
    display: flex;
    justify-content: space-between;
    grid-row: 2 / span 1;
    grid-column: 1 / span 2;
    align-items: center;

    .details {
      background-color: transparent;
      border: none;
      cursor: pointer;
      p {
        text-decoration: underline;
        background-color: transparent;
        border: none;
        color: white;
        font-weight: 700;
        font-size: 16px;
      }
    }
    .capture {
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      border: none;
      width: 166px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: absolute;
      left: 280px;
      z-index: 3;
    }

    .remove {
      color: white;
      padding: 20px;
      background-color: #ff6262;
      border-radius: 8px;
      border: none;
      width: 166px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      position: absolute;
      left: 280px;
      z-index: 3;
    }
  }

  .pokemon-section {
    display: flex;

    .pokemon-id {
      margin-bottom: 3px;
      color: white;
      font-weight: 700;
    }

    .pokemon-name {
      margin-top: 0;
      margin-bottom: 20px;
      color: white;
      font-size: 32px;
      font-weight: 700;
    }
  }

  .pokemon-sprite-front {
    display: flex;
    align-items: center;
    justify-content: center;

    .background-card {
      width: 300px;
      height: 310.73px;
      position: absolute;
      left: 210px;
      top: -60px;
      z-index: auto;
    }

    img {
      width: 200px;
      position: absolute;
      top: -40px;
      left: 260px;
    }
  }
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Inter";

  .pokemon-type {
    display: flex;
    gap: 5px;
  }
`;
