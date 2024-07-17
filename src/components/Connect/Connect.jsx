import { AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa6';

export default function Connect() {
  return (
    <div className='flex-1 text-right '>
      <ul className='footer-icons flex justify-end'>
        <li
          className='mx-4 text-2xl hover:text-secondary'
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
          className='mx-4 text-2xl hover:text-secondary'
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
          className='mx-4 text-2xl hover:text-secondary'
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
          className='mx-4 text-2xl hover:text-secondary'
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
