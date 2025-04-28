import myPhoto from '../../assets/Additional/myPhoto.jpg';
import Connect from '../../components/Connect/Connect';
import CV from '../../assets/CV/myCV.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between md:mx-52 mx-4 my-8'>
      <img
        className='w-64 md:w-96 rounded-3xl border-4 border-white duration-300 hover:scale-105 transition-transform hover:shadow-2xl'
        src={myPhoto}
        alt='avatar'
      />
      <div className='text-xl md:text-3xl flex flex-col items-center md:items-end mt-6 md:mt-0'>
        <div className='flex'>
          <p className='font-bold duration-300 hover:text-info'>Hi There! </p>
          <span
            className='inline-block animate-wave'
            style={{ transformOrigin: '70% 70%' }}
            role='img'
            aria-labelledby='wave'
          >
            👋🏻
          </span>
        </div>
        <p className='font-bold duration-300 hover:text-info'>
          I`m Tihomir Denev
        </p>
        <p className='font-bold duration-300 hover:text-info'>
          Frontend Web Developer
        </p>

        <div className='my-6'>
          <p className='text-base text-center mb-3'>
            Feel free to <strong className='text-primary'>connect</strong> with
            me
          </p>
          <Connect color='primary' />
        </div>
        <a
          href={CV}
          target='_blank'
          rel='noopener noreferrer'
          download='Tihomir_Denev_CV.pdf'
          className='btn btn-accent shadow-2xl text-lg md:text-2xl flex items-center'
        >
          <AiOutlineDownload className='mr-2' />
          Download CV
        </a>
      </div>
    </div>
  );
}
