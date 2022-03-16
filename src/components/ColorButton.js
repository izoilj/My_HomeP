import styled from 'styled-components';
import { Link } from 'react-scroll';

export const ColorButton = styled(Link)`
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '14px')};
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
  }

  &:before {
    content: '';
    position: absolute;
    top: 225px;
    left: 310px;
    right: 310px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 25px;
    filter: blur(20px);
    opacity: 0;
    transition: 0.3s;
  }

  &:hover:before {
    filter: blur(10px);
    opacity: 1;
    animation: animate 6s linear infinite;
  }

  @keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
`;
