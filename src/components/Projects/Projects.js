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
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
