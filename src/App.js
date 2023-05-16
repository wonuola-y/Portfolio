import "./App.css";

import img from './components/images/imgfour.jpg';
import 'animate.css';
import { useState } from "react";

function App() {

const cards = [
      {
        id: 1,
        img: 'imgsix',
        name:'Gear Landing Page ',
        description: ' A simple landing made with React Js',
        em: 'An image from unsplash not a thumbnail',
        alt: '',
        code:'https://github.com/wonuola-y/gear',
        href:'https://gear-two.vercel.app/'
    },
     {
        id: 3,
        img: 'imgthirteen',
        name:'Metabnb ',
        description: 'A responsive web app for a demo metabnb built with React Js and Tailwind ',
        em: 'An image from unsplash not a thumbnail',
        alt: '',
        code:'https://github.com/wonuola-y/Metabnd',
        href:'https://metabnd.vercel.app/'
    },
     {
        id: 4,
        img: 'imgnine',
        name:'Snap landing page ',
        description: ' A simple website made with Vanilla Js an CSS',
        em: 'An image from unsplash not a thumbnail',
        alt: '',
        code:'https://github.com/wonuola-y/intro-section-with-dropdown-navigation-main',
        href:'https://intro-section-with-dropdown-navigation-main-six.vercel.app/'
    },
     {
        id: 5,
        img: 'imgeleven',
        name:'Clipboard',
        description: 'A landing page demo made Vanilla Js and CSS  ',
        em: 'An image from unsplash not a thumbnail',
        alt: '',
        code:'https://github.com/wonuola-y/clipboard',
        href:'https://clipboard-rho-bay.vercel.app/'
    },
     {
        id: 6,
        img: 'loopStudios',
        name:'Loop Studios',
        description: ' A home page demo made with Vanilla JS and SASS ',
        em: 'An image from unsplash not a thumbnail',
        alt: '',
        code:'https://github.com/wonuola-y/loopstudios-landing-page',
        href:'https://dapper-cucurucho-a933b8.netlify.app/'
    },
    {
      id: 7,
      img: 'imgeight',
      name:'EasyBank',
      description: ' A home page demo made with JS ',
      em: 'An image from unsplash not a thumbnail',
      alt: '',
      code:'https://github.com/wonuola-y/easy-bank-landing-page',
   href:'https://easy-bank-landing-page-eight.vercel.app/'
  },
  {
    id: 8,
    img: 'imgseven',
    name:'CrowdFund ',
    description: ' A landing page demo made with JS and CSS ',
    em: 'An image from unsplash not a thumbnail',
    alt: '',
    code:'https://github.com/wonuola-y/crowdfund',
    href:'https://crowdfund-pied.vercel.app/'
},
{
  id: 2,
  img: 'imgfouteen',
  name:'Vue Repo page',
  description: 'Built Vue, Fetch Api and CSS. A web app that automatically fetches my repositories from github.',
  em: 'An image from unsplash not a thumbnail',
  alt: '',
  code:'https://github.com/wonuola-y/Alt-school-Vue-github-repo',
href:'https://alt-school-vue-github-repo.vercel.app/'
},

]
  // responsive nav bar
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // to toggle between open and closed navbar
  const showNavBar = () => {
    setIsNavExpanded(!isNavExpanded);
  };
// const [cards, setCard] = useState(initialCard);
  return (
    <div className="App">
      <header className="intro">
        <nav className="header" >
          {/* hamburger  */}
          <img src="https://img.icons8.com/?size=512&id=59832&format=png" alt="menu" className="menu" onClick={showNavBar} />
          <h1 className="animate__animated animate__fadeInLeftBig">Wonuola Alonge</h1>
          <div className='desktop-nav'>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Project">Projects</a></li>
          </ul>

          <ul className="links">
            <li>
              <img
                src="https://img.icons8.com/?size=2x&id=rUgzXdXFnhmg&format=png"
                alt="gmail"
              />
            </li>
            <li>
              <img
                src="https://img.icons8.com/?size=2x&id=AZOZNnY73haj&format=png"
                alt="github"
              />
            </li>
            <li>
              <img
                src="https://img.icons8.com/?size=512&id=8824&format=png"
                alt="twitter"
              />
            </li>
          </ul>
          </div>
        </nav>

        <div className={isNavExpanded ? "nav expanded" : "nav"}>
<img src="https://img.icons8.com/?size=2x&id=3062&format=png" alt="cancel" onClick={showNavBar} />
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="#About">About</a></li>
  <li><a href="#Project">Projects</a></li>
</ul>

<ul className="links">
  <li>
    <img
      src="https://img.icons8.com/?size=2x&id=rUgzXdXFnhmg&format=png"
      alt="gmail"
    />
  </li>
  <li>
    <img
      src="https://img.icons8.com/?size=2x&id=AZOZNnY73haj&format=png"
      alt="github"
    />
  </li>
  <li>
    <img
      src="https://img.icons8.com/?size=512&id=8824&format=png"
      alt="twitter"
    />
  </li>
</ul>
</div>
      </header>

      <main>
        <section className="main-header">
          <div className="intro-contain">
          <div>
            <b className="animate__animated animate__fadeInLeftBig">Hi, I'm Wonuola</b>
            <h2>A front-end  developer</h2>
            <p>based in Lagos Nigeria</p>
            <a href="Resume">
              <a href="https://docs.google.com/document/d/1BAg4AfWDIeQYCSgkBbXBZWKqjmLAnRfcTojiujMY6XA/edit?usp=sharing" className="fstbtn">Resume</a>
            </a>
          </div>
          <div>
            
          </div>
          </div>
        </section>

        <section className="about" id="About">
          <div>
            <h2 className="heading animate__animated animate__fadeInLeftBig">about</h2>
            <p className="head">
              Hi there! My name is Wonuola Alonge and I'm a frontend developer
              with intermediate level experience. I have a passion for designing
              and building intuitive, user-friendly websites and applications.
            </p>

            <section className="aside">
            <div>
            <div className="aside-contents">
                <h4 className="years"> 2020</h4>
                <img src="https://img.icons8.com/?size=2x&id=Zc4kstyWP69H&format=png" alt="arrow down" className="arrow" />
                <p className="subtext">
                  My journey in web development started a few years ago when I
                  fell in love with the idea of creating beautiful and
                  responsive web experiences that can be enjoyed by users all
                  over the world. Since then, I have been honing my skills and
                  expanding my knowledge in HTML, CSS, JavaScript, and other
                  related technologies.
                </p>
              </div>
              <div className="aside-contents">
                <h4 className="years"> 2021</h4>
                <img src="https://img.icons8.com/?size=2x&id=Zc4kstyWP69H&format=png" alt="arrow down" className="arrow" />
                <p className="subtext">No code. School only </p>
              </div>
              <div className="aside-contents">
                <h4 className="years"> 2022</h4>
                <img src="https://img.icons8.com/?size=2x&id=Zc4kstyWP69H&format=png" alt="arrow down" className="arrow" />
                <p className="subtext">
                  As an intermediate level frontend developer, I have experience
                  in creating responsive and adaptive layouts, writing clean and
                  efficient code, and implementing various frontend frameworks
                  and libraries. I'm proficient in working with popular
                  front-end frameworks like React, Vue, and have worked with
                  various CSS frameworks like Bootstrap, Tailwind, and Material
                  UI.
                </p>
              </div>
            </div>
            </section>
            <div className="about" style={{ display: "none" }}>
              What I enjoy most about frontend development is the ability to
              create something that not only looks great, but also provides a
              seamless user experience. I'm always striving to improve my skills
              and stay up-to-date with the latest trends and best practices in
              the industry. Apart from web development, I'm also interested in
              design and user experience, and I believe that good design is
              essential for any successful website or application. I have
              experience working with design tools like Sketch and Figma, and I
              believe that a good eye for design is a valuable asset for any
              frontend developer. Overall, I'm a motivated and passionate
              developer who is committed to creating high-quality and engaging
              web experiences. If you're looking for someone to join your team
              and help bring your ideas to life, I would love to connect and see
              how I can help.
            </div>
            <section id="Project">
              <h2 className="heading animate__animated animate__fadeInLeftBig"> projects</h2>
              <p>Let's dive into my pool of past projects</p>
              <div className="cardContain">
                <div className="cardPage">
                    {cards.map(card => {
                            return (
                              <>
                              <div className="cardcon" key={card.id}>
                                <img src={require('./components/images/'+card.img+'.png')} alt={card.alt} />
                               
                                <div>
                                
                                <h4> {card.name}</h4>
                  
                  <p>{card.description}</p>
                <div className="btns">
                <a href={card.href} className="btn">View Project</a>
                  <a href={card.code} className='btn'>Source code</a>

                </div>
                                </div>
                              </div>

                              </>
                            )
                          })}
                          
                 
                </div>
              </div>
             <div className="contact">
             <p>Like what you see?</p>
              <button><a href="https://twitter.com/Wonuola_w" >Get in touch</a></button>
             </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
