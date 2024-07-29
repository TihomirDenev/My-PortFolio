import {
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
  SiFirebase,
  SiGithub,
  SiGnubash,
  SiJest,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si';
import { LuFunctionSquare } from 'react-icons/lu';
import { MdDataObject } from 'react-icons/md';
import { VscVscode } from 'react-icons/vsc';

export default function Skills() {
  return (
    <div className='flex flex-col items-center my-8 px-4 md:px-0'>
      <h1 className='text-2xl font-bold underline mb-6'>
        Professional Skillset:{' '}
      </h1>
      <div className='text-5xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <SkillCard
          icon={<DiJavascript1 />}
          title='JavaScript'
          description='Experienced in writing clean and efficient JavaScript code for dynamic web applications.'
        />
        <SkillCard
          icon={<DiReact />}
          title='React'
          description='Familiar with building component-based user interfaces using React.'
        />
        <SkillCard
          icon={<DiHtml5 />}
          title='HTML'
          description='Expert in crafting semantic and accessible HTML structures.'
        />
        <SkillCard
          icon={<DiCss3 />}
          title='CSS'
          description='Proficient in creating responsive and visually appealing designs using CSS.'
        />
        <SkillCard
          icon={<DiNodejs />}
          title='NodeJS'
          description='Basic knowledge of using Node.js to create server-side applications and APIs.'
        />
        <SkillCard
          icon={<SiFirebase />}
          title='Firebase'
          description='Knowledgeable in using Firebase for real-time data storage and authentication.'
        />
        <SkillCard
          icon={<SiGnubash />}
          title='Bash'
          description='Basic skills in using Bash for Git commands like git clone and other version control tasks.'
        />
        <SkillCard
          icon={<MdDataObject />}
          title='OOP'
          description='Skilled in applying OOP principles to create modular and reusable code structures.'
        />
        <SkillCard
          icon={<LuFunctionSquare />}
          title='FP'
          description='Experienced in using FP concepts to write clean and maintainable code through functions and immutability.'
        />
      </div>
      <h1 className='text-2xl font-bold underline my-6'>Tools I Use: </h1>
      <div className='text-5xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <SkillCard
          icon={<SiTailwindcss />}
          title='Tailwind CSS'
          description='Skilled in using Tailwind CSS to create modern and responsive web designs.'
        />
        <SkillCard
          icon={<SiDaisyui />}
          title='Daisy UI'
          description='Familiar with using Daisy UI for ready-made components to enhance web designs.'
        />
        <SkillCard
          icon={<SiChakraui />}
          title='Chakra UI'
          description='Basic knowledge of using Chakra UI to build modern web interfaces easily.'
        />
        <SkillCard
          icon={<DiGit />}
          title='Git'
          description='Understanding of using Git for version control to track changes in projects.'
        />
        <SkillCard
          icon={<SiGithub />}
          title='Github'
          description='Experienced in collaborating on projects via GitHub, managing repositories, and handling pull requests.'
        />
        <SkillCard
          icon={<SiJest />}
          title='Jest'
          description='Basic understanding of using Jest to write simple tests for code.'
        />
        <SkillCard
          icon={<SiEslint />}
          title='ESLint'
          description='Experienced in using ESLint to maintain code quality and enforce coding standards.'
        />
        <SkillCard
          icon={<SiPostman />}
          title='Postman'
          description='Skilled in using Postman for testing APIs and ensuring endpoint functionality.'
        />
        <SkillCard
          icon={<VscVscode />}
          title='VS Code'
          description='Proficient in using Visual Studio Code, a powerful and customizable code editor.'
        />
      </div>
    </div>
  );
}
