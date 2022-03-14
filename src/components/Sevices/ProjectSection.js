import React, { useState } from 'react';
import ImgAbout from '../../assets/images/svg-01.svg';
import {
  ServicesContainer,
  ProjectCategory,
  ProjectCategoryBtn,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ProjectElements';

import { project1, project2, project3 } from './ProjectData';

const ProjectSection = () => {
  // const [projectList, setProjectList] = useState([]);

  const projects = [project1, project2, project3];

  // const viewStatus = (e) => {
  //   // this.state.breads.map(filt => {
  //       // if (filt.id === e.target.id) {
  //   const viewList = [...projects];
  //   viewList.map(pro => {
  //     if (pro.status === 'completed') {
  //       setProjectList(projects);
  //     } else if (pro.status === 'inProgress') {
  //       setProjectList(projects);
  //     }

  //     setProjectList(projects);
  //   })

  // };

  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>MY WORKS</ServicesH1>
        {/* <ProjectCategory>
          <ProjectCategoryBtn>ALL</ProjectCategoryBtn>
          <ProjectCategoryBtn>Completed</ProjectCategoryBtn>
          <ProjectCategoryBtn>In Progress</ProjectCategoryBtn>
        </ProjectCategory> */}

        <ServicesWrapper>
          {projects.map((p) => (
            <ServicesCard key={p.id}>
              <ServicesIcon src={p.img} alt={p.alt} />
              {/* <ServicesH2>{p.topLine}</ServicesH2> */}
              {/* <ServicesP>{p.description}</ServicesP> */}
            </ServicesCard>
          ))}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default ProjectSection;
