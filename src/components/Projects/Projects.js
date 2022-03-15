import { React, useState } from 'react';
import { ProjectsData } from './ProjectsData';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectP,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsImg,
  ProjectsInfo,
  ProjectsText,
  ViewButton,
  OpenIcon,
} from './ProjectsElements';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // background: 'transparemt',
  },
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ProjectsContainer id='projects'>
        <ProjectsH1>MY PROJECTS</ProjectsH1>
        <ProjectP>Somthing I have built</ProjectP>
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
                  <ViewButton onClick={openModal}>VIEW DETAILS</ViewButton>

                  {/* Modal Start */}
                  <Modal isOpen={isModalOpen} style={customStyles}>
                    <ViewButton onClick={closeModal}>X</ViewButton>
                    <ProjectsImg src={item.img} alt={item.alt} />
                    <h2>{item.title}</h2>
                    <span>{item.desc}</span>
                    <ViewButton onClick={() => window.open(item.url, '_blank')}>
                      VIEW SITE <OpenIcon />
                    </ViewButton>
                  </Modal>
                  {/* Modal Finish */}
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
