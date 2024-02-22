import styled from "styled-components";
import { theme } from "../../theme";

export const MusicContainer = styled.div<{ isLibrary: boolean }>`
  height: 100vh;
  width: ${(props) =>
    props.isLibrary
      ? `${theme.libraryOpenWidth}px`
      : `${theme.libraryCloseWidth}px`};
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-left: ${(props) =>
    props.isLibrary ? `${theme.libraryOpenML}px` : `${theme.libraryCloseML}px`};
`;

export const Nav = styled.header`
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const ButtonLibrary = styled.button`
  font-size: 1rem;
  font-weight: lighter;
  border: 2px solid black;
  background-color: white;
  padding: 4px 8px;
  position: absolute;
  right: 650px;
  top: 30px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #343a40;
    color: white;
    border: 2px solid #343a40;
  }
`;

export const Img = styled.img<{ isLibrary: boolean }>`
  height: ${(props) =>
    props.isLibrary
      ? `${theme.libraryOpenImg}rem`
      : `${theme.libraryCloseImg}rem`};
  border-radius: 100rem;
  margin-bottom: 3rem;
`;

export const SongContainer = styled.div`
  margin-bottom: 1rem;
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
export const InputContainer = styled.div<{ isLibrary: boolean }>`
  display: flex;
  width: ${(props) =>
    props.isLibrary
      ? `${theme.libraryOpenInput}px`
      : `${theme.libraryCloseInput}px`};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
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
