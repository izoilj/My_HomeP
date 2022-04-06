import { React } from 'react';
// import { React, useState, useRef } from 'react';
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
// import SimpleImageSlider from 'react-simple-image-slider';
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     // background: 'transparemt',
//     width: '40%',
//     height: '60%',
//     padding: '0',
//   },
// };

const Projects = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const slide = useRef();

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const [slideIndex, setSlideIndex] = useState(0);
  // const handleClick = (direction) => {
  //   if (direction === "left") {
  //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  //   } else {
  //     setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  //   }
  // };

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
              <ProjectsImg
                src={item?.img}
                alt={item?.alt}
                // onClick={openModal}
              />

              <ProjectsInfo dark={item.dark}>
                <ProjectsText inSide={item.inSide}>
                  <h2>{item?.title}</h2>
                  <span>{item?.desc}</span>
                  <p>{item?.skill}</p>
                  <ViewButton onClick={() => window.open(item.url, '_blank')}>
                    VIEW SITE <OpenIcon />
                  </ViewButton>
                </ProjectsText>
              </ProjectsInfo>
              {/* <Modal isOpen={isModalOpen} style={customStyles} ref={slide}>
                <SimpleImageSlider
                  width={'100%'}
                  height={504}
                  images={item.pImages}
                  showBullets={true}
                  showNavs={true}
                />
              </Modal> */}
            </ProjectsCard>
          ))}
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
