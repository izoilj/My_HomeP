import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  padding: 7rem calc((100vw - 1300px) / 2);
  background: #ebe0ff;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* &:hover {
    color: #000;
  } */
`;

export const ProjectsH1 = styled.h1`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 7rem;
  color: #000;
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: 1fr 1fr;
  grid-gap: 35px;
  justify-items: center;
  padding: 0 2rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 400px;
  position: relative;
  /* border-radius: 10px; */
  transition: 0.2s ease;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  position: relative;
  /* border-radius: 10px; */
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`;

export const ProjectsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 200px;
  padding: 0 2rem;

  &:hover {
    h2,
    span {
      color: #000;
    }
  }

  p {
    color: #955eff;
  }

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;
