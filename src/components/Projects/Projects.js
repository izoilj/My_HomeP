import { React } from 'react';
import { ProjectsData } from './ProjectsData';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectP,
  ProjectsWrapper,
  ItemWrapper,
  ImgContainer,
  ProjectDetails,
} from './ProjectsElements';
import SimpleImageSlider from 'react-simple-image-slider';
// import { css } from 'styled-components';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>MY PROJECTS</ProjectsH1>
      <ProjectP>Somthing I have built</ProjectP>
      <ProjectsWrapper>
        {ProjectsData?.map((item, index) => (
          <ItemWrapper key={index}>
            <ImgContainer>
              <SimpleImageSlider
                // width={'60vw'}
                // height={'60vh'}
                width={'100%'}
                height={'100%'}
                images={item.pImages}
                showBullets={true}
                showNavs={true}
                navStyle={2}
                navMargin={10}
                // css={`
                //   @media screen and (max-width: 768px) {
                //     width: 30vw;
                //     height: 30vh;
                //     min-width: 350px;
                //   }
                //   @media screen and (max-width: 400px) {
                //     width: 100%;
                //     min-width: 250px;
                //   }
                // `}
              />
            </ImgContainer>
            <ProjectDetails>
              <h2>{item?.title}</h2>
              <span>{item?.desc}</span>
              <p>{item?.skill}</p>
            </ProjectDetails>
          </ItemWrapper>
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
