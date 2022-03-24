import styled from 'styled-components';
import { MdOpenInNew } from 'react-icons/md';

export const ProjectsContainer = styled.div`
  width: 100%;
  padding: 7rem calc((100vw - 1300px) / 2);
  background: #ebe0ff;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectsH1 = styled.h1`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  color: #000;
  /* margin-bottom: 7rem; */
`;

export const ProjectP = styled.p`
  font-size: clamp(0.5rem, 3vw, 1.5rem);
  color: #8a2be2;
  margin-bottom: 7rem;
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

export const ProjectsCard = styled.div`
  border-radius: ${({ round }) => (round ? '50px' : 'none')};
  background: ${({ dark }) => (dark ? '#ddcbff' : '#fff')};
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin-bottom: 7rem;
  filter: grayscale(80%);
  box-shadow: 0 3px 5px 2px #a5a5a5;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
    /* transition: 0.2s; */
    color: #000;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1 col1" "col2 col2"` : `"col1 col1" "col2 col2"`};
    height: 30%;
    margin-bottom: 10rem;

    &:hover {
      filter: grayscale(0%);
      transform: scale(1.01);
      transition: 0.2s;
      color: #000;
    }
  }
`;

export const ProjectsImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  position: relative;
  grid-area: col1;
  box-shadow: 0 3px 5px 2px #a5a5a5;
  /* z-index: 100; */

  @media screen and (max-width: 820px) {
    margin-bottom: 3rem;
  }
`;

export const ProjectsInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
  z-index: 10;
  grid-area: col2;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  span {
    margin-bottom: 3rem;
  }

  p {
    color: #955eff;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 820px) {
    background: ${({ dark }) => (dark ? '#ddcbff' : '#fff')};
    padding: 1.5rem;
    box-shadow: 0 3px 5px 2px #a5a5a5;
    border-radius: 30px;
  }

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

export const ProjectsText = styled.div`
  width: 100%;
  height: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const DetaileButton = styled.button`
  background: #955eff;
  color: #fff;
  padding: 0.7rem 1rem;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    font-weight: 600;
    background: #8a2be2;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  /* height: 90%; */
  max-width: 100%;
  object-fit: contain;

  @media screen and (max-width: 820px) {
    margin-bottom: 3rem;
  }
`;

export const ModalInfo = styled.div`
  padding: 0.5rem 2rem;

  /* span {
    margin-top: 5rem;
  } */
`;

export const OpenIcon = styled(MdOpenInNew)`
  font-size: 1rem;
  margin-left: 0.5rem;
`;

export const CloseButton = styled.button`
  background: #955eff;
  width: 100%;
  height: 2rem;
  text-align: right;
  color: #fff;
  outline: none;
  border: none;
  padding-right: 1rem;
  cursor: pointer;
  float: right;
  font-size: 18px;

  &:hover {
    font-weight: 600;
    color: #ccc;
  }
`;

export const ModalTopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ViewButton = styled.button`
  background: #955eff;
  color: #fff;
  padding: 0.7rem 1rem;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    font-weight: 600;
    background: #8a2be2;
  }
`;
