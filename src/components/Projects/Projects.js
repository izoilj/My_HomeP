import React from 'react';
import { ProjectsData } from './ProjectsData';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsImg,
  ProjectsInfo,
  ProjectsText,
  ViewButton,
} from './ProjectsElements';

const Projects = () => {
  return (
    <>
      <ProjectsContainer id='projects'>
        <ProjectsH1>MY WORKS</ProjectsH1>
        <ProjectsWrapper>
          {ProjectsData.map((item, index) => (
            <ProjectsCard
              key={index}
              imgStart={item.imgStart}
              dark={item.dark}
              round='true'
            >
              <ProjectsImg src={item.img} alt={item.alt} />
              <ProjectsInfo dark={item.dark}>
                <ProjectsText inSide={item.inSide}>
                  <h2>{item.title}</h2>
                  <span>{item.desc}</span>
                  <p>{item.skill}</p>
                  <ViewButton>VIEW MORE</ViewButton>
                </ProjectsText>
              </ProjectsInfo>
            </ProjectsCard>
          ))}
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
