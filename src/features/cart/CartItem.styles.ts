import styled from 'styled-components';
import { device, variables } from '../../globalStyle';

type ColorType = {
  colorprop: string;
};

export const CartItemContainer = styled.article`
  display: grid;

  grid-template-rows: 1fr auto;
  padding: 1rem 0;
  border-bottom: solid 0.05rem ${variables.gray};
  grid-column-gap: 1rem;
`;

export const CartItemItems = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  padding: 1rem 0;

  @media screen and (min-width: ${device.tablet}) {
    grid-template-columns: 20% 1fr;
  }
`;

export const CartDescriptionContainer = styled.div`
  justify-self: flex-start;
  text-align: start;
  display: grid;
  grid-row-gap: 0.5rem;
`;

export const TitleAndPriceContainer = styled.div`
  h4 {
    color: ${variables.gray};

    text-transform: uppercase;
  }

  h5 {
  }
`;

export const ColorContainer = styled.div``;

export const Colors = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 1rem 0;
`;

export const Color = styled.div<ColorType>`
  background-color: ${(props) => props.colorprop};
  cursor: pointer;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  transition: all 0.3s linear;

  &:hover {
    filter: brightness(60%);
  }
`;

export const ColorDescription = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  padding: 0;
  margin: 0;
  span {
    color: ${variables.gray};
    text-transform: capitalize;
    font-weight: lighter;
  }
`;

export const CartImageContainer = styled.div`
  padding: 0;
  margin: 0;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;
