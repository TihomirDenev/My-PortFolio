import { AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className='flex justify-between items-center w-full p-4'>
      <h3 className='flex-1 text-left'>
        Designed and Developed by Tihomir Denev
      </h3>
      <h3 className='flex-1 text-center'>
        Copyright © 2024 - All right reserved for TDD
      </h3>
      <div className='flex-1 text-right '>
        <ul className='footer-icons flex justify-end'>
          <li className='mx-4 text-2xl'>
            <a
              href='https://github.com/TihomirDenev'
              target='_blank'
            >
              <AiFillGithub />
            </a>
          </li>
          <li className='mx-4 text-2xl'>
            <a
              href='mailto:tihomir.denev22@gmail.com'
              target='_blank'
            >
              <AiFillMail />
            </a>
          </li>
          <li className='mx-4 text-2xl'>
            <a
              href='https://www.linkedin.com/in/tihomir-denev-97a388306/'
              target='_blank'
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className='mx-4 text-2xl'>
            <a
              href='https://www.instagram.com/tixomird/'
              target='_blank'
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
