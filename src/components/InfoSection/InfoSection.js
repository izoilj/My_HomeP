import React from 'react';
// import { Button } from "react-scroll";
// import { Button } from '../ButtonElements';
import ImgAbout from '../../assets/images/svg-02.svg';

import {
  InfoHeader,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  SubTitle,
  TextWrapper,
  TopLine,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  summary,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          {id === 'about' && (
            <InfoHeader lightText={lightText}>{summary}</InfoHeader>
          )}
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                {id === 'about' && <Img src={ImgAbout} alt='AboutMe' />}
                {id === 'myWorks' && <Img src={ImgAbout} alt='AboutMe' />}
                {id === 'contact' && <Img src={ImgAbout} alt='AboutMe' />}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
