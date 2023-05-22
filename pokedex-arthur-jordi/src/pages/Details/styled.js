import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #5e5e5e;
  padding-top: 20px;
  align-items: center;

  h1 {
    align-self: flex-start;
    margin-left: 50px;
    font-size: 48px;
    font-weight: 700;
    color: white;
    margin-bottom: 40px;
  }

  section {
    background-color: lightcoral;
    padding: 30px;
    width: 1389px;
    height: 663px;
    border-radius: 37.8px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .background-image {
      position: absolute;
      height: 105%;
      width: 50%;
      left: 847px;
      top: 166px;
    }

    .sprite-details {
      width: 248px;
      height: 273px;
      background-color: white;
      border: none;
      border-radius: 8px;
      margin: 20px;
    }

    .stats-container {
      background-color: white;
      padding: 20px;
      width: 450px;
      height: 613px;
      border-radius: 12px;

      h3 {
        padding-bottom: 20px;
      }

      .stats-bar {
        border-radius: 12px;
        width: 200px;
        background-color: #696969;
        height: 18px;

        div {
          background: linear-gradient(to right, #ff0000, #ff9999);
          color: red;
          height: 100%;
          border-radius: 12px;
        }
      }

      span {
        max-width: 82px;
        margin-right: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }

    li {
      display: flex;
    }

    .pokemon-details {
      padding-left: 50px;
      p {
        color: white;
        font-family: "Inter";
        font-size: 48px;
        font-weight: 700;
      }

      .pokemon-type {
        display: flex;
        gap: 5px;
        width: 91px;

        img {
          width: 100%;
          height: 31px;
        }
      }
    }

    .moves-container {
      background-color: white;
      height: 465px;
      width: 292px;
      border-radius: 8px;
      padding-left: 15px;
      padding-top: 20px;
      margin-top: 20px;
    }

    ul {
      font-size: 14px;
      font-weight: 400;
      margin-top: 15px;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        background-color: #ececec;
        padding: 10px;
        width: 130px;
        border-radius: 12px;
      }
    }

    h3 {
      font-family: "Inter";
      font-size: 24px;
      font-weight: 800;
    }

    img {
      width: 270px;
      height: 270px;
    }
  }
`;
