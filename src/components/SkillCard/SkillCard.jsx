import PropTypes from 'prop-types';

export default function SkillCard({ icon, title, description }) {
  return (
    <div className='flex flex-col items-center border-2 border-gray-500 rounded-2xl w-36 bg-orange-300 m-2 duration-300 hover:-translate-y-2 hover:shadow-2xl'>
      <div className='m-1'>{icon}</div>
      <p className='text-base font-bold'>{title}</p>
      <p className='text-sm text-center text-black px-2 pb-3'>{description}</p>
    </div>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
