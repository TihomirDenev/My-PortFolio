import { useState } from "react";
import skillData from "../../common/skillsData";
import SkillCard from "../../components/SkillCard/SkillCard";

export default function Skills() {
  const [showProfessional, setShowProfessional] = useState(true);
  const [showTools, setShowTools] = useState(true);
  const [showSoftSkills, setShowSoftSkills] = useState(true);

  const handleToggleCategory = (category) => {
    if (category === "professional") {
      setShowProfessional(true);
      setShowTools(false);
      setShowSoftSkills(false);
    } else if (category === "tools") {
      setShowProfessional(false);
      setShowTools(true);
      setShowSoftSkills(false);
    } else if (category === "softSkills") {
      setShowProfessional(false);
      setShowTools(false);
      setShowSoftSkills(true);
    }
  };

  const handleClearFilters = () => {
    setShowProfessional(true);
    setShowTools(true);
    setShowSoftSkills(true);
  };

  return (
    <div>
      <ul className="flex flex-row items-center justify-between bg-gray-800 text-white text-md w-full py-2 px-4">
        <li className="text-gray-400">Filter By:</li>
        <div className="flex flex-row space-x-2">
          <li>
            <button
              className="px-3 py-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              onClick={() => handleToggleCategory("professional")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className="px-3 py-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              onClick={() => handleToggleCategory("tools")}
            >
              Tools
            </button>
          </li>
          <li>
            <button
              className="px-3 py-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              onClick={() => handleToggleCategory("softSkills")}
            >
              Soft Skills
            </button>
          </li>
          <li>
            <button
              className="px-3 py-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              onClick={handleClearFilters}
              title="Click to remove all filters and show all skills"
            >
              Show All
            </button>
          </li>
        </div>
      </ul>

      <div className="flex flex-col items-center md:px-0">
        {showProfessional && (
          <article className="flex flex-col items-center">
            <h1 className="text-2xl font-bold underline my-6">
              Professional Skill Set:
            </h1>
            <div className="text-5xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        )}

        {showTools && (
          <article className="flex flex-col items-center">
            <h1 className="text-2xl font-bold underline my-6">Tools I Use:</h1>
            <div className="text-5xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        )}

        {showSoftSkills && (
          <article className="flex flex-col items-center">
            <h1 className="text-2xl font-bold underline my-6">Soft Skills:</h1>
            <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        )}
      </div>
    </div>
  );
}
