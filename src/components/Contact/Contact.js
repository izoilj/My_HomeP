import React from 'react';
import Mail from '../../assets/images/mail.svg';
import {
  ContactContainer,
  EmailImg,
  ContactHeading,
  ContactContent,
  FormWrap,
} from './ContactElements';
import { BasicButton } from '../BasicButton';

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <EmailImg src={Mail} />
      <ContactHeading>Contact</ContactHeading>
      <ContactContent>
        <form action='#'>
          <FormWrap>
            <label htmlFor='email'>
              <input type='text' placeholder='Enter Name' id='name' />
              <input type='email' placeholder='Enter Email' id='email' />
              <textarea
                placeholder='Your Message'
                id='msg'
                rows='8'
                // cols='75'
              />
            </label>
            <BasicButton
              as='button'
              type='submit'
              primary='true'
              round='true'
              dark='false'
              fontWeight='true'
              css={`
                height: 48px;

                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }

                @media screen and (max-width: 400px) {
                  width: 100%;
                  min-width: 250px;
                }
              `}
            >
              SEND
            </BasicButton>
          </FormWrap>
        </form>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
