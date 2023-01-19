import styled from 'styled-components';
import { boxShadow, variables } from '../../globalStyle';

interface IButton {
  myColor?: 'black' | 'green' | 'red';
}

const buttonColor = (c: string | undefined) => {
  switch (c) {
    case 'black':
      return variables.black;
    case 'red':
      return variables.red;
    case 'green':
      return variables.green;

    default:
      return variables.black;
  }
};

export const ButtonComponent = styled.button<IButton>`
  background-color: ${(props) => buttonColor(props.myColor)};
  padding: 1rem;
  color: ${variables.white};
  border: none;
  outline: none;
  display: block;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    filter: drop-shadow(${boxShadow(variables.black)});
  }
`;
