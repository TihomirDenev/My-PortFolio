import { AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa6';

export default function Connect() {
  return (
    <div className='w-full'>
      <ul className='footer-icons flex justify-center md:justify-end text-primary'>
        <li
          className='mx-2 md:mx-4 text-2xl duration-300 hover:text-secondary hover:bg-gray-300 hover:rounded-xl'
          title='GitHub'
        >
          <a
            href='https://github.com/TihomirDenev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillGithub />
          </a>
        </li>
        <li
          className='mx-2 md:mx-4 text-2xl duration-300 hover:text-secondary hover:bg-gray-300 hover:rounded-md'
          title='GMail'
        >
          <a
            href='mailto:tihomir.denev22@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillMail />
          </a>
        </li>
        <li
          className='mx-2 md:mx-4 text-2xl duration-300 hover:text-secondary hover:bg-gray-300 hover:rounded-md'
          title='LinkedIn'
        >
          <a
            href='https://www.linkedin.com/in/tihomir-denev-97a388306/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li
          className='mx-2 md:mx-4 text-2xl duration-300 hover:text-secondary hover:bg-gray-300 hover:rounded-md'
          title='Instagram'
        >
          <a
            href='https://www.instagram.com/tixomird/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}
