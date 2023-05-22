import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 160px;
  background-color: white;

  .logo {
    justify-self: center;
    grid-column: 2;
  }

  .pokedex-button {
    cursor: pointer;
    background-color: #33a4f5;
    border: none;
    border-radius: 8px;
    width: 287px;
    height: 74px;
    justify-self: right;
    margin-right: 50px;
    grid-column: 3;
    color: white;
    font-weight: 700;
    font-size: 24px;
  }

  .home-button {
    background-color: transparent;
    border: none;
    text-decoration: underline;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  }

  .remove-pokedex {
    cursor: pointer;
    background-color: #ff6262;
    border: none;
    border-radius: 8px;
    width: 287px;
    height: 74px;
    justify-self: right;
    margin-right: 50px;
    grid-column: 3;
    color: white;
    font-weight: 700;
    font-size: 24px;
  }
`;
