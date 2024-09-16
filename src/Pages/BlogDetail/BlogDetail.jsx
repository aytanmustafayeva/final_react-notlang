import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./BlogDetail.css";
import { Link, useParams } from "react-router-dom";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import BgImage from "../../assets/service-head-back-img.png";
import { FaAngleRight } from "react-icons/fa";
import Hammers from "../../assets/hammer.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogsList, setBlogsList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs`)
      .then((response) => {
        setBlogsList(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [id]);

  if (!blog) {
    return <div>not blog data </div>;
  }
  console.log(blog.image);

  return (
    <div>
      <section className="each__page__head">
        <EachPageHead backgroundImage={BgImage} heading="Blog Detail" />
      </section>
      <div className="blog__detail">
        <div className="container">
          <aside className="blog__detail__left">
            <h2>Others Blogs</h2>
            <ul className="list__of__blog__detail">
              {blogsList.slice(0, 3).map((listofblog) => (
                <motion.li
                  variants={fadeIn("left", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  key={listofblog.id}
                >
                  <Link
                    to={`/blog-detail/${listofblog.id}`}
                    className="links__of__blog1__detail"
                  >
                    <img src={listofblog.image} alt="" />
                    <p>{listofblog.title}<FaAngleRight /> </p> 
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
          <section className="blog__detail__sec">
            <motion.div
              variants={fadeIn("up", 0.1, 1)}
              initial="hidden"
              animate="show"
              className="detail__img"
              viewport={{ once: false, amount: 0.7 }}
            >
              <img src={blog.image} alt="" />
            </motion.div>
            <motion.div variants={fadeIn("up", 0.2)} className="detail__text">
              <motion.h2
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                {blog.title}
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                {blog.description}
              </motion.p>
              {blog.details?.electrical && (
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
                    {blog.details.electrical.map((detail, id) => (
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

              {blog.details?.mechanical && (
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
                    {blog.details.mechanical.map((detail, id) => (
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

export default BlogDetail;
