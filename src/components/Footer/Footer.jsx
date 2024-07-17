import Connect from '../Connect/Connect';

export default function Footer() {
  return (
    <footer className='flex justify-between items-center w-full p-4 bg-base-300'>
      <h3 className='flex-1 text-left'>
        Designed and Developed by Tihomir Denev
      </h3>
      <h3 className='flex-1 text-center'>
        Copyright © 2024 - All right reserved for TDD
      </h3>
      <Connect />
    </footer>
  );
}
