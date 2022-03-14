import React from 'react';
import { BasicButton } from '../BasicButton';
import { ProjectsData } from './ProjectsData';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsImg,
  ProjectsInfo,
} from './ProjectsElements';

const PeojectsSection = () => {
  return (
    <>
      <ProjectsContainer id='projects'>
        <ProjectsH1>MY WORKS</ProjectsH1>
        <ProjectsWrapper>
          {ProjectsData.map((item, index) => (
            <ProjectsCard key={index}>
              <ProjectsImg src={item.img} alt={item.alt} />
              <ProjectsInfo>
                <h2>{item.title}</h2>
                <span>{item.desc}</span>
                <p>{item.skill}</p>
                <BasicButton primary='true' dark='true'>
                  VIEW MORE
                </BasicButton>
              </ProjectsInfo>
            </ProjectsCard>
          ))}
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default PeojectsSection;
