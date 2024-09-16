import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ServiceDetail.css";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import Hammers from "../../../src/assets/hammer.png";
import { FaAngleRight } from "react-icons/fa";
import BgImage from "../../../src/assets/service-detail-head-back.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/services`)
      .then((response) => {
        setServicesList(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/services/${id}`)
      .then((response) => {
        setService(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [id]);

  if (!service) {
    return <div>not service data </div>;
  }

  return (
    <div>
      <section className="each__page__head">
        <EachPageHead backgroundImage={BgImage} heading={service.title} />
      </section>

      <div className="serv__detail">
        <div className="container">
          <aside className="serv__detail__left">
            <ul className="list__of__service__detail">
              {servicesList.slice(0, 6).map((servlist) => (
                <motion.li
                  key={servlist.id}
                  variants={fadeIn("left", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <Link
                    to={`/service-detail/${servlist.id}`}
                    className="links__of__serv__detail"
                  >
                    {servlist.title}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="enquiry__sec">
              <img src={Hammers} alt="hammers" className="hammers" />
              <div className="enquiry">
                <motion.h6
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  Need Help?
                </motion.h6>
                <motion.p
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  Find a Handyman In DC For Your Next Task
                </motion.p>
                <Link to="/" className="link__btn">
                  <motion.button
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="btn__detail__enquiry"
                  >
                    Make An Enquiry <FaAngleRight />
                  </motion.button>
                </Link>
              </div>
            </div>
          </aside>
          <section className="service__detail__sec">
            <motion.div
              variants={fadeIn("up", 0.1, 1)}
              initial="hidden"
              animate="show"
              className="detail__img"
              viewport={{ once: false, amount: 0.7 }}
            >
              <img src={service.image} alt="" />
            </motion.div>
            <motion.div variants={fadeIn("up", 0.2)} className="detail__text">
              <motion.h2
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                {service.title}
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                {service.description}
              </motion.p>
              {service.details?.electrical && (
                <motion.div variants={fadeIn("up", 0.3)}>
                  <motion.h5
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    Electrical
                  </motion.h5>
                  <ul>
                    {service.details.electrical.map((detail, id) => (
                      <motion.li
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        key={id}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {service.details?.mechanical && (
                <>
                  <motion.h5
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    Mechanical
                  </motion.h5>
                  <ul>
                    {service.details.mechanical.map((detail, id) => (
                      <motion.li
                        variants={fadeIn("right", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        key={id}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
