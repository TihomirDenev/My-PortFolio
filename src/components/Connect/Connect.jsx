import { AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa6';

export default function Connect() {
  return (
    <div className='flex-1 text-right'>
      <ul className='footer-icons flex justify-end text-primary'>
        <li
          className='mx-4 text-2xl duration-300 hover:text-secondary hover:bg-gray-300 hover:rounded-xl'
          title='GitHub'
        >
          <a
            href='https://github.com/TihomirDenev'
            target='_blank'
          >
            <AiFillGithub />
          </a>
        </li>
        <li
          className='mx-4 text-2xl duration-300 hover:text-secondary hover:bg-gray-300 hover:rounded-md'
          title='GMail'
        >
          <a
            href='mailto:tihomir.denev22@gmail.com'
            target='_blank'
          >
            <AiFillMail />
          </a>
        </li>
        <li
          className='mx-4 text-2xl duration-300 hover:text-secondary hover:bg-gray-300 hover:rounded-md'
          title='LinkedIn'
        >
          <a
            href='https://www.linkedin.com/in/tihomir-denev-97a388306/'
            target='_blank'
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li
          className='mx-4 text-2xl duration-300 hover:text-secondary hover:bg-gray-300 hover:rounded-md'
          title='Instagram'
        >
          <a
            href='https://www.instagram.com/tixomird/'
            target='_blank'
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}
