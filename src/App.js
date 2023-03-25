import logo from './logo.svg';
import './App.css';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'
import NavBar from './NavBar'
import Todo from './Todo';
import { createContext, useState } from 'react';
import {Player} from "@lottiefiles/react-lottie-player"
function App() {
  const [theme , setTheme] =useState("light")


  const tuggleTheme = () => {
    setTheme((current) => (current === "light" ?  "dark" : "light"))

  }

  return (
    <createContext value={{theme, tuggleTheme}}>
    <main className='px-8 md:px-20 lg:px-40' id={theme}>
    <NavBar tuggleTheme={tuggleTheme}  theme={theme} />
    <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
        <Player src='https://assets7.lottiefiles.com/packages/lf20_8pL7DHZXvo.json' className="player"   loop  autoplay layout="fill" objectFit="cover"  />
        <h1 className='text-3xl md:text-5xl font-small text-blue-500 main'>Mario Hernandez</h1>
        <h3 className='text-xl md:text-1xl'>Full-Stack Software Engineer</h3>
        <p className='text-md py-1 text-gray-800 md:text-lg main'>Problem solver and strong communicator eager to prove my value and talent. Motivated to advance and expand my skill set through targeted mentorship and challenging projects.</p>
        <div className='text-5xl py-4 flex justify-center gap-6 text-gray-600 main'>
        <a href='https://www.linkedin.com/in/mario-hernandez-ortega/'><AiFillLinkedin /></a>  
        <a href='https://github.com/maarioherns21'> <AiFillGithub /></a>  
        </div>
    </section>

    <section id='service' className=''>
      <h1 className='text-3xl md:text-4xl text-center '>Development</h1>
      <p className='mt-1 text-md text-center'>Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.</p>
        <br />
      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1 container'>
        <br />
        <Player src='https://lottie.host/dcfad382-e1dd-4f47-aaaa-2f78a252247d/BxpQS1QyXO.json' className="player"  loop  autoplay />
        <br />
          <h2 className='text-xl'>Software Development</h2>
          <ul>
            <li>React</li>
            <li>NodeJS/Express </li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1 container'>
        <Player src='https://assets6.lottiefiles.com/packages/lf20_wuxlxvkh.json' className="player"  loop  autoplay  />
          <h2 className='text-xl'>Cloud & IT Solutions</h2>
          <ul>
            <li>AWS</li>
            <li>Azure</li>
            <li>Google Cloud</li>
          </ul>
        </div>
        
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1 container'>
        <br />
        <Player src='https://lottie.host/eb9dddc0-1446-4d5c-8dce-8215f63695ab/g1h6ujdSTn.json' className="player"  loop  autoplay />
        <br />
          <h2 className='text-xl'>DevOps Architect</h2>
          <ul>
            <li>Gitlab</li>
            <li>GitHub</li>
            <li>Bitbucket</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>

  <br />

    <section id='service' className=''>
      <h1 className='text-3xl md:text-4xl  text-center'>Design</h1>
      <p className='mt-1 text-md text-center'>Well-versed in technology and writing code to create systems that are reliable and user-friendly.</p>
      <br />
      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1 container'>
        <Player src='https://lottie.host/93504ad8-2100-4edb-985b-9b08c0adf485/PfvXiMMdv6.json' className="player"  loop  autoplay />
          <h2 className='text-xl'>Mobile Design</h2>
          <ul>
            <li>Figma</li>
            <li>Sketch</li>
            <li>Mockplus</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1 container'>
        <Player src='https://lottie.host/ec5e7827-ba46-41e0-b334-9ab91aa969ed/IS18uEIvs9.json' className="player"  loop  autoplay />
          <h2 className='text-xl'>Project Tools</h2>
          <ul>
            <li>Trello</li>
            <li>Slack</li>
            <li>Teams</li>
          </ul>
        </div>
      </div>
    </section>

    <section id='license' className='mt-10'>
      <h1 className='text-xl font-medium text-center'>Portfolio</h1>
      <p className='mt-1 text-md text-center'>Here are some of the my projects</p>
      <div className='flex flex-col md:flex-row gap-8 mt-4'>

        <div className='w-full md:w-2/6 shadow-md rounded container' >  
        <a href="https://consciousnessdemo.vercel.app/">
          <div className='h-25 md:h-35 rounded-t-md relative overflow-hidden'>
          <Player src='https://assets2.lottiefiles.com/packages/lf20_OGj20ORrMJ.json' className="player"  loop  autoplay />
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Consious AI</h1>
            <p className=''>Python, OpenAI, AWS Lambda, React.js, Next.js, Tailwind CSSe</p>
            <p className='text-sm text-gray-500'>Mar 2023</p>
          </div> 
          </a>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded  container'>
        <a href="https://admindashboarddemo123.netlify.app/">
          <div className='h-38 md:h-46  rounded-t-md relative overflow-hidden'>
           <Player src='https://assets8.lottiefiles.com/packages/lf20_7MKfz7Qw7x.json' className="player"  loop  autoplay />
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>AdminDemo</h1>
            <p className=''> React.js, Tailwind CSS, Syncfusion library</p>
            <p className='text-sm text-gray-500'>Jan 2023</p>
          </div>
          </a>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded container '>
        <a href="https://memoriesdemo123.netlify.app/posts">
          <div className='h-38 md:h-46  rounded-t-md relative overflow-hidden'>
          <Player src='https://assets3.lottiefiles.com/packages/lf20_BMR47p1pZn.json' className="player"  loop  autoplay />
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Memories</h1>
            <p className=''>MongoDB, Express, React, Node, GoogleAuth, JWT</p>
            <p className='text-sm text-gray-500'>August 2022</p>
          </div>
           </a>
        </div>
      </div>

    </section>
    

    <section id="footer" className='mt-5 rounded bg-black py-8 px-8 container'>
      <div className=' md:text-center'>
        <h1 className='font-medium text-lg'>Contact Me</h1>
    <br />
        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-2'>
            <AiFillMail />
          <a href = "mailto: maarioherns21@gmail.com"> 
            <p>maarioherns21@gmail.com</p></a>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillEnvironment />
            <p>Oakland , CA</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillPhone/>
            <p>(510)309 8611</p>
          </li>
        </ul>
        <br />
        <div className='flex text-xl  gap-4 mt-2 md:justify-center'>
        <a href='https://www.linkedin.com/in/mario-hernandez-ortega/'><AiFillLinkedin /></a>  
        <a href='https://github.com/maarioherns21'> <AiFillGithub /></a>  
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <p className="text-center text-sm text-dark-300 sm:text-center">
          © 2022
          <a href=""> Mario Hernandez</a>. All Rights Reserved.
        </p>
      </div>
    </section>

    </main>
    </createContext>
  );
}

export default App;
