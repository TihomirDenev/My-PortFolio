import Connect from '../Connect/Connect';

export default function Footer() {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center w-full p-4 bg-gray-800 text-white shadow-md text-center md:text-left'>
      <h3 className='flex-1 mb-2 md:mb-0 text-center md:text-left'>
        Designed and Developed by Tihomir Denev
      </h3>
      <h3 className='flex-1 mb-2 md:mb-0 text-center'>
        Copyright © 2024 - All rights reserved for TDD
      </h3>
      <div className='flex-1'>
        <Connect color='white' />
      </div>
    </footer>
  );
}
