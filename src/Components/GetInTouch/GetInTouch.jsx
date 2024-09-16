import React from "react";
import { Link } from "react-router-dom";
import "./GetInTouch.css";
import PhoneIcon from "../../assets/phone-call.png";
import FaxIcon from "../../assets/fax.png";
import EmailIcon from "../../assets/email.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const GetInTouch = () => {
  return (
    <div className="getintouch__backcolor">
      <div className="getintouch__map container">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="get__in__touch"
        >
          <motion.h4 variants={fadeIn("up", 0.4)}>
            Get in <span>Touch</span>
          </motion.h4>
          <motion.p variants={fadeIn("up", 0.3)}>
            Services from us are trusted, reliable and professional. Please fill
            out the form completely, and we will get back to you as soon as
            possible
          </motion.p>

          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            action=""
            className="form"
          >
            <motion.input
              variants={fadeIn("up", 0.3)}
              type="text"
              placeholder="Name*"
            />
            <motion.input
              variants={fadeIn("up", 0.3)}
              type="email"
              placeholder="Email"
            />
            <motion.input
              variants={fadeIn("up", 0.3)}
              type="tel"
              placeholder="Phone Number *"
            />
            <motion.select variants={fadeIn("up", 0.3)}>
              <option value="How did you find us?">How did you find us?</option>
              <option value="Social Media">Social Media</option>
              <option value="Social Media">Social Media</option>
              <option value="Social Media">Social Media</option>
            </motion.select>
            <motion.button variants={fadeIn("up", 0.5)} className="btn__send">
              send
            </motion.button>
          </motion.form>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="tel__fax__email"
          >
            <div className="phone">
              <img src={PhoneIcon} alt="" />
              <div className="contact__icon__text">
                <motion.h6 variants={fadeIn("up", 0.4)}>PHONE</motion.h6>
                <Link className="contact__link link__btn">03 5432 1234</Link>
              </div>
            </div>
            <div className="fax">
              <img src={FaxIcon} alt="" />
              <div className="contact__icon__text">
                <motion.h6 variants={fadeIn("up", 0.4)}>FAX</motion.h6>
                <Link className="contact__link link__btn">03 5432 1234</Link>
              </div>
            </div>
            <div className="email">
              <img src={EmailIcon} alt="" />
              <div className="contact__icon__text">
                <motion.h6 variants={fadeIn("up", 0.4)}>EMAIL</motion.h6>
                <Link
                  className="contact__link link__btn"
                  to="/info@marcc.com.au"
                >
                  info@marcc.com.au
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="map"
        ></motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
