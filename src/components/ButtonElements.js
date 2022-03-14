import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  /* background: ${({ primary }) => (primary ? '#7aa920' : '#dcff9a')}; */
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  /* line-height: 60px; */
  background-size: 400%;
  padding: ${({ big }) => (big ? '18px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '14px')};
  border-radius: ${({ round }) => (round ? '20px' : 'none')};
  white-space: nowrap;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  min-width: 100px;
  /* padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')}; */

  &:hover {
  /* background: ${({ primary }) => (primary ? '#7aa920' : '#dcff9a')}; */
    color: ${({ dark }) => (dark ? '#000' : '#fff')};
    /* transform: translateY(-2px); */
    /* transition: all 0.3s ease-in-out; */
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
    border-radius: 999px;
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
