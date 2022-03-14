import React from 'react';
import { ColorButton } from '../ColorButton';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements';
import Video from '../../assets/videos/video3.mp4';

const Hero = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Hello, I am <span>Juyoung Lee</span>.
        </HeroH1>
        <HeroP>
          I'm a <span>Web Developer</span>.
        </HeroP>
        <HeroBtnWrapper>
          <ColorButton
            to='projects'
            exact='true'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            primary='true'
            dark='true'
            round='true'
            fontBig='true'
          >
            VIEW PROJECTS
          </ColorButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
