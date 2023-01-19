import styled from 'styled-components';
import { boxShadow, variables } from '../../globalStyle';

export const NavBarContainer = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartLogo = styled.h3`
  font-weight: lighter;
`;

export const CartBasketContainer = styled.div`
  position: relative;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: ${variables.darkGray};
  }
`;

export const CartAmount = styled.span`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.3rem;
  position: absolute;
  background-color: ${variables.white};
  top: 0;
  right: 0;
  box-shadow: ${boxShadow(variables.darkGray)};
  text-align: center;
`;
