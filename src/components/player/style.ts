import styled from "styled-components";

export const MusicContainer = styled.div`
  height: 100vh;
  width: 1200px;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Nav = styled.header`
  margin-top: 2rem;
  margin-bottom: 5rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Img = styled.img`
  height: 15rem;
  border-radius: 10rem;
  margin-bottom: 3rem;
`;

export const SongContainer = styled.div`
  margin-bottom: 6rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    color: #495057;
    font-weight: 400;
  }
`;

export const PlayerContainer = styled.div``;
export const InputContainer = styled.div`
  display: flex;
  width: 600px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6rem;
  input {
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    background-color: #dee2e6;
    border-radius: 10px;
    height: 1rem;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    cursor: pointer;
  }
  ion-icon {
    font-size: 2.4rem;
  }
`;
