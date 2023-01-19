import styled from 'styled-components';
import { device, variables } from '../../globalStyle';

interface IAvail {
  avail: number;
}

export const CartControllerContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

export const AvailContainer = styled.h5<IAvail>`
  padding: 0.8rem 0;
  color: ${(props) => (props.avail > 10 ? variables.green : variables.red)};
  margin: 0;
`;

export const ItemControlContainer = styled.div`
  border: solid 0.1rem ${variables.gray};
  padding: 0.8rem;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3rem;
  max-width: max-content;
  align-items: center;
  span {
  }
  svg {
    width: 1rem;
    height: 1rem;
    fill: ${variables.gray};
    cursor: pointer;
  }
`;

export const CartButtonContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: ${device.tablet}) {
    width: 60%;
  }
`;
