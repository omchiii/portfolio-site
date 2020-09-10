import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faJsSquare, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <section className={styles.container}>
        <h2>
          <FontAwesomeIcon icon={faAddressCard} className={styles.icon} />
          About me
        </h2>
        <p>
          Hi. My name is <b>Omer Bayram</b>. I am 20 years old. I am a{" "}
          <b>Full Stack Web developer</b> that lives in Sarajevo, capital of
          Bosnia and Herzegowina. I am a second year IT student doing distance
          learning.
        </p>
      </section>
      <section className={styles.container}>
        <h2>
          <FontAwesomeIcon icon={faJsSquare} className={styles.icon} />
          Tech Stack
        </h2>

        <div className={styles.techStack}>
          <div className={styles.techStackChild}>
            <FontAwesomeIcon
              icon={faDatabase}
              size="2x"
              className={styles.icon}
            />
            MongoDb
          </div>
          <div className={styles.techStackChild}>
            <FontAwesomeIcon icon={faNode} size="2x" className={styles.icon} />
            Express.js
          </div>
          <div className={styles.techStackChild}>
            <FontAwesomeIcon icon={faReact} size="2x" className={styles.icon} />
            React
            <span style={{ fontSize: "0.7rem", textDecoration: "italic" }}>
              Gatsby,Next
            </span>
          </div>
          <div className={styles.techStackChild}>
            <FontAwesomeIcon
              icon={faNodeJs}
              size="2x"
              className={styles.icon}
            />
            Node.js
          </div>
          <div className={styles.techStackChild}>
            <FontAwesomeIcon
              icon={faJsSquare}
              size="2x"
              className={styles.icon}
            />
            Redux.js
          </div>
          <div className={styles.techStackChild}>
            <FontAwesomeIcon
              icon={faJsSquare}
              size="2x"
              className={styles.icon}
            />
            TypeScript
          </div>

          <div className={styles.techStackChild}>
            <FontAwesomeIcon icon={faGit} size="2x" className={styles.icon} />
            Git
          </div>
          <div className={styles.techStackChild}>
            <FontAwesomeIcon
              icon={faJsSquare}
              size="2x"
              className={styles.icon}
            />
            JavaScript
          </div>

          <div className={styles.techStackChild}>
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="2x"
              className={styles.icon}
            />
            CSS
          </div>
          <div className={styles.techStackChild}>
            <FontAwesomeIcon icon={faHtml5} size="2x" className={styles.icon} />
            HTML
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
