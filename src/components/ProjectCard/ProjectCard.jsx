import PropTypes from 'prop-types';

export default function ProjectCard({
  title,
  description,
  techStack,
  linkForRepo,
  linkForSite,
  image,
}) {
  return (
    <div className='flex flex-col bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-6 border-2 border-black rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl m-4 shadow-lg transform transition-transform duration-300'>
      {linkForSite ? (
        <button
          onClick={() => window.open(linkForSite, '_blank')}
          className='relative'
        >
          <img
            src={image}
            alt={title}
            className='w-full rounded-md object-cover mb-2 border-4 border-black transition-transform duration-300 ease-in-out transform hover:scale-105'
          />
        </button>
      ) : (
        <img
          src={image}
          alt={title}
          className='w-full rounded-md object-cover mb-2 border-4 border-black transition-transform duration-300 ease-in-out transform hover:scale-105 '
        />
      )}

      <p className='text-xl font-bold text-white z-10 text-center'>{title}</p>

      <p className='text-sm text-white text-center px-4 py-2 z-10 opacity-90'>
        <strong className='text-base'>Description: </strong>
        {description}
      </p>

      <p className='text-sm text-white text-center px-4 py-2 z-10 opacity-90'>
        <strong className='text-base'>Tech Stack: </strong>
        {techStack}.
      </p>

      <div className='mt-auto w-full flex justify-center'>
        <button
          onClick={() => window.open(linkForRepo, '_blank')}
          className='relative z-10 mt-4 py-2 px-6 bg-white text-gray-800 font-semibold rounded-lg transition-colors duration-300 hover:bg-gray-200'
        >
          Github Repository
        </button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  linkForRepo: PropTypes.string.isRequired,
  linkForSite: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
