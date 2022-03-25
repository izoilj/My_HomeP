import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem calc((100vw - 1300px) / 2);
`;

export const AboutHeading = styled.div`
  text-align: center;
  font-size: clamp(1.2rem, 5vw, 3rem);
  font-weight: 600;
`;

export const AboutP = styled.p`
  font-size: clamp(0.5rem, 3vw, 1.5rem);
  color: #8a2be2;
  margin-bottom: 7rem;
`;

export const AboutOne = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  justify-items: center;
  padding: 0 2rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutPersonality = styled.div`
  text-align: center;
  color: #000;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`;

export const Description = styled.p``;

export const AboutTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 3rem;

  /* @media screen and (max-width: 1200px) {
    height: 20rem;
    margin-bottom: 7rem;
  } */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutImg = styled.img`
  height: 22rem;

  @media screen and (max-width: 1200px) {
    height: 20rem;
  }

  @media screen and (max-width: 1000px) {
    height: 15rem;
    margin-bottom: 7rem;
  }

  @media screen and (max-width: 500px) {
    height: 13rem;
    margin-bottom: 7rem;
  }
`;

export const AboutSkills = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  align-items: center;
  justify-items: center;
  font-size: 1.3rem;

  /* @media screen and (max-width: 1000px) {
    margin-left: 10rem;
  } */
`;

export const Aboutlists = styled.li`
  width: 100%;
  /* list-style: square; */
  padding: 0.5rem 2rem;
  /* border-bottom: 1px solid #8a2be2; */
  list-style: none;

  &::before {
    content: '»';
    color: #8a2be2;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

// ul li::before {
//   color: red;
// }
