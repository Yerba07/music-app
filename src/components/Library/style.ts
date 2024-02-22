import styled from "styled-components";
import { theme } from "../../theme";

export const List = styled.div<{ isLibrary: boolean }>`
  display: flex;
  flex-direction: column;
  width: 330px;
  position: absolute;
  top: 0px;
  left: ${(props) =>
    props.isLibrary ? `${theme.libraryOpen}px` : `${theme.libraryClose}px`};
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
  border-top: none;
  overflow-y: scroll;
  height: 100%;

  h2 {
    padding: 0 1rem;
    padding-top: 2rem;
    font-weight: 600;
  }
`;
export const SongContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1rem;
  transition: all 0.75s ease;
  cursor: pointer;
  h3 {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
  &:last-child {
    padding-bottom: 1rem;
  }
  &:hover {
    background-color: #dbe4ff;
  }
`;
export const Image = styled.img`
  height: 4.5rem;
`;
