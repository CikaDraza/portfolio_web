import React, { useEffect, useRef } from "react";
import Layout from "./layout/Layout";
import "./App.scss";
import AboutIlustration from "./assets/icons/AboutIlustration";
import CheckIcon from "./assets/icons/CheckIcon";
import TestemonialSlider from "./components/testemonials_slider/TestemonialSlider";
import axios from "axios";

const cards = [
  {date: 'octobar, 2022', title: 'Weather App', category: 'Web App', tech: ['Web App, Website, React, RestAPI']},
  {date: 'jun, 2023', title: 'Lockey', category: 'Web App', tech: ['Web App, Website, React, RestAPI']},
  {date: 'avgust, 2023', title: 'Collection', category: 'Web App',tech: ['Web App, Website, React, RestAPI']},
  {date: 'octobar, 2022', title: 'Solar Panel Calc', category: 'Web App',tech: ['Web App, Website, React, RestAPI']},
  {date: 'septembar, 2021', title: 'ToDo list', category: 'Web App',tech: ['Web App, Website, React, RestAPI']},
  {date: 'octobar, 2020', title: 'Filmera', category: 'Web Site',tech: 'Web App, Website, React, RestAPI'},
  {date: 'februar, 2024', title: 'Agency BE', category: 'Web Site', tech: ['Web App, Website, React, RestAPI']}
]

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const wrapperRef = useRef(null);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      apikey: import.meta.env.VITE_API_KEY_ELASTIC,
      from: email,
      fromName: name,
      to: import.meta.env.VITE_USER,
      subject: `Message from ${name}`,
      bodyText: message,
      isTransactional: false,
    };

    try {
      const response = await axios.post('https://api.elasticemail.com/v2/email/send', null, {
        params: payload,
      });
      if (response.data.success) {
        setStatus('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      setStatus('Failed to send email.');
    }
  };

  const uniqueCategories = [...new Set(cards.map(card => card.category))];

  const filteredCards = selectedCategory === 'All' ? cards : cards.filter(card => card.category === selectedCategory);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transition = isTransitioning ? 'transform 0.5s ease-in-out' : 'none';
      wrapperRef.current.style.transform = `translateX(-${currentIndex * 400}px)`;
    }
  }, [currentIndex, filteredCards]);

  const handlePrevClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => (prevIndex === 0 ? filteredCards.length : prevIndex - 1));
      setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
          setCurrentIndex(filteredCards.length);
          wrapperRef.current.style.transition = 'none';
          wrapperRef.current.style.transform = `translateX(-${filteredCards.length * 400}px)`;
        }
      }, 500);
    }
  };

  const handleNextClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => (prevIndex + 1) % (filteredCards.length + 2));
      setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex === filteredCards.length + 1) {
          setCurrentIndex(1);
          wrapperRef.current.style.transition = 'none';
          wrapperRef.current.style.transform = `translateX(-1600px)`;
        }
      }, 500);
    }
  };

  return (
    <Layout>
      <section id="hero">
        <div className="code-deco">
          <img src="/code_deco.png" alt="react code" />
        </div>
        <div className="container">
          <div className="heading">
            <h1>
              Web Site Protfolio for React and Webflow Development
            </h1>
          </div>
          <div className="action-buttons">
            <button className="first">My Portfolio</button>
            <button className="second">Download CV</button>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="wrapper">
            <div className="illustration">
              <AboutIlustration />
            </div>
            <div className="about-text">
              <div className="badge">About</div>
              <div className="text">
                <h2>Web Developer</h2>
                <p>I am Kilian, a passionate freelancer from Hamburg, Germany and the founder of LOKKEE STUDIOS, bringing you web development and design from the future. My expertise is developing next-level websites and web applications including full frontend design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="container">
          <div className="work-text">
            <div className="badge">Work</div>
            <div className="text">
              <h2>Dig into my universe</h2>
            </div>
            <div className="select-filter">
              <select name="filter" id="select-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="All">All</option>
                {
                  uniqueCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className="work-carousel">
            <div className="carousel">
              <div ref={wrapperRef} className="wrapper" style={{ transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none' }}>
                <div className="carousel-card">
                  <a href="#">
                    <div className="card-caption">
                      <span className="date">{filteredCards[filteredCards.length - 1]?.date}</span>
                      <h3 className="title">{filteredCards[filteredCards.length - 1]?.title}</h3>
                      <span className="tech">
                        <small>{filteredCards[filteredCards.length - 1]?.tech}</small>
                      </span>
                    </div>
                    <img src="/weather_app.png" alt="card image" className="carousel-img" />
                  </a>
                </div>
                {
                  filteredCards.map((card, i) => (
                    <div key={i} className="carousel-card">
                      <a href="#">
                        <div className="card-caption">
                          <span className="date">{card.date}</span>
                          <h3 className="title">{card.title}</h3>
                          <span className="tech">
                            <small>{card.tech}</small>
                          </span>
                        </div>
                        <img src="/weather_app.png" alt="card image" className="carousel-img" />
                      </a>
                    </div>
                  ))
                }
                <div className="carousel-card">
                  <a href="#">
                    <div className="card-caption">
                      <span className="date">{filteredCards[0]?.date}</span>
                      <h3 className="title">{filteredCards[0]?.title}</h3>
                      <span className="tech">
                        <small>{filteredCards[0]?.tech}</small>
                      </span>
                    </div>
                    <img src="/weather_app.png" alt="card image" className="carousel-img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <button className="prev" onClick={handlePrevClick} disabled={currentIndex === 0}>&#10094;</button>
            <button className="next" onClick={handleNextClick} disabled={currentIndex === filteredCards.length - 1}>&#10095;</button>
          </div>
          <div className="carousel-indicator">
            <div style={{ width: `${(100 / filteredCards.length) * (currentIndex + 1)}%` }} className="steps"></div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="container">
          <div className="skills-text">
            <div className="badge">Skills</div>
            <div className="text">
              <h2>Launching visions, building websites</h2>
              <p>Version Managment: <span>Git, GitHub</span></p>
            </div>
          </div>
          <div className="skills-card">
            <div className="card">
              <h3>Front-end</h3>
              <p>
                Whether you want a web app, paired with a marketing website, or a cross-platform app, I got you covered.
              </p>
              <div className="skill-list">
                <ul>
                  <li>
                    <CheckIcon />
                    <span>HTML</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>CSS</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>SCSS</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>JavaScript</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>React.js</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>Backend</h3>
              <p>
                Whether you want a web app, paired with a marketing website, or a cross-platform app, I got you covered.
              </p>
              <div className="skill-list">
                <ul>
                  <li>
                    <CheckIcon />
                    <span>Node.js</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Express.js</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>Database</h3>
              <p>
                Whether you want a web app, paired with a marketing website, or a cross-platform app, I got you covered.
              </p>
              <div className="skill-list">
                <ul>
                  <li>
                    <CheckIcon />
                    <span>MongoDB</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>MySQL</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>Design UI/UX</h3>
              <p>
                Whether you want a web app, paired with a marketing website, or a cross-platform app, I got you covered.
              </p>
              <div className="skill-list">
                <ul>
                  <li>
                    <CheckIcon />
                    <span>Figma</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Photoshop</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>GIMP</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="container">
          <div className="testimonials-text">
            <div className="badge">Skills</div>
            <div className="text">
              <h2>Launching visions, building websites</h2>
              <p>Version Managment: <span>Git, GitHub</span></p>
            </div>
          </div>
          <div className="slider-block">
            <TestemonialSlider />
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="wrapper">
            <div className="contact-text">
              <div className="badge">Contact</div>
              <div className="text">
                <h2>I am a Web Developer, making websites and apps</h2>
                <p>I can help you solve the problem of business and presentation of your services online</p>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="input-wrapp">
                  <div>
                    <label>Name:</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Message:</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="action-contact">
                  <div className="email-me">
                    <a href="mailto:drazic.milan@gmail.com">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="me-2 inline size-5"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
                      </svg>
                      <span>drazic.milan@gmail.com</span>
                    </a>
                  </div>
                  <div className="submit-button">
                    <button type="submit">
                      Hit me up
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f4f4f4" aria-hidden="true" data-slot="icon" className="ms-2 inline size-5 group-disabled:hidden">
                        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd"></path>
                        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
              {status && <p className="status">{status}</p>}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
