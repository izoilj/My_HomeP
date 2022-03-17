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
  DetaileButton,
  ViewButton,
  OpenIcon,
  CloseButton,
  ModalImg,
  ModalTopLine,
  ModalInfo,
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
    border: '1px solid #ccc',
    width: '40%',
    height: '60%',
    padding: '0',
    // backgroundColor: 'rgba(0, 0, 0, 0.75)',
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
          {ProjectsData?.map((item, index) => (
            <ProjectsCard
              key={index}
              imgStart={item.imgStart}
              dark={item.dark}
              round='true'
            >
              <ProjectsImg src={item?.img} alt={item?.alt} />
              <ProjectsInfo dark={item.dark}>
                <ProjectsText inSide={item.inSide}>
                  <h2>{item?.title}</h2>
                  <span>{item?.desc}</span>
                  <p>{item?.skill}</p>
                  <DetaileButton onClick={openModal}>
                    VIEW DETAILS
                  </DetaileButton>

                  {/* Modal Start */}
                  <Modal isOpen={isModalOpen} style={customStyles}>
                    <CloseButton onClick={closeModal}>X</CloseButton>
                    <ModalImg src={item.img} alt={item.alt} />
                    <ModalInfo>
                      <ModalTopLine>
                        <h2>{item.title}</h2>
                        <ViewButton
                          onClick={() => window.open(item.url, '_blank')}
                        >
                          VIEW SITE <OpenIcon />
                        </ViewButton>
                      </ModalTopLine>
                      <span>{item.desc}</span>
                    </ModalInfo>
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
