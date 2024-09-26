import skillData from '../../common/skillsData';
import SkillCard from '../../components/SkillCard/SkillCard';

export default function Skills() {
  return (
    <div className='flex flex-col items-center my-8 px-4 md:px-0'>
      <article className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold underline mb-6'>
          Professional Skill Set:
        </h1>
        <div className='text-5xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {skillData.professionalSkills.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              link={skill.link}
            />
          ))}
        </div>
      </article>

      <article className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold underline my-6'>Tools I Use:</h1>
        <div className='text-5xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {skillData.tools.map((tool) => (
            <SkillCard
              key={tool.title}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              link={tool.link}
            />
          ))}
        </div>
      </article>

      <article className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold underline my-6'>Soft Skills:</h1>
        <div className='text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {skillData.softSkills.map((softSkill) => (
            <SkillCard
              key={softSkill.title}
              icon={softSkill.icon}
              title={softSkill.title}
              description={softSkill.description}
            />
          ))}
        </div>
      </article>
    </div>
  );
}
