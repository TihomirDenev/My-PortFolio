import ProjectCard from '../../components/ProjectCard/ProjectCard';
import giphyHunters from '../../assets/GiphyHunters.png';
import motionMate from '../../assets/MotionMate.png';
import tastyRecipeTalk from '../../assets/TastyRecipeTalk.png';

export default function Projects() {
  return (
    <div className='flex flex-col items-center my-8 px-4'>
      <h1 className='text-2xl font-bold underline mb-6 text-center'>
        My Recent Projects:
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl'>
        <ProjectCard
          title='Giphy Hunters'
          description={`Developed a dynamic Single Page Application using the Giphy API to display trending GIFs with\ninfinite scroll, upload and manage favorite GIFs, and showcase random GIFs for a fun user\nexperience. Employed CSS for responsive design and optimized state management for seamless\nperformance.`}
          link='https://github.com/A58-Agents-Team1/Web-Project'
          image={giphyHunters}
        />
        <ProjectCard
          title='Tasty Recipe Talk'
          description={`Developed a culinary forum featuring both public and private sections where users can register,\ncreate, edit, and comment on recipes, as well as manage their profiles and profile pictures.\nIncluded an admin panel for user management and content moderation, ensuring a secure\nenvironment. Utilized React Router for navigation.`}
          link='https://github.com/A58-Agents-Team1/Tasty-Recipe-Talk'
          image={tastyRecipeTalk}
        />
        <ProjectCard
          title='Motion Mate'
          description={`Developed fitness tracking app offers both public and private features, including an\nadministrative section, allowing users to send friend requests, add friends, create goals and\nexercises, and calculate their body mass index. Utilized React Router for navigation.`}
          link='https://github.com/A58-Agents-Team1/Motion.Mate'
          image={motionMate}
        />
      </div>
    </div>
  );
}
