import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
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
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
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
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
