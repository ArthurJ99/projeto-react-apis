import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  .pokemon-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;
