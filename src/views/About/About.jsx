import image from '../../assets/Additional/about.png';
import frontImg from '../../assets/Certificates/JavaScriptFrontSide.png';
import backImg from '../../assets/Certificates/JavaScriptBackSide.png';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function About() {
  return (
    <div className='flex flex-col items-center my-6 text-lg px-4 md:px-0'>
      <h1 className='text-2xl font-bold underline'>
        👦🏻 Let me introduce myself:
      </h1>
      <div className='flex flex-col md:flex-row items-center w-full md:w-10/12 mt-4'>
        <div className='text-center mt-2 md:mr-4'>
          <p>
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
          <p>I am fluent in classics like Javascript.</p>
          <p>
            My field of interest includes building new web technologies, Single
            Page Applications (SPA), and products. Whenever possible, I apply my
            passion for developing products with Node.js and modern JavaScript
            libraries and frameworks like Angular and React.
          </p>
          <br />
        </div>
        <div className='mt-4 md:mt-0'>
          <img
            src={image}
            alt='about'
            className='max-h-full md:max-h-md'
          />
        </div>
      </div>
      <div className='flex flex-col items-center mt-8'>
        <h1 className='text-2xl font-bold underline'>
          🎓 Education and Other Interests:
        </h1>
        <div className='flex flex-col md:flex-row items-center text-center mt-8 w-full md:w-10/12'>
          <div className='md:mr-10 mb-6 md:mb-0'>
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
              📒 Telerik Academy: Completed Alpha JavaScript Track.
            </p>
            <p className='mb-2'>
              📘 Technical University of Sofia: Bachelor of Automatic.
            </p>
            <p className='mb-2'>
              📕 Science and Mathematics High School: Informatics.
            </p>
          </div>
        </div>
        <br />
        <div className="font-bold flex flex-col items-center gap-8">
          <h1 className="text-2xl font-bold underline">📑 Certificate: </h1>
          <div className="flex flex-col md:flex-row">
            <a
              href={frontImg}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 md:mb-0 md:mr-5"
            >
              <img
                src={frontImg}
                alt="front"
                className="h-64 md:h-96 border-2 border-black shadow-2xl duration-300 hover:scale-105"
              />
            </a>
            <a href={backImg} target="_blank" rel="noopener noreferrer">
              <img
                src={backImg}
                alt="back"
                className="h-64 md:h-96 border-2 border-black shadow-2xl duration-300 hover:scale-105"
              />
            </a>
          </div>

          <a
            href="https://learn.telerikacademy.com/mod/customcert/verify_certificate.php?contextid=99501&code=Tr2RLTAtHx&qrcode=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 btn btn-accent shadow-2xl"
          >
            Show Credential <FaArrowUpRightFromSquare />
          </a>
        </div>

        <p className='text-primary text-center text-base mt-6 px-4'>
          <i>
            {`"Approach every task with a positive attitude and a smile,
              striving to improve and excel each time." -TDD`}
          </i>
        </p>
      </div>
    </div>
  );
}
