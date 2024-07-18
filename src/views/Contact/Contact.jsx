import Connect from '../../components/Connect/Connect';
import { IoIosArrowRoundDown } from 'react-icons/io';
import avatar from '../../assets/avatar.svg';
import { LOCATION, workHours } from '../../common/constants';

export default function Contact() {
  return (
    <div className='flex flex-row items-center my-8 mx-28'>
      <img
        src={avatar}
        alt='Avatar'
      />
      <div className='flex flex-col items-center ml-10'>
        <h1 className='text-2xl font-bold underline'>Contacts: </h1>
        <div className='text-center text-lg mt-2'>
          <p>
            <strong className='text-primary'>Location:</strong> Based in{' '}
            {LOCATION}. Open to remote work and opportunities worldwide.
          </p>
          <p>
            <strong className='text-primary'>Availability:</strong> I`m
            available from {workHours.from} to {workHours.to} on weekdays. The
            best way to reach me is via email.
          </p>
          <p>
            <strong className='text-primary'>Contact:</strong> If you`re
            interested in business inquiries, collaborations, or any
            professional opportunities, please reach out using the contact
            details provided.
          </p>
        </div>
        <IoIosArrowRoundDown className='text-5xl my-4' />
        <Connect />
      </div>
    </div>
  );
}
