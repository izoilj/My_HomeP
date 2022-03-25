// import React from 'react';
import PmImg from '../../assets/images/pm.png';
import ShopImg from '../../assets/images/p2.png';
// import SimpleImageSlider from 'react-simple-image-slider';
import pm1 from '../../assets/images/pm/pm1.png';
import pm2 from '../../assets/images/pm/pm2.png';
import pm3 from '../../assets/images/pm/pm3.png';
import pm4 from '../../assets/images/pm/pm4.png';
import pm5 from '../../assets/images/pm/pm5.png';
import pm6 from '../../assets/images/pm/pm6.png';
import pm7 from '../../assets/images/pm/pm7.png';
import pm8 from '../../assets/images/pm/pm8.png';

import ec1 from '../../assets/images/ch1.png';
import ec2 from '../../assets/images/p2.png';

const images1 = [pm1, pm2, pm3, pm4, pm5, pm6, pm7, pm8];

const images2 = [ec2, ec1];
const images3 = [pm1, pm2, pm3, pm4, pm5, pm6, pm7, pm8];

export const ProjectsData = [
  {
    id: 'pmTool',
    title: 'Project Managrment Tools',
    desc: 'Provide a services to customer for managing the project with team',
    img: PmImg,
    alt: 'Project Management Web',
    skill: 'React / Styled-Component / GraphQL',
    url: 'http://capstone-pm-tools-joy.netlify.app/',
    imgStart: false,
    dark: true,
    darkBtn: false,
    primary: true,
    // pImages: [pm1, pm2, pm3, pm4, pm5, pm6, pm7, pm8],
    pImages: images1,
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Website',
    desc: 'Provide a services to customer for managing the project with team',
    img: ShopImg,
    alt: 'ecommerce',
    skill: 'React / NodeJS / Redux / MongoDB / RestAPI',
    url: '//capstone-pm-tools-joy.netlify.app/',
    imgStart: true,
    dark: false,
    darkBtn: true,
    primary: true,
    pImages: images2,
  },
  {
    id: 'blog',
    title: 'Blog Website',
    desc: 'Made self-blog for postig my record',
    img: PmImg,
    alt: 'blog',
    skill: 'Gatsby / TypeScript / EmotionJS / GraphQL',
    url: '//capstone-pm-tools-joy.netlify.app/',
    imgStart: false,
    dark: true,
    darkBtn: false,
    primary: true,
    pImages: images3,
  },
];
