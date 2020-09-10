import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "../styles/home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <section className={styles.container}>
        <h2 style={{ marginBottom: "40px" }}>
          <FontAwesomeIcon icon={faAddressBook} className={styles.icon} />
          Contact Me
        </h2>
        <div
          style={{
            display: "grid",
            justifyItems: "center",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faPhone} size="2x" className={styles.icon} />
            <span style={{ marginTop: "10px" }}>+387(0)63-664-026</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2x"
              className={styles.icon}
            />
            <span style={{ marginTop: "10px" }}>
              {" "}
              <a target="_blank" href="https://www.linkedin.com/in/omchiii/">
                @omchiii
              </a>{" "}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faGithubAlt}
              size="2x"
              className={styles.icon}
            />
            <span style={{ marginTop: "10px" }}>
              {" "}
              <a target="_blank" href="https://github.com/omchiii">
                @omchiii
              </a>{" "}
            </span>
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <code>
          if (!!true)
          <span style={{ color: "#40e0d0" }}>"I love javascript"</span>
        </code>
      </section>
    </Layout>
  );
};

export default About;
