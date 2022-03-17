import styled from 'styled-components';
import { Link } from 'react-scroll';

export const ColorButton = styled(Link)`
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  font-size: 20px;
  border-radius: ${({ round }) => (round ? '25px' : 'none')};
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  min-width: 100px;

  &:hover {
    color: ${({ dark }) => (dark ? '#000' : '#fff')};
    animation: animate 6s linear infinite;
    box-shadow: 0px 0px 15px 10px rgba(116, 79, 168, 0.75);
  }

  @keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
`;
