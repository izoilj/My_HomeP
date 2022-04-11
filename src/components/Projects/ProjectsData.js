import pm1 from '../../assets/images/pm/pm1.png';
import pm2 from '../../assets/images/pm/pm2.png';
import pm3 from '../../assets/images/pm/pm3.png';
import pm4 from '../../assets/images/pm/pm4.png';
import pm5 from '../../assets/images/pm/pm5.png';
import pm6 from '../../assets/images/pm/pm6.png';
import pm7 from '../../assets/images/pm/pm7.png';
import pm8 from '../../assets/images/pm/pm8.png';

import sh1 from '../../assets/images/shop/shop01.png';
import sh2 from '../../assets/images/shop/shop02.png';
import sh3 from '../../assets/images/shop/shop03.png';
import sh4 from '../../assets/images/shop/shop04.png';
import sh5 from '../../assets/images/shop/shop05.png';
import sh6 from '../../assets/images/shop/shop06.png';
import sh7 from '../../assets/images/shop/shop07.png';
import sh8 from '../../assets/images/shop/shop08.png';
import sh9 from '../../assets/images/shop/shop09.png';
import sh10 from '../../assets/images/shop/shop10.png';

import shopVideo from '../../assets/videos/shopVideo.mp4';
import pmVideo from '../../assets/videos/pmVideo.mp4';

export const ProjectsData = [
  {
    id: 'pmTool',
    title: 'Project Managrment Tools',
    desc: 'Provide a services to customer for managing the project with team',
    pImages: [pm1, pm2, pm3, pm4, pm5, pm6, pm7, pm8],
    alt: 'Project Management Web',
    skill: 'React / Styled-Component / GraphQL',
    url: 'http://capstone-pm-tools-joy.netlify.app/',
    imgStart: false,
    dark: true,
    darkBtn: false,
    primary: true,
    pVideo: pmVideo,
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Website',
    desc: 'The shopping website that allows users to purchase products registered in their cart through registration and login.',
    pImages: [sh1, sh2, sh3, sh4, sh5, sh6, sh7, sh8, sh9, sh10],
    alt: 'ecommerce',
    skill: 'React / NodeJS / Redux / MongoDB / RestAPI',
    url: '//capstone-pm-tools-joy.netlify.app/',
    imgStart: true,
    dark: false,
    darkBtn: true,
    primary: true,
    pVideo: shopVideo,
  },
];
