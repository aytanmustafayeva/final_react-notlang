import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import ServiceImg from "../../assets/b5a586314e33996f0406889eea26a0d6.png";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import ServicesAndProjectsItem from "../../Components/ServicesItem/ServicesAndProjectsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
// import { useLanguage, getTranslation } from "../../LangContext/LanguageContext";

const Home = () => {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [partners, setPartners] = useState([]);
  // const { language, changeLanguage } = useLanguage();
  // const { title, buttonText, aboutUs, aboutText } = getTranslation(language);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error 404", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error 404", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/partners")
      .then((response) => {
        setPartners(response.data);
      })
      .catch((error) => {
        console.error("Error 404", error);
      });
  }, []);

  return (
    <div className="Home__Page">
      <section className="section1">
        <motion.div
          initial={{
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
          whileInView={{
            backgroundSize: "110% 110%",
            backgroundPosition: "center top",
          }}
          transition={{ duration: 5, ease: "easeInOut" }}
          className="section1__left"
          viewport={{ once: false, amount: 0.7 }}
        >
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="container"
          >
            <motion.p variants={fadeIn("up", 0.3)}>EMS Contracting</motion.p>
            <motion.h2 variants={fadeIn("up", 0.4)}>
              Delivering first-class commercial maintenance nation wide 24/7
            </motion.h2>
            <motion.button
              variants={fadeIn("up", 0.5)}
              className="btn__enquiry"
            >
              Make An Enquiry
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <section className="about__sec1 container">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="about__sec1__img"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/e567/1821/ec71098de423976dacb7f436dd41ac98?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elgbXgDKK1ddr0zyGuSMvcZu0MvmRLISR9EYrnsS4mi9UoJHvkgWqMnLOoJRJ5e04gQpFtjrWaM8giEONFg7AZLnnnHlSgZgJf4pCKiJJ8gCWbs0S6pdJmLViD~oDzQf-Enwtyjh0ggYhWZFFxRXzHletAWautfakNDkrvsOg~Acra86qCgrCheG-Avm9RIvz6f7saPjVx~Cpp3X6di8ndSmVOdNZ1LiRuRsmFyTlWb2aEctVXBTrTapkwC9Rpii9aL~4YChIYl2AkNIKfZxViM4x20Ni-b5ngBi4tg5~-9wV6LwL4Vubi89irhGLzkq0PI7SL90lM2GlPA1iGARnw__"
            alt=""
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="about__sec1__text"
        >
          <motion.h6
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            About Us
          </motion.h6>
          <motion.h3
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Welcome to EMS Contracting
          </motion.h3>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            EMS Contracting, founded in 2013 by Mick Donkin and Kris Armstrong
            then later joined by key director Daryl Shepherd, incorporates 3
            divisions - Metering, Renewables and Recycling.
          </motion.p>
          <div className="img4__icon">
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
          </div>
          <Link to="/about" className="link__btn">
            <motion.button
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="btn__see__more"
            >
              See More <FaAngleRight />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <section className="projects__sec3">
        <Link to="/projects" className="link__btn">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            Projects
          </motion.h2>
        </Link>
        <motion.div
          className="container"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <Swiper
            spaceBetween={16}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 24,
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <Link
                    to={`/project-detail/${project.id}`}
                    className="link__btn"
                  >
                    <ServicesAndProjectsItem data={project} />
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      <section className="services__sec4">
        <Link to="/services" className="link__btn">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            Services
          </motion.h2>{" "}
        </Link>
        <motion.div
          className="container"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          {" "}
          <Swiper
            spaceBetween={16}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 24,
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <Link
                    to={`/service-detail/${service.id}`}
                    className="link__btn"
                  >
                    <ServicesAndProjectsItem data={service} />
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      <section className="service__blue">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="container"
        >
          <img src={ServiceImg} alt="ServiceImg" />
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            You will be satisfy with our work contact us today & help is on the
            way
          </motion.p>
          <Link className="link__btn">
            <motion.button
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="btn__schedule__service"
            >
              Schedule a Service <FaAngleRight />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <section className="our__partner__sec6">
        <Link to="/contacts" className="link__btn">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Our Partners
          </motion.h2>
        </Link>
        <div className="partners">
          <Swiper
            spaceBetween={16}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 24,
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id} className="partners__list">
                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <Link to="/" className="link__btn">
                    <img
                      src={partner.image}
                      alt="partner-logo"
                      className="partner__logo"
                    />
                  </Link>{" "}
                  <br />
                  <Link to="/" className="link__btn">
                    <img
                      src={partner.image}
                      alt="partner-logo"
                      className="partner__logo"
                    />
                  </Link>{" "}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="contact__sec5">
        <GetInTouch />
      </section>
    </div>
  );
};

export default Home;
