import styled from 'styled-components';
import { Link } from 'react-scroll';

export const BasicButton = styled(Link)`
  background: ${({ primary }) => (primary ? '#955eff' : '#ddcbff')};
  background-size: 400%;
  padding: ${({ big }) => (big ? '14px 32px' : '12px 20px')};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '14px')};
  border-radius: ${({ round }) => (round ? '25px' : 'none')};
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: ${({ fontWeight }) => (fontWeight ? '600' : '400')};
  box-shadow: 0 3px 5px 2px #a5a5a5;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#ddcbff' : '#955eff')};
    color: ${({ dark }) => (dark ? '#000' : '#fff')};
  }
`;
