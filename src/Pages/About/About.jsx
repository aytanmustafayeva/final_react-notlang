import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";
import AboutImg from "../../../src/assets/90cbb105777de2f4dab98747dd3aa1a7.jfif";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import BgImage from "../../../src/assets/About-Head-img.jfif";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/about/1")
      .then((response) => {
        setAbout(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div>
      <section className="each__page__head">
        <EachPageHead backgroundImage={BgImage} heading="About Us" />
      </section>
      <div className="container">
        {about && (
          <section className="about__middle">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="about__img"
            >
              <img src={AboutImg} alt="About EMS Contracting" />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="about__text"
            >
              <motion.h6 variants={fadeIn("up", 0.4)}>About Us</motion.h6>
              <motion.h3 variants={fadeIn("up", 0.4)}>{about.title}</motion.h3>
              <motion.p variants={fadeIn("up", 0.3)}>
                {about.description}
              </motion.p>
            </motion.div>
          </section>
        )}
        {about && (
          <section className="about__values">
            <motion.h4 variants={fadeIn("up", 0.4)}>
              The EMS Brand Values
            </motion.h4>
            <div className="about__values__container">
              {about.values.map((value) => (
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="about__value1"
                  key={value.value}
                >
                  <div className="about__values__head">
                    <motion.h6 variants={fadeIn("up", 0.4)}>
                      {value.value}
                    </motion.h6>
                    <motion.img
                      ariants={fadeIn("up", 0.3)}
                      src={value.image}
                      alt={value.value}
                    />
                  </div>
                  <motion.p ariants={fadeIn("up", 0.3)}>
                    {value.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default About;
