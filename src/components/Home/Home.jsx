import React from "react";
import { useEffect, useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

const Home = () => {
  const [menuToggler, setMenuToggler] = useState(false);
  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const onScroll = () => setOffset(window.pageYOffset);
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <div className="landing__app-wrapper">
      <nav>
        <Container>
          <div className="navbar__inner">
            <Link to="/" className="logo">
              <img
                src="/assets/images/logo-colored.png"
                alt="Unleash by Erience"
                className="img-fluid"
              />
              <span>Unleash</span>
            </Link>
            <ul className={`menus ${menuToggler ? "active" : ""}`}>
              <li
                className="resp__closer"
                onClick={() => setMenuToggler(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </li>
            </ul>
            <div className="buttons-wrapper">
              <div className="dropdown_list-module">
                <div className="dropdown-button">
                  <img
                    src="/images/icons/flags/1.png"
                    alt=""
                    className="img-fluid"
                  />
                  EN
                </div>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <img
                      src="/images/icons/flags/1.png"
                      alt=""
                      className="img-fluid"
                    />
                    English
                  </li>
                  <li className="dropdown-item">
                    <img
                      src="/images/icons/flags/5.png"
                      alt=""
                      className="img-fluid"
                    />
                    French
                  </li>
                  <li className="dropdown-item">
                    <img
                      src="/images/icons/flags/3.png"
                      alt=""
                      className="img-fluid"
                    />
                    Spanish
                  </li>
                  <li className="dropdown-item">
                    <img
                      src="/images/icons/flags/2.png"
                      alt=""
                      className="img-fluid"
                    />
                    German
                  </li>
                  <li className="dropdown-item">
                    <img
                      src="/images/icons/flags/4.png"
                      alt=""
                      className="img-fluid"
                    />
                    Italian
                  </li>
                  <li className="dropdown-item">
                    <img
                      src="/images/icons/flags/6.png"
                      alt=""
                      className="img-fluid"
                    />
                    Chinese
                  </li>
                  <li className="dropdown-item">
                    <img
                      src="/images/icons/flags/7.png"
                      alt=""
                      className="img-fluid"
                    />
                    Japanese
                  </li>
                  <li className="dropdown-item">
                    <img
                      src="/images/icons/flags/8.png"
                      alt=""
                      className="img-fluid"
                    />
                    Korean
                  </li>
                  <li className="dropdown-item">
                    <img
                      src="/images/icons/flags/9.png"
                      alt=""
                      className="img-fluid"
                    />
                    Indonesian
                  </li>
                  <li className="dropdown-item">
                    <img
                      src="/images/icons/flags/10.png"
                      alt=""
                      className="img-fluid"
                    />
                    Turkish
                  </li>
                </ul>
              </div>
              <Link to="/editor" className="btn btn-primary">
                LAUNCH UNLEASH
              </Link>
              <div
                className="resp__toggler"
                onClick={() => setMenuToggler(true)}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      <section className="banner">
        <Container>
          <div className="intro">
            <div className="row gy-5">
              <div className="col-md-12 col-lg-8 mx-auto">
                <h1>
                  <span>Unleash</span> Your Creativity: Effortless Design,
                  Unforgettable Posts
                </h1>
                <p>
                  The revolutionary tool 🚀 that transforms your ideas 💡 into
                  unique and captivating social media graphics 🎨 with just a
                  few clicks. Designed for creators who value innovation 🔍 and
                  time ⏰, Unleash empowers you to stand out effortlessly ✨.
                  Elevate your social media presence today 📆 and make every
                  post a masterpiece 🖼.
                </p>
                <div className="text-center">
                  <Link to="/editor" className="btn btn-primary d-inline-flex">
                    LAUNCH UNLEASH
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section id="features">
        <Container fluid>
          <div className="row">
            <div className="col-md-12 col-lg-6 mx-auto">
              <div className="section__title">
                <p>Features</p>
                <h2>Chat Smarter, Not Harder with Brainwave</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2.6,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3.2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4.2,
                    spaceBetween: 30,
                  },
                }}
                modules={[Pagination]}
                className="features__slider"
              >
                <SwiperSlide>
                  <div className="card-primary">
                    <div className="card-body">
                      <h5>Easy to Use</h5>
                      <p>
                        Our tool is super easy to use, allowing anyone to make
                        amazing posts without needing to be a design expert.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-primary">
                    <div className="card-body">
                      <h5>Smart Resize</h5>
                      <p>
                        Our smart resize feature automatically adjusts your
                        design elements so everything looks just right, saving
                        you time and hassle.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-primary">
                    <div className="card-body">
                      <h5>Colors & Fonts Made Easy</h5>
                      <p>
                        We've picked out great colors and fonts for you, so you
                        can easily make designs that look fantastic together.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-primary">
                    <div className="card-body">
                      <h5>Make It Yours</h5>
                      <p>
                        Customize your post templates to match your style or
                        brand, keeping your look consistent on all social media.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-primary">
                    <div className="card-body">
                      <h5>Export Your Way</h5>
                      <p>
                        Whether you need a high-quality PDF or JPGs for your
                        posts, our tool lets you export easily, matching the
                        requirements of different platforms.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </section>

      {/* <section id="pricing">
        <Container>
          <div className="row">
            <div className="col-md-12 col-lg-6 mx-auto">
              <div className="section__title">
                <p>Get Started with Brainwave</p>
                <h2>Pay once, use forever</h2>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-md-12 col-lg-4">
              <div className="pricing__card">
                <div className="card-body">
                  <div className="package">
                    <div className="package-content">
                      <h5>Basic</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis, maiores!
                      </p>
                      <h2>
                        <span>$</span>0
                      </h2>
                    </div>
                    <button type="button" className="btn btn-primary w-100">
                      Get Started
                    </button>
                  </div>
                  <div className="package-details">
                    <ul className="package-list">
                      <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur, aperiam?
                      </li>
                      <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur, aperiam?
                      </li>
                      <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur, aperiam?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="pricing__card">
                <div className="card-body">
                  <div className="package">
                    <div className="package-content">
                      <h5>Premium</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis, maiores!
                      </p>
                      <h2>
                        <span>$</span>9.99
                      </h2>
                    </div>
                    <button type="button" className="btn btn-primary w-100">
                      Get Started
                    </button>
                  </div>
                  <div className="package-details">
                    <ul className="package-list">
                      <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur, aperiam?
                      </li>
                      <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur, aperiam?
                      </li>
                      <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur, aperiam?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="pricing__card">
                <div className="card-body">
                  <div className="package">
                    <div className="package-content">
                      <h5>Enterprise</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis, maiores!
                      </p>
                    </div>
                    <button type="button" className="btn btn-secondary w-100">
                      Contact Us
                    </button>
                  </div>
                  <div className="package-details">
                    <ul className="package-list">
                      <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur, aperiam?
                      </li>
                      <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur, aperiam?
                      </li>
                      <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur, aperiam?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      <section>
        <Container>
          <div className="text-has-circle-bg">
            <div className="circles-outer">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="content text-center">
              <div className="row flex-column">
                <div className="col-md-12 col-lg-8 mx-auto">
                  <h2>
                    <span>Unleash</span> = Your Creative Partner
                  </h2>
                </div>
                <div className="col-md-12 col-lg-6 mx-auto">
                  <p>
                    It empowers you to bring your social media vision to life
                    with ease 🛠️ and flair 💫. With its intuitive design
                    features 🎨, smart automation 🤖, and customizable options
                    🎛️. Dive into a world 🌍 where design meets simplicity 🍃,
                    and let your creativity soar 🚀 without limits 🚫.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <footer>
        <Container>
          <div className="footer-body">
            <div className="logo">
              <img
                src="/assets/images/logo-white.svg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Unleash by Erience</p>
            <div className="social_links">
              <a
                href="https://twitter.com/erienceINT"
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://in.linkedin.com/company/erience"
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="m-0">
              Made with ❤️ from{" "}
              <a
                href="https://erience.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Erience Solutions
              </a>
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
