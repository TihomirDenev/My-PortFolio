import {
  DiAngularSimple,
  DiCss3,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiNodejs,
  DiReact,
} from 'react-icons/di';
import SkillCard from '../../components/SkillCard/SkillCard';
import {
  SiChakraui,
  SiDaisyui,
  SiEslint,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGnubash,
  SiJest,
  SiKeycloak,
  SiMicrosoftazure,
  SiPostman,
  SiReactivex,
  SiTailwindcss,
} from 'react-icons/si';
import { LuFunctionSquare } from 'react-icons/lu';
import { MdDataObject } from 'react-icons/md';
import { VscVscode } from 'react-icons/vsc';
import { BiLogoTypescript } from 'react-icons/bi';

export default function Skills() {
  return (
    <div className='flex flex-col items-center my-8 px-4 md:px-0'>
      <article className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold underline mb-6'>
          Professional Skillset:
        </h1>
        <div className='text-5xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          <SkillCard
            icon={<DiJavascript1 className='text-yellow-500' />}
            title='JavaScript'
            description='Experienced in writing clean and efficient JavaScript code for dynamic web applications.'
            link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          />
          <SkillCard
            icon={<DiReact className='text-blue-500' />}
            title='React'
            description='Familiar with building component-based user interfaces using React.'
            link='https://reactjs.org/'
          />
          <SkillCard
            icon={<BiLogoTypescript className='text-blue-500' />}
            title='TypeScript'
            description='Experienced in using TypeScript to add static typing to JavaScript, improving code quality and reducing bugs in large-scale applications.'
            link='https://www.typescriptlang.org/'
          />
          <SkillCard
            icon={<DiAngularSimple className='text-red-500' />}
            title='Angular'
            description='Skilled in building scalable web applications using Angular framework.'
            link='https://angular.io/'
          />
          <SkillCard
            icon={<DiHtml5 className='text-orange-500' />}
            title='HTML'
            description='Expert in crafting semantic and accessible HTML structures.'
            link='https://developer.mozilla.org/en-US/docs/Web/HTML'
          />
          <SkillCard
            icon={<DiCss3 className='text-blue-600' />}
            title='CSS'
            description='Proficient in creating responsive and visually appealing designs using CSS.'
            link='https://developer.mozilla.org/en-US/docs/Web/CSS'
          />
          <SkillCard
            icon={<DiNodejs className='text-green-500' />}
            title='NodeJS'
            description='Basic knowledge of using Node.js to create server-side applications and APIs.'
            link='https://nodejs.org/'
          />
          <SkillCard
            icon={<SiFirebase className='text-amber-500' />}
            title='Firebase'
            description='Knowledgeable in using Firebase for real-time data storage and authentication.'
            link='https://firebase.google.com/'
          />
          <SkillCard
            icon={<SiGnubash className='text-gray-800' />}
            title='Bash'
            description='Basic skills in using Bash for Git commands like git clone and other version control tasks.'
            link='https://www.gnu.org/software/bash/'
          />
          <SkillCard
            icon={<MdDataObject className='text-purple-500' />}
            title='OOP'
            description='Skilled in applying OOP principles to create modular and reusable code structures.'
            link='https://en.wikipedia.org/wiki/Object-oriented_programming'
          />
          <SkillCard
            icon={<LuFunctionSquare className='text-blue-400' />}
            title='FP'
            description='Experienced in using FP concepts to write clean and maintainable code through functions and immutability.'
            link='https://en.wikipedia.org/wiki/Functional_programming'
          />
          <SkillCard
            icon={<SiReactivex className='text-pink-500' />}
            title='RxJS'
            description='Proficient in using RxJS for managing asynchronous data streams in JavaScript applications.'
            link='https://rxjs.dev/'
          />
        </div>
      </article>

      <article className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold underline my-6'>Tools I Use:</h1>
        <div className='text-5xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          <SkillCard
            icon={<SiTailwindcss className='text-sky-400' />}
            title='Tailwind CSS'
            description='Skilled in using Tailwind CSS to create modern and responsive web designs.'
            link='https://tailwindcss.com/'
          />
          <SkillCard
            icon={<SiDaisyui className='text-purple-400' />}
            title='Daisy UI'
            description='Familiar with using Daisy UI for ready-made components to enhance web designs.'
            link='https://daisyui.com/'
          />
          <SkillCard
            icon={<SiChakraui className='text-teal-500' />}
            title='Chakra UI'
            description='Basic knowledge of using Chakra UI to build modern web interfaces easily.'
            link='https://chakra-ui.com/'
          />
          <SkillCard
            icon={<DiGit className='text-red-500' />}
            title='Git'
            description='Understanding of using Git for version control to track changes in projects.'
            link='https://git-scm.com/'
          />
          <SkillCard
            icon={<SiGithub className='text-gray-800' />}
            title='Github'
            description='Experienced in collaborating on projects via GitHub, managing repositories, and handling pull requests.'
            link='https://github.com/'
          />
          <SkillCard
            icon={<SiJest className='text-red-400' />}
            title='Jest'
            description='Basic understanding of using Jest to write simple tests for code.'
            link='https://jestjs.io/'
          />
          <SkillCard
            icon={<SiEslint className='text-purple-400' />}
            title='ESLint'
            description='Experienced in using ESLint to maintain code quality and enforce coding standards.'
            link='https://eslint.org/'
          />
          <SkillCard
            icon={<SiPostman className='text-orange-500' />}
            title='Postman'
            description='Skilled in using Postman for testing APIs and ensuring endpoint functionality.'
            link='https://www.postman.com/'
          />
          <SkillCard
            icon={<SiKeycloak className='text-gray-400' />}
            title='Keycloak'
            description='Knowledgeable in using Keycloak for identity and access management in web applications.'
            link='https://www.keycloak.org/'
          />
          <SkillCard
            icon={<VscVscode className='text-blue-500' />}
            title='VS Code'
            description='Proficient in using Visual Studio Code, a powerful and customizable code editor.'
            link='https://code.visualstudio.com/'
          />
          <SkillCard
            icon={<SiFigma className='text-green-400' />}
            title='Figma'
            description='Experienced in using Figma for designing user interfaces and collaborating with design teams.'
            link='https://www.figma.com/'
          />
          <SkillCard
            icon={<SiMicrosoftazure className='text-blue-500' />}
            title='Azure'
            description='Experienced in using Microsoft Azure for cloud computing services such as app hosting, data storage, and machine learning.'
            link='https://azure.microsoft.com/'
          />
        </div>
      </article>

      <article className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold underline my-6'>Soft Skills:</h1>
        <div className='text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          <SkillCard
            icon={<span className='text-4xl'>🤝</span>}
            title='Teamwork'
            description='Effective at collaborating with team members and stakeholders to achieve common goals.'
          />
          <SkillCard
            icon={<span className='text-4xl'>🧠</span>}
            title='Analytical'
            description='Adept at analyzing problems and finding data-driven solutions.'
          />
          <SkillCard
            icon={<span className='text-4xl'>💡</span>}
            title='Adaptability'
            description='Able to adjust to new environments and technologies with ease.'
          />
          <SkillCard
            icon={<span className='text-4xl'>💬</span>}
            title='Empathy'
            description='Skilled in understanding and addressing the needs and concerns of others.'
          />
          <SkillCard
            icon={<span className='text-4xl'>🚀</span>}
            title='Motivation'
            description='Self-driven and enthusiastic in completing tasks and achieving goals.'
          />
          <SkillCard
            icon={<span className='text-4xl'>⏳</span>}
            title='Prioritization'
            description='Capable of managing time effectively and prioritizing tasks for efficiency.'
          />
          <SkillCard
            icon={<span className='text-4xl'>🔄</span>}
            title='Flexibility'
            description='Open to new ideas and changes, ensuring smooth transitions in various situations.'
          />
          <SkillCard
            icon={<span className='text-4xl'>🔍</span>}
            title='Meticulous'
            description='Meticulous in ensuring accuracy and quality in all tasks and projects.'
          />
        </div>
      </article>
    </div>
  );
}
