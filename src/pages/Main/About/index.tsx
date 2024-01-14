import "./style.css";
import { FaMagnet } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { FaMarker } from "react-icons/fa6";

import { FcIdea } from "react-icons/fc";
import { FcPuzzle } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";

const About = () => {
  return (
    <section className="about section" id="about">
      <img src="/assets/triangle.png" className="shape triangle" alt="" />
      <div className="container">
        <div className="about-grid">
          <div className="about-card">
            <FcPuzzle size="45" />

            <h3>"따로 또 함께"</h3>
          </div>
          <div className="about-card">
            <FcBriefcase size="45" color="#d65a31" />
            <h3>"성실함"</h3>
          </div>
          <div className="about-card">
            <FcSearch size="45" color="#d65a31" />
            <h3>"꼼꼼함"</h3>
          </div>
          <div className="about-card">
            <FcIdea size="45" />
            <h3>"도전적인"</h3>
          </div>
        </div>
        <div className="about-info">
          <h3 className="sub-heading">About me</h3>
          <h1 className="heading">
            Better person,
            <br /> better experiences
          </h1>
          <p className="text">
            안녕하세요! 저는 작고 사소한 경험이라도 끊임없이 배움을 추구하는
            프론트엔드 개발자를 <br />
            희망합니다. 동료들과의 협업을 통해 새로운 시너지를 찾아내는 것에 큰
            매력을 느끼고 있으며, <br />
            다양한 도전에 적극적으로 참여하여 다채로운 경험을 쌓는 것을
            좋아합니다. <br />
            이러한 열정으로 함께한다면 더 나은 결과물을 만들어낼 수 있을 것이라
            믿습니다. 감사합니다.
          </p>
          <div className="cta">
            <a href="mailto:miroslav.dina@me.com" className="btn">
              Contact me
            </a>
            <a
              href="/assets/miroslavCV.pdf"
              download
              className="btn secondary-btn"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
