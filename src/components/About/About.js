import React from 'react';
import { PersonalData } from './PersonalData';
import SkillImg from '../../assets/images/skillImg-4.svg';
import {
  AboutContainer,
  AboutHeading,
  AboutImg,
  AboutOne,
  AboutPersonality,
  AboutSkill,
  AboutTwo,
  Description,
  Icon,
  Title,
} from './AboutElements';

const About = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutHeading>About</AboutHeading>
        <AboutOne>
          {PersonalData.map((item, index) => (
            <AboutPersonality key={index}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </AboutPersonality>
          ))}
        </AboutOne>
        <AboutTwo>
          <AboutImg src={SkillImg} />
          <AboutSkill src={SkillImg} />
          {/* <AboutSkill>skill chart</AboutSkill> */}
        </AboutTwo>
      </AboutContainer>
    </>
  );
};

export default About;
