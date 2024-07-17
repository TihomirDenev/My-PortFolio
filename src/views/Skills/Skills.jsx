import {
  DiCss3,
  DiGit,
  DiGithub,
  DiHtml5,
  DiJavascript1,
  DiNodejs,
  DiReact,
} from 'react-icons/di';
import Skill from '../../components/Skill/Skill';
import {
  SiChakraui,
  SiDaisyui,
  SiEslint,
  SiFirebase,
  SiGnubash,
  SiJest,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si';
import { LuFunctionSquare } from 'react-icons/lu';
import { MdDataObject } from 'react-icons/md';

export default function Skills() {
  return (
    <div className='flex flex-col items-center my-8'>
      <h1 className='text-2xl font-bold underline mb-2'>
        Professional Skillset:{' '}
      </h1>
      <div className=' text-5xl text-black flex'>
        <Skill
          icon={<DiJavascript1 />}
          title='JavaScript'
          description='Experienced in writing clean and efficient JavaScript code for
            dynamic web applications.'
        />
        <Skill
          icon={<DiReact />}
          title='React'
          description='Familiar with building component-based user interfaces using React.'
        />
        <Skill
          icon={<DiHtml5 />}
          title='HTML'
          description='Expert in crafting semantic and accessible HTML structures.'
        />
        <Skill
          icon={<DiCss3 />}
          title='CSS'
          description='Proficient in creating responsive and visually appealing designs using CSS.'
        />
        <Skill
          icon={<DiNodejs />}
          title='NodeJS'
          description='Basic knowledge of using Node.js to create server-side applications and APIs.'
        />
        <Skill
          icon={<SiFirebase />}
          title='Firebase'
          description='Knowledgeable in using Firebase for real-time data storage and authentication.'
        />
        <Skill
          icon={<SiGnubash />}
          title='Bash'
          description='Basic skills in using Bash for Git commands like git clone and other version control tasks.'
        />
        <Skill
          icon={<MdDataObject />}
          title='OOP'
          description='Skilled in applying OOP principles to create modular and reusable code structures.'
        />
        <Skill
          icon={<LuFunctionSquare />}
          title='FP'
          description='Experienced in using FP concepts to write clean and maintainable code through functions and immutability.'
        />
      </div>
      <h1 className='mt-6 text-2xl font-bold underline mb-2'>Tools I Use: </h1>
      <div className=' text-5xl text-black flex'>
        <Skill
          icon={<SiTailwindcss />}
          title='Tailwind CSS'
          description='Skilled in using Tailwind CSS to create modern and responsive web designs.'
        />
        <Skill
          icon={<SiDaisyui />}
          title='Daisy UI'
          description='Familiar with using Daisy UI for ready-made components to enhance web designs.'
        />
        <Skill
          icon={<SiChakraui />}
          title='Chakra UI'
          description='Basic knowledge of using Chakra UI to build modern web interfaces easily.'
        />
        <Skill
          icon={<DiGit />}
          title='Git'
          description='Understanding of using Git for version control to track changes in projects.'
        />
        <Skill
          icon={<DiGithub />}
          title='Github'
          description='Experienced in collaborating on projects via GitHub, managing repositories, and handling pull requests.'
        />
        <Skill
          icon={<SiJest />}
          title='Jest'
          description='Basic understanding of using Jest to write simple tests for code.'
        />
        <Skill
          icon={<SiEslint />}
          title='ESLint'
          description='Experienced in using ESLint to maintain code quality and enforce coding standards.'
        />
        <Skill
          icon={<SiPostman />}
          title='Postman'
          description='Skilled in using Postman for testing APIs and ensuring endpoint functionality.'
        />
      </div>
    </div>
  );
}
