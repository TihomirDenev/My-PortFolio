import {
  DiAngularSimple,
  DiCss3,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiNodejs,
  DiReact,
} from 'react-icons/di';
import {
  SiBitbucket,
  SiChakraui,
  SiDaisyui,
  SiEslint,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGnubash,
  SiJenkins,
  SiJest,
  SiKeycloak,
  SiMicrosoftazure,
  SiPostman,
  SiReactivex,
  SiSass,
  SiTailwindcss,
  SiVisualstudiocode,
} from 'react-icons/si';
import { LuFunctionSquare } from 'react-icons/lu';
import { MdDataObject } from 'react-icons/md';
import { BiLogoTypescript } from 'react-icons/bi';

const skillData = {
  professionalSkills: [
    {
      icon: <DiJavascript1 className='text-yellow-500' />,
      title: 'JavaScript',
      description:
        'Experienced in writing clean and efficient JavaScript code for dynamic web applications.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      icon: <DiReact className='text-blue-500' />,
      title: 'React',
      description:
        'Familiar with building component-based user interfaces using React.',
      link: 'https://reactjs.org/',
    },
    {
      icon: <BiLogoTypescript className='text-blue-500' />,
      title: 'TypeScript',
      description:
        'Experienced in using TypeScript to add static typing to JavaScript, improving code quality and reducing bugs.',
      link: 'https://www.typescriptlang.org/',
    },
    {
      icon: <DiAngularSimple className='text-red-500' />,
      title: 'Angular',
      description:
        'Skilled in building scalable web applications using the Angular framework.',
      link: 'https://angular.io/',
    },
    {
      icon: <DiHtml5 className='text-orange-500' />,
      title: 'HTML',
      description:
        'Expert in crafting semantic and accessible HTML structures.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      icon: <DiCss3 className='text-blue-600' />,
      title: 'CSS',
      description:
        'Proficient in creating responsive and visually appealing designs using CSS.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      icon: <SiSass className='text-pink-500' />,
      title: 'SASS',
      description:
        'Skilled in SCSS for advanced CSS styling with variables, mixins, and nesting capabilities.',
      link: 'https://sass-lang.com/',
    },
    {
      icon: <DiNodejs className='text-green-500' />,
      title: 'NodeJS',
      description:
        'Basic knowledge of using Node.js to create server-side applications and APIs.',
      link: 'https://nodejs.org/',
    },
    {
      icon: <SiFirebase className='text-amber-500' />,
      title: 'Firebase',
      description:
        'Knowledgeable in using Firebase for real-time data storage and authentication.',
      link: 'https://firebase.google.com/',
    },
    {
      icon: <SiGnubash className='text-gray-800' />,
      title: 'Bash',
      description:
        'Basic skills in using Bash for Git commands and other version control tasks.',
      link: 'https://www.gnu.org/software/bash/',
    },
    {
      icon: <MdDataObject className='text-purple-500' />,
      title: 'OOP',
      description:
        'Skilled in applying OOP principles to create modular and reusable code structures.',
      link: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
    },
    {
      icon: <LuFunctionSquare className='text-blue-400' />,
      title: 'Functional Programming',
      description:
        'Experienced in using FP concepts to write clean and maintainable code through functions and immutability.',
      link: 'https://en.wikipedia.org/wiki/Functional_programming',
    },
    {
      icon: <SiReactivex className='text-pink-500' />,
      title: 'RxJS',
      description:
        'Proficient in using RxJS for managing asynchronous data streams in JavaScript applications.',
      link: 'https://rxjs.dev/',
    },
  ],
  tools: [
    {
      icon: <SiTailwindcss className='text-sky-400' />,
      title: 'Tailwind CSS',
      description:
        'Skilled in using Tailwind CSS to create modern and responsive web designs.',
      link: 'https://tailwindcss.com/',
    },
    {
      icon: <SiDaisyui className='text-purple-400' />,
      title: 'Daisy UI',
      description:
        'Familiar with using Daisy UI for ready-made components to enhance web designs.',
      link: 'https://daisyui.com/',
    },
    {
      icon: <SiChakraui className='text-teal-500' />,
      title: 'Chakra UI',
      description:
        'Basic knowledge of using Chakra UI to build modern web interfaces easily.',
      link: 'https://chakra-ui.com/',
    },
    {
      icon: <SiJenkins className='text-blue-400' />,
      title: 'Jenkins',
      description:
        'Proficient with Jenkins for CI/CD processes, enhancing development workflows.',
      link: 'https://www.jenkins.io/',
    },
    {
      icon: <SiBitbucket className='text-blue-500' />,
      title: 'Bitbucket',
      description:
        'Experienced with Bitbucket for Git version control and team collaboration.',
      link: 'https://bitbucket.org/product/',
    },
    {
      icon: <DiGit className='text-red-500' />,
      title: 'Git',
      description:
        'Understanding of using Git for version control to track changes in projects.',
      link: 'https://git-scm.com/',
    },
    {
      icon: <SiGithub className='text-gray-800' />,
      title: 'GitHub',
      description:
        'Experienced in collaborating on projects via GitHub, managing repositories, and handling pull requests.',
      link: 'https://github.com/',
    },
    {
      icon: <SiJest className='text-red-400' />,
      title: 'Jest',
      description:
        'Basic understanding of using Jest to write simple tests for code.',
      link: 'https://jestjs.io/',
    },
    {
      icon: <SiEslint className='text-purple-400' />,
      title: 'ESLint',
      description:
        'Experienced in using ESLint to maintain code quality and enforce coding standards.',
      link: 'https://eslint.org/',
    },
    {
      icon: <SiPostman className='text-orange-500' />,
      title: 'Postman',
      description:
        'Skilled in using Postman for testing APIs and ensuring endpoint functionality.',
      link: 'https://www.postman.com/',
    },
    {
      icon: <SiKeycloak className='text-gray-400' />,
      title: 'Keycloak',
      description:
        'Knowledgeable in using Keycloak for identity and access management in web applications.',
      link: 'https://www.keycloak.org/',
    },
    {
      icon: <SiVisualstudiocode className='text-blue-500' />,
      title: 'VS Code',
      description:
        'Proficient in using Visual Studio Code, a powerful and customizable code editor.',
      link: 'https://code.visualstudio.com/',
    },
    {
      icon: <SiFigma className='text-green-400' />,
      title: 'Figma',
      description:
        'Experienced in using Figma for designing user interfaces and collaborating with design teams.',
      link: 'https://www.figma.com/',
    },
    {
      icon: <SiMicrosoftazure className='text-blue-500' />,
      title: 'Azure',
      description:
        'Experienced in using Microsoft Azure for cloud computing services such as app hosting, data storage, and machine learning.',
      link: 'https://azure.microsoft.com/',
    },
  ],
  softSkills: [
    {
      icon: <span className='text-4xl'>🤝</span>,
      title: 'Teamwork',
      description:
        'Effective at collaborating with team members and stakeholders to achieve common goals.',
    },
    {
      icon: <span className='text-4xl'>🧠</span>,
      title: 'Analytical',
      description:
        'Adept at analyzing problems and finding data-driven solutions.',
    },
    {
      icon: <span className='text-4xl'>💡</span>,
      title: 'Adaptability',
      description:
        'Able to adjust to new environments and technologies with ease.',
    },
    {
      icon: <span className='text-4xl'>💬</span>,
      title: 'Empathy',
      description:
        'Skilled in understanding and addressing the needs and concerns of others.',
    },
    {
      icon: <span className='text-4xl'>🚀</span>,
      title: 'Motivation',
      description:
        'Self-driven and enthusiastic in completing tasks and achieving goals.',
    },
    {
      icon: <span className='text-4xl'>⏳</span>,
      title: 'Prioritization',
      description:
        'Capable of managing time effectively and prioritizing tasks for efficiency.',
    },
    {
      icon: <span className='text-4xl'>🔄</span>,
      title: 'Flexibility',
      description:
        'Open to new ideas and changes, ensuring smooth transitions in various situations.',
    },
    {
      icon: <span className='text-4xl'>🔍</span>,
      title: 'Meticulous',
      description:
        'Meticulous in ensuring accuracy and quality in all tasks and projects.',
    },
  ],
};

export default skillData;
