import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const About = () => {
  return (
    <div className="About">
      <div className="AContainer">
        <div className="intro">
          <div className="i-left">
            <div className="i-name">
              <span style={{ color: "rgb(3, 89, 89)" }}>
                Dalily Website Professional services in medicine, law, and
                design.{" "}
              </span>

              <span
                className="i-desc"
                style={{
                  fontSize: "20px",
                  marginTop: "12px",
                  color: "rgba(128, 128, 128, 0.666)",
                  fontWeight: "400",
                }}
              >
                This website helps person obtain assistance in the following
                fields
              </span>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "12px",
                  color: "rgba(128, 128, 128, 0.666)",
                  fontWeight: "400",
                  marginTop: "0",
                }}
              >
                medical, design, and Laws
              </p>
            </div>
            <button className=" button i-button">Get Started</button>
          </div>
          <div className="i-right">
            <img src="../../../public/images/Aboutimg.png" alt="About Image" />
          </div>
        </div>
        <div className="ASection2">
          <div className="AboutSCon">
            <div className="AStop">
              <h2 style={{ borderBottom: "5px solid green" }}>Team Members</h2>
            </div>
            <div class="ASbottom">
              <div className="StatCard">
                <img src="../../../public/images/man.avif" />
                <p style={{ fontSize: "1.5rem" }}> Yousef Sabry</p>
                <p style={{ fontSize: "1.2rem" }}> FrontEnd Dev</p>
                <div className="icons">
                  <FaGithub />
                  <FaLinkedinIn />
                </div>
              </div>
              <div className="StatCard">
                <img src="../../../public/images/man.avif" />
                <p style={{ fontSize: "1.5rem" }}> Mahmoud Saffan</p>
                <p style={{ fontSize: "1.2rem" }}> FrontEnd Dev</p>
                <div className="icons">
                  <FaGithub />
                  <FaLinkedinIn />
                </div>
              </div>
              <div className="StatCard">
                <img src="../../../public/images/man.avif" />
                <p style={{ fontSize: "1.5rem" }}> Eman Marey</p>
                <p style={{ fontSize: "1.2rem" }}> FrontEnd Dev</p>
                <div className="icons">
                  <FaGithub />
                  <FaLinkedinIn />
                </div>
              </div>
              <div className="StatCard">
                <img src="../../../public/images/man.avif" />
                <p style={{ fontSize: "1.5rem" }}> Ayman Emad</p>
                <p style={{ fontSize: "1.2rem" }}> BackEnd Dev</p>
                <div className="icons">
                  <FaGithub />
                  <FaLinkedinIn />
                </div>
              </div>
              <div className="StatCard">
                <img src="../../../public/images/man.avif" />
                <p style={{ fontSize: "1.5rem" }}> Asmaa Abd Elraouf</p>
                <p style={{ fontSize: "1.2rem" }}> BackEnd Dev</p>
                <div className="icons">
                  <FaGithub />
                  <FaLinkedinIn />
                </div>
              </div>
              <div className="StatCard">
                <img src="../../../public/images/man.avif" />
                <p style={{ fontSize: "1.5rem" }}> Gammal Ayman</p>
                <p style={{ fontSize: "1.2rem" }}> Data Analyst Dev</p>
                <div className="icons">
                  <FaGithub />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="third">
          <div className="thirdCon">
            <div className="thirdL" style={{}}>
              <img src="../../../public/images/logo.webp" />
            </div>
            <div className="thirdR">
              <h2>OUR MISSION</h2>
              <div className="missionList">
                <span style={{ fontSize: "100px", color: "green" }}>‘‘</span>
                <p style={{ fontSize: "22px", marginTop: "-4rem" }}>
                  <ul>
                    <li>● Enable User to Login easily.</li>
                    <li>● Enable User to khow services easily</li>
                    <li>● Enable User to connect easily with Doctor .</li>
                    <li>● Enable User to connect easily with Lawer .</li>

                    <li>● Enable User to connect easily with Design .</li>
                  </ul>
                </p>

                <span
                  style={{
                    fontSize: "100px",
                    float: "right",
                    marginTop: "-4rem",
                    color: "green",
                  }}
                >
                  ,,
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
