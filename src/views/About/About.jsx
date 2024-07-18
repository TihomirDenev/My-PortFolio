import image from '../../assets/about.png';

export default function About() {
  return (
    <div className='flex flex-col items-center my-8'>
      <h1 className='text-2xl font-bold underline'>Let me introduce myself:</h1>
      <div className='flex flex-row items-center w-10/12 mt-4'>
        <div className='text-center text-lg mt-2'>
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
          <p>Apart from coding, I enjoy several other activities:</p>

          <p>🏋🏻‍♂️ Training</p>
          <p>🎒 Traveling</p>
          <p>🎼 Listen Music</p>
          <p>🧮 Play Board Games</p>
          <p>🎥 Watching Good Movies</p>
          <p>🎓 Studying New Technology</p>
          <br />
          <p className='text-primary text-base'>
            <i>
              {`"Approach every task with a positive attitude and a smile,
              striving to improve and excel each time." -TDD`}
            </i>
          </p>
        </div>
        <div>
          <img
            src={image}
            alt='about'
          />
        </div>
      </div>
    </div>
  );
}
