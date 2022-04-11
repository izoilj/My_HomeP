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
  height: 60rem;
  width: 100rem;
  margin-bottom: 7rem;
  box-shadow: 0 3px 5px 2px #a5a5a5;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }

  @media screen and (max-width: 868px) {
    margin-bottom: 5rem;
    height: 50rem;
    width: 10rem;
  }
`;

export const ImgContainer = styled.div`
  /* flex: 1; */
  min-width: 280px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    /* transform: scale(1.2); */
    /* zoom: 105%; */
  }
`;

export const ProjectDetails = styled.div`
  width: 100%;
  height: 35%;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #d5d1db;
  /* padding: 5rem; */

  h2 {
    font-size: 32px;
    margin-bottom: 2rem;
  }

  span {
    font-size: 18px;
    margin-bottom: 2rem;
  }

  p {
    font-size: 18px;
  }
`;
