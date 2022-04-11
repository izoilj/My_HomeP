import styled from 'styled-components';
// import Project from './Project';

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
`;

export const ProjectP = styled.p`
  font-size: clamp(0.5rem, 3vw, 1.5rem);
  color: #8a2be2;
  margin-bottom: 7rem;
`;

export const ProjectsWrapper = styled.div`
  padding: 0 2rem;
  margin-bottom: 3rem;
  z-index: 3;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90rem;
  height: 65rem;
  /* width: 100%;
  height: 100%; */
  min-width: 280px;
  margin-bottom: 7rem;
  box-shadow: 0 3px 5px 2px #a5a5a5;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }

  @media screen and (max-width: 1480px) {
    margin-bottom: 5rem;
    width: 70rem;
    height: 50rem;
  }

  @media screen and (max-width: 1160px) {
    width: 50rem;
    height: 35rem;
  }

  @media screen and (max-width: 868px) {
    width: 35rem;
    height: 25rem;
  }

  @media screen and (max-width: 600px) {
    width: 28rem;
    height: 22rem;
  }

  @media screen and (max-width: 400px) {
    width: 18rem;
    height: 15rem;
  }
`;

export const ImgContainer = styled.div`
  /* width: 70rem; */
  /* height: 30rem; */
  width: 100%;
  height: 100%;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProjectDetails = styled.div`
  width: 100%;
  height: 25rem;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #d5d1db;
  text-align: center;
  padding: clamp(0.7rem, 3vw, 1.2rem);

  h2 {
    /* font-size: 32px; */
    font-size: clamp(0.8rem, 3vw, 2rem);
  }

  span {
    /* font-size: 18px; */
    font-size: clamp(0.7rem, 3vw, 1.2rem);
    padding: clamp(0.7rem, 3vw, 1.2rem);
  }

  p {
    font-size: clamp(0.6rem, 3vw, 1rem);
  }

  @media screen and (max-width: 1160px) {
    height: 15rem;
  }

  @media screen and (max-width: 868px) {
    height: 12rem;
  }
`;
