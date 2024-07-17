import myPhoto from '../../assets/myPhoto.jpg';
import Connect from '../../components/Connect/Connect';
import CV from '../../assets/CV.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

export default function Home() {
  return (
    <div className='flex flex-row items-center justify-between mx-52 my-16'>
      <img
        className='w-96 rounded-3xl border-4 border-white shadow-2xl'
        src={myPhoto}
        alt='avatar'
      />
      <div className='text-3xl flex flex-col items-end'>
        <div className='flex'>
          <p className='font-bold text-primary duration-300 hover:text-info'>
            Hi There!{' '}
          </p>
          <span
            className='inline-block animate-wave'
            style={{ transformOrigin: '70% 70%' }}
            role='img'
            aria-labelledby='wave'
          >
            👋🏻
          </span>
        </div>
        <p className='font-bold text-primary duration-300 hover:text-info'>
          I`m Tihomir Denev
        </p>
        <p className='font-bold text-primary duration-300 hover:text-info'>
          Junior Front-End Developer
        </p>

        <div className='my-6'>
          <Connect />
        </div>
        <a
          href={CV}
          target='_blank'
          rel='noopener noreferrer'
          download='Tihomir_Denev_CV.pdf' // Specify the name for the downloaded file
          className='btn btn-accent shadow-2xl text-2xl flex items-center'
        >
          <AiOutlineDownload className='mr-2' />
          Download CV
        </a>
      </div>
    </div>
  );
}
