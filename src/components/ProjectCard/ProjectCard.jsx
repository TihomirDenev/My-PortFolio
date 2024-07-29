import PropTypes from 'prop-types';

export default function ProjectCard({ title, description, link, image }) {
  return (
    <div className='flex flex-col p-4 items-center border-2 border-gray-500 rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl m-2 duration-300 hover:-translate-y-1 hover:shadow-2xl'>
      <img
        src={image}
        alt={title}
        className='w-full md:w-full lg:w-full rounded-md object-cover mb-2'
      />
      <p className='text-lg md:text-xl font-bold my-2 text-primary'>{title}</p>
      <p className='text-sm md:text-base text-center px-2 pb-3 whitespace-pre-line'>
        {description}
      </p>
      <button
        onClick={() => window.open(link, '_blank')}
        className='btn btn-accent my-3'
      >
        View Project
      </button>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
