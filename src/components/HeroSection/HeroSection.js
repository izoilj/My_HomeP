import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroSectionElements';
import Video from '../../assets/videos/video3.mp4';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

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
          <Button
            to='myWorks'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            round='true'
            fontBig='true'
            // big='true'
            css={`
              height: 100px;

              @media screen and (max-width: 768px) {
                width: 100%;
                min-width: 200px;
              }

              @media screen and (max-width: 400px) {
                width: 100%;
                min-width: 100px;
              }
            `}
          >
            VIEW PROJECTS
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
