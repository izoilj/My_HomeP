import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialLogo to='/' onClick={toggleHome}>
            {/* <LogoImg src={Logo} /> */}
            JOYHOME
          </SocialLogo>
          <WebsiteRights>
            JUYOUNG LEE © {new Date().getFullYear()}
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href='//github.com/izoilj'
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href='//www.linkedin.com/in/juyoung-lee728'
              target='_blank'
              aria-label='Linkedin'
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Codepen'>
              <FaCodepen />
            </SocialIconLink>
          </SocialIcons>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
