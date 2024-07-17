import Connect from '../../components/Connect/Connect';
import { IoIosArrowRoundDown } from 'react-icons/io';
import avatar from '../../assets/avatar.svg';

export default function Contact() {
  return (
    <div className='flex flex-row items-center my-8 mx-28'>
      <img
        src={avatar}
        alt='Avatar'
      />
      <div className='flex flex-col items-center ml-10'>
        <h1 className='text-2xl font-bold underline'>Contact: </h1>
        <p className='text-center text-lg m-2'>
          If you`re interested in business inquiries, collaborations, or any
          professional opportunities, please reach out using the contact details
          provided.
        </p>
        <IoIosArrowRoundDown className='text-5xl my-2' />
        <Connect />
      </div>
    </div>
  );
}
