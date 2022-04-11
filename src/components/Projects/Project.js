import { React } from 'react';
import styled from 'styled-components';
import SimpleImageSlider from 'react-simple-image-slider';

const Container = styled.div`
  margin-bottom: 7rem;
  box-shadow: 0 3px 5px 2px #a5a5a5;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
    zoom: 105%;
  }

  @media screen and (max-width: 868px) {
    margin-bottom: 5rem;
  }
`;
/* transform: scale(1.05); */
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28rem;
  width: 100%;

  @media screen and (max-width: 868px) {
    display: block;
    margin-bottom: 5rem;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  min-width: 280px;
  width: 100rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProjectDetails = styled.div`
  flex: 1;
  width: 10rem;
  height: 100%;
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

const Project = ({ item }) => {
  return (
    <Container>
      <ItemWrapper>
        <ImgContainer>
          <SimpleImageSlider
            width={'100%'}
            height={'100%'}
            images={item.pImages}
            showBullets={true}
            showNavs={true}
            navStyle={2}
            navMargin={10}
          />
        </ImgContainer>
        <ProjectDetails>
          <h2>{item?.title}</h2>
          <span>{item?.desc}</span>
          <p>{item?.skill}</p>
        </ProjectDetails>
      </ItemWrapper>
    </Container>
  );
};

export default Project;
