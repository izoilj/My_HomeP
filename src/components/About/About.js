import React from 'react';
import { PersonalData } from './PersonalData';
import { SkillData } from './SkillData';
import SkillImg from '../../assets/images/skillImg-1.svg';
import {
  AboutContainer,
  AboutHeading,
  AboutP,
  AboutImg,
  AboutOne,
  AboutPersonality,
  AboutSkills,
  AboutTwo,
  Description,
  Icon,
  Title,
  Aboutlists,
} from './AboutElements';

const About = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutHeading>ABOUT</AboutHeading>
        <AboutP>Who am I?</AboutP>
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
          <AboutSkills>
            {SkillData.map((skill, key) => (
              <Aboutlists key={key}>{skill.name}</Aboutlists>
            ))}
          </AboutSkills>
        </AboutTwo>
      </AboutContainer>
    </>
  );
};

export default About;
