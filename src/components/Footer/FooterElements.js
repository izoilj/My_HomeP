import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background: #955eff;
`;

export const FooterWrap = styled.div`
  /* padding: 48px 24px; */
  padding: 1.5rem calc((100vw - 1100px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 868px) {
    padding-top: 32px;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  /* margin-bottom: 3rem; */
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  color: #7c7785;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  /* margin: 40px auto 0 auto; */

  @media screen and (max-width: 868px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.div`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.div`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-2px);
  }
`;
