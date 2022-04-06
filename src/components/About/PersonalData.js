import React from 'react';
import { MdSpeed } from 'react-icons/md';
import { GiOrbDirection } from 'react-icons/gi';
import { GoRocket } from 'react-icons/go';
import { BsWindowSidebar } from 'react-icons/bs';

export const PersonalData = [
  {
    icon: <MdSpeed />,
    title: 'Fast',
    desc: 'Fast load times and lag free interaction, my highest priority.',
  },
  {
    icon: <BsWindowSidebar />,
    title: 'Responsive',
    desc: 'My layouts will work on any device, big or small.',
  },
  {
    icon: <GiOrbDirection />,
    title: 'Intuitive',
    desc: 'Strong preference for easy to use, intuitive UX/UI.',
  },
  {
    icon: <GoRocket />,
    title: 'Dynamic',
    desc: 'Websites do not have to be static, I love making pages come to life.',
  },
];
