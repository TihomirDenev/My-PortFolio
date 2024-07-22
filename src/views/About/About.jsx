import image from '../../assets/about.png';
import frontImg from '../../assets/front.png';
import backImg from '../../assets/back.png';

export default function About() {
  return (
    <div className='flex flex-col items-center my-6 text-lg'>
      <h1 className='text-2xl font-bold underline'>
        👦🏻 Let me introduce myself:
      </h1>
      <div className='flex flex-row items-center w-10/12 mt-4'>
        <div className='text-center mt-2'>
          <p>
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
          <p>I am fluent in classics like Javascript. </p>
          <p>
            My field of interest includes building new web technologies, Single
            Page Applications (SPA), and products. Whenever possible, I apply my
            passion for developing products with Node.js and modern JavaScript
            libraries and frameworks like React.js.
          </p>
          <br />
        </div>
        <div>
          <img
            src={image}
            alt='about'
          />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold underline'>
          🎓 Education and Other Interests:
        </h1>
        <div className='flex items-center text-center mt-8'>
          <div className='mr-10'>
            <p>Apart from coding, I enjoy several other activities:</p>
            <p>🏋🏻‍♂️ Training</p>
            <p>🎒 Traveling</p>
            <p>🎼 Listen Music</p>
            <p>🧮 Play Board Games</p>
            <p>🎥 Watching Good Movies</p>
            <p>🎓 Studying New Technology</p>
          </div>
          <div>
            <p className='mb-2'>When it comes to my educational background:</p>
            <p className='mb-2'>
              📒 Telerik Academy: Completed Alpha JavaScript Track.{' '}
            </p>
            <p className='mb-2'>
              📘 Technical University of Sofia: Bachelor of Automatic.{' '}
            </p>{' '}
            <p className='mb-2'>
              📕 Science and Mathematics High School: Informatics.
            </p>
          </div>
        </div>
        <br />
        <h1 className='text-2xl font-bold underline'>📑 Certificate: </h1>
        <div className='flex mt-8'>
          <a
            href={frontImg}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={frontImg}
              alt='front'
              className='h-96 mr-5 border-2 border-black shadow-2xl duration-300 hover:-translate-y-1'
            />
          </a>
          <a
            href={backImg}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={backImg}
              alt='back'
              className='h-96 border-2 border-black shadow-2xl duration-300 hover:-translate-y-1'
            />
          </a>
        </div>
        <p className='text-primary text-center text-base mt-6'>
          <i>
            {`"Approach every task with a positive attitude and a smile,
              striving to improve and excel each time." -TDD`}
          </i>
        </p>
      </div>
    </div>
  );
}
