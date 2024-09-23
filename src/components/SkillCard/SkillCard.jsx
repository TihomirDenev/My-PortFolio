import PropTypes from 'prop-types';

export default function SkillCard({ icon, title, description, link }) {
  return (
    <div className='flex flex-col items-center border-2 border-indigo-800 rounded-2xl w-44 bg-gradient-to-br from-purple-700 to-indigo-600 m-2 p-4 duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/50'>
      <div>{icon}</div>
      {link ? (
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className='text-xl text-white m-2 font-semibold hover:underline'>
            {title}
          </p>
        </a>
      ) : (
        <p className='text-xl text-white m-2 font-semibold'>{title}</p>
      )}
      <p className='text-sm text-center text-gray-200 px-2 pb-3'>
        {description}
      </p>
    </div>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};
