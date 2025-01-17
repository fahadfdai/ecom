import React from 'react';
    import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaGithub, FaFigma, FaSketch, FaWordpress, FaReact, FaJs, FaCheckCircle, FaClock, FaShieldAlt, FaQuestion } from 'react-icons/fa';
    import { MdSettings, MdList, MdTrendingUp, MdSearch, MdWeb, MdCode, MdOutlineShoppingCart } from "react-icons/md";
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

    function App() {
      return (
        <div>
          <nav>
            <div className="container">
              <div className="logo">
                &lt;/&gt; FDWEBDEV
              </div>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
              <a href="#hire-me" className="hire-me-btn">Hire me!</a>
            </div>
          </nav>

          <section className="hero" id="home">
            <div className="container">
              <div className="hero-content">
                <h1>I am Fahad <br />Web Developer + <br />UI/UX Designer</h1>
                <p>I help Startups to stand out in the crowded market by creating unique and modern websites, So they can differentiate themselves from competitors and attract clients.</p>
                <div className="connect-icons">
                  <a href="#connect"><FaEnvelope /></a>
                  <a href="#connect"><FaGithub /></a>
                  <a href="#connect"><FaLinkedin /></a>
                </div>
                <div className="stats">
                  <div className="stat">
                    <h3>3</h3>
                    <p>YEARS OF EXPERIENCE</p>
                  </div>
                  <div className="stat">
                    <h3>10+</h3>
                    <p>PROJECTS COMPLETED</p>
                  </div>
                  <div className="stat">
                    <h3>30+</h3>
                    <p>HAPPY CLIENTS</p>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <img src="https://placekitten.com/400/500" alt="Fahad" />
              </div>
            </div>
          </section>

          <section className="featured-projects" id="projects">
            <div className="container">
              <h2>Featured Projects</h2>
              <div className="project-grid">
                <div className="project-card">
                  <img src="https://placekitten.com/300/200" alt="Project 1" />
                </div>
                <div className="project-card">
                  <img src="https://placekitten.com/301/200" alt="Project 2" />
                </div>
                <div className="project-card">
                  <img src="https://placekitten.com/302/200" alt="Project 3" />
                </div>
              </div>
            </div>
          </section>

          <section className="services-section" id="services">
            <div className="container">
              <h2>Services</h2>
              <div className="service-grid">
                <div className="service-card">
                  <MdWeb />
                  <h3>Website Development</h3>
                  <p>Create modern and responsive websites optimized for performance and user experience.</p>
                </div>
                <div className="service-card">
                  <MdSearch />
                  <h3>Search Engine Optimization</h3>
                  <p>Improve your website visibility and ranking in search engine results.</p>
                </div>
                <div className="service-card">
                  <MdOutlineShoppingCart />
                  <h3>Social Media Marketing</h3>
                  <p>Engage with your audience and grow your brand presence across social platforms.</p>
                </div>
                <div className="service-card">
                  <MdSettings />
                  <h3>Website Maintenance</h3>
                  <p>Keep your website up-to-date, secure, and running smoothly with regular maintenance.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="skills-section" id="skills">
            <div className="container">
              <h2>Skills</h2>
              <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
              <div className="skill-grid">
                <div className="skill-card">
                  <FaFigma />
                  <p>Figma 92%</p>
                </div>
                <div className="skill-card">
                  <FaSketch />
                  <p>Sketch 80%</p>
                </div>
                <div className="skill-card">
                  <MdCode />
                  <p>XD 85%</p>
                </div>
                <div className="skill-card">
                  <FaWordpress />
                  <p>WordPress 99%</p>
                </div>
                <div className="skill-card">
                  <FaReact />
                  <p>React 89%</p>
                </div>
                <div className="skill-card">
                  <FaJs />
                  <p>JavaScript 93%</p>
                </div>
              </div>
            </div>
          </section>

          <section className="process-section" id="process">
            <div className="container">
              <h2>From Vision to Reality</h2>
              <p>Through strategic planning and expert execution, we transform your concepts into captivating digital experiences that resonate with your audience and drive meaningful results.</p>
              <div className="process-grid">
                <div className="process-card">
                  <h3>01 Discovery Call</h3>
                  <p>We begin by getting to know you, your business goals, and your ideal client. This initial conversation allows us to identify your unique needs and aspirations for your website.</p>
                </div>
                <div className="process-card">
                  <h3>02 Research and Site-Mapping</h3>
                  <p>We delve into in-depth research to understand your target audience, analyze competitor websites, and develop a personalized strategy to help your website stand out. We then create a sitemap to visualize the website's structure and navigation.</p>
                </div>
                <div className="process-card">
                  <h3>03 Creating Wireframe</h3>
                  <p>Based on your vision and the defined strategy, we create wireframes - low-fidelity blueprints - to map out the website's layout and functionality. This ensures a logical flow and user-centric experience before design begins.</p>
                </div>
                <div className="process-card">
                  <h3>04 Website Design in Figma</h3>
                  <p>We translate your brand identity and the key insights from the previous stages into visually stunning and user-friendly website designs using Figma, a collaborative design platform. You'll have the opportunity to provide feedback and collaborate throughout the design process.</p>
                </div>
                <div className="process-card">
                  <h3>05 Website Development</h3>
                  <p>Once the website is thoroughly tested and optimized, we launch it to the world! We also offer ongoing maintenance and support services to maintain your website's security, performance, and ongoing content updates.</p>
                </div>
                <div className="process-card">
                  <h3>06 Launching and Maintenance</h3>
                  <p>We translate your brand identity and the key insights from the previous stages into visually stunning and user-friendly website designs using Figma, a collaborative design platform. You'll have the opportunity to provide feedback and collaborate throughout the design process.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="why-choose-us">
            <div className="container">
              <h2>Why Choose Us?</h2>
              <p>With established SOPs for seamless operations, we ensure efficiency, quality, and consistent results in every project. Trust our proven process to deliver exceptional results.</p>
              <div className="choose-grid">
                <div className="choose-card">
                  <FaClock />
                  <h3>Timely Project Updates</h3>
                  <p>Regular progress updates to stay informed at every stage of your project.</p>
                </div>
                <div className="choose-card">
                  <FaCheckCircle />
                  <h3>Seamless Communication</h3>
                  <p>Stay connected with our team on Slack for ongoing collaboration and regular updates.</p>
                </div>
                <div className="choose-card">
                  <FaShieldAlt />
                  <h3>Satisfaction Guarantee</h3>
                  <p>If our work doesn't meet your expectations, we'll provide refund—no questions asked!</p>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonials-section" id="testimonials">
            <div className="container">
              <h2>Client Testimonials</h2>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <div className="testimonial-card">
                    <div className="client-info">
                      <img src="https://placekitten.com/60/60" alt="Piyush" />
                      <div>
                        <h3>Piyush</h3>
                        <div className="stars">★★★★★</div>
                      </div>
                    </div>
                    <p>"I was impressed by Fahad in-depth knowledge and ability to translate my ideas into a functional and visually appealing website. They were patient with my revisions and always prioritized my satisfaction. I highly..."</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-card">
                    <div className="client-info">
                      <img src="https://placekitten.com/61/61" alt="Neelay Srivastava" />
                      <div>
                        <h3>Neelay Srivastava</h3>
                        <div className="stars">★★★★★</div>
                      </div>
                    </div>
                    <p>"I've worked with numerous Website developers in my career, and Fahad is truly in a league of his own. His mastery of the platform and ability to fine-tune every detail sets him apart. He is not only delivered a stellar..."</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-card">
                    <div className="client-info">
                      <img src="https://placekitten.com/62/62" alt="Lalit Sharma" />
                      <div>
                        <h3>Lalit Sharma</h3>
                        <div className="stars">★★★★★</div>
                      </div>
                    </div>
                    <p>"I'm happy with the website Fahad company. It's professional, user-fo showcases our services. He was re pleasure to work with. Highly reco"</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>

          <section className="faq-section">
            <div className="container">
              <h2>Frequently Asked Questions</h2>
              <div className="accordion">
                <div className="accordion-item">
                  <div className="accordion-header" onClick={(e) => {
                    e.currentTarget.parentElement.classList.toggle('active');
                  }}>
                    <p>What services do you offer?</p>
                    <FaQuestion />
                  </div>
                  <div className="accordion-content">
                    <p>We offer a range of services including website development, search engine optimization, social media marketing, and website maintenance.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={(e) => {
                    e.currentTarget.parentElement.classList.toggle('active');
                  }}>
                    <p>How can a website help me attract more clients?</p>
                    <FaQuestion />
                  </div>
                  <div className="accordion-content">
                    <p>A well-designed website can help you attract more clients by showcasing your services, providing valuable information, and making it easy for potential clients to contact you.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={(e) => {
                    e.currentTarget.parentElement.classList.toggle('active');
                  }}>
                    <p>What are the payment terms for a project?</p>
                    <FaQuestion />
                  </div>
                  <div className="accordion-content">
                    <p>Our payment terms vary depending on the project. We typically require a deposit before starting work and the remaining balance upon completion.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={(e) => {
                    e.currentTarget.parentElement.classList.toggle('active');
                  }}>
                    <p>How do we get started on a project?</p>
                    <FaQuestion />
                  </div>
                  <div className="accordion-content">
                    <p>To get started on a project, simply contact us and we'll schedule a discovery call to discuss your needs and goals.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" onClick={(e) => {
                    e.currentTarget.parentElement.classList.toggle('active');
                  }}>
                    <p>How long does a project take?</p>
                    <FaQuestion />
                  </div>
                  <div className="accordion-content">
                    <p>The timeline for a project varies depending on its complexity. We'll provide you with an estimated timeline during the discovery call.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="refer-earn">
            <div className="container">
              <h2>Refer and Earn</h2>
              <p>Earn up to 10% commission for every successful referral. Help businesses grow with our services and get rewarded for it!</p>
              <a href="#join-referral" className="btn">Join Referral Program</a>
            </div>
          </section>

          <footer>
            <div className="container">
              <div className="footer-column">
                <h4>About</h4>
                <p>We create digital experiences that drive growth and success for your business.</p>
              </div>
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#process">Process</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms of Service</a></li>
                  <li><a href="#cookie">Cookie Policy</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <p><FaEnvelope /> <a href="mailto:workoffahad@gmail.com">workoffahad@gmail.com</a></p>
                <p><FaPhone /> <a href="tel:+923280435933">+92 328 043 5933</a></p>
              </div>
            </div>
            <div className="bottom-bar">
              <p>© 2024 WebCraft. All rights reserved.</p>
            </div>
          </footer>
        </div>
      );
    }

    export default App;
