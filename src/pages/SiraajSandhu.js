export default function examplePage() {
  return (
    <div className='container'>
      <title>Siraaj's Page</title>
      <link rel='icon' href='/favicon.ico' />

      <main>
        <div className='underline'>
          <h1 className='title'>Siraaj's Page</h1>
        </div>
        <img
          className='pic'
          src='https://cdn.discordapp.com/attachments/943738392280174603/1181022331531968582/57EFB59F-91E0-44DE-B835-7B8F9FF02D8D.jpg?ex=657f8bc2&is=656d16c2&hm=92758b51f8cc079dca74349c66e953d0159b6502445f5026f509bb02dc3cfb90&'
          alt='tom holland'
        />

        <p className='description'>
          I'm Siraaj, a Computer Science and Applied Math double major at CU. Some fields that
          currently interest me are robotics, computer graphics, computer vision, and generally
          anything that combines math and computer science in an interesting way. My most interesting
          experience at CU so far has to be with the CU Robotics (CURO) club because the
          upperclassmen on the team have taught me a lot about embedded system design and how
          software interacts with hardware devices. Outside of school I like to run, hang out with friends,
          or do both at the same time.
        </p>

        <a className='button' href='/'>
          <p> Back to Home Page</p>
        </a>
      </main>

      <style jsx>{`
        .container {
          background-color: black;
          color: white;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 60rem;
          margin: auto;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .underline {
          /* border-bottom: solid black; */
          margin-bottom: 1.5rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .pic {
          height: 300px;
          width: 300px;
        }

        .button {
          /* margin: .5rem; */
          flex-basis: 45%;
          padding: 0.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .button:hover,
        .button:focus,
        .button:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .button p {
          font-size: 1rem;
          font-weight: 600;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color:black;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}