import "./style.css";

import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const Project = () => {
  return (
    <section className="services section" id="services">
      <img src="/assets/triangle.png" alt="" className="shape triangle" />
      <div className="container">
        <div className="services-info">
          <h3 className="sub-heading">My Projects</h3>
          <h1 className="heading">Introduce my project.</h1>
          <p className="text">
            GDSC 활동을 통한 프로젝트 1개와, 졸업논문을 위한 캡스톤 디자인
            프로젝트 <br />
            1개는 팀 프로젝트이며, 포트폴리오 프로젝트 2개는 개인
            프로젝트입니다.
          </p>
          <div className="milestones">
            <div className="ml">
              <h2 className="number">
                <span data-target="11">2</span>+
              </h2>
              <h5 style={{ marginTop: "5px" }}>
                <b>팀</b> 프로젝트
              </h5>
            </div>
            <div className="ml">
              <h2 className="number">
                <span data-target="79">2</span>+
              </h2>
              <h5 style={{ marginTop: "5px" }}>
                <b>개인</b> 프로젝트
              </h5>
            </div>
          </div>
          <div className="cta">
            <a href="#" className="btn">
              Hire me
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
        <div className="services-grid">
          <div className="srv-card">
            <div className="card-desc">
              <h3>
                <b>🪴 "코그로우" 웹 서비스</b>
              </h3>
              <p className="text">
                농작물을 키우는 사람들에게 병충해 진단 및 예방 방법을 알려주고,
                작물 관리를 효율적으로 할 수 있도록 지원하는 웹 서비스입니다.
              </p>
              <a href="https://github.com/Capstone-cogrow">
                <FaGithub
                  size="25"
                  color="#222831"
                  style={{ marginRight: "5px" }}
                />
              </a>
              <a href="https://capstone-cogrow.github.io/cogrow/">
                <IoIosLink size="25" color="#222831" />
              </a>
            </div>
            <a href="#" className="btn secondary-btn">
              Explore More
            </a>
          </div>
          <div className="srv-card">
            <div className="card-desc">
              <h3>
                <b>🐳 "시야" 앱 서비스</b>
              </h3>
              <p className="text">
                'Seaya'는 바다와 전망을 뜻하는 우리말 '시야'의 합성어로,
                해양환경과 해양오염에 대한 관심을 높여줄 수 있는 서비스입니다.
              </p>
              <a href="https://github.com/2022-GDSC-Solution-Challenge">
                <FaGithub
                  size="25"
                  color="#222831"
                  style={{ marginRight: "5px" }}
                />
              </a>
            </div>
            <a href="#" className="btn secondary-btn">
              Explore More
            </a>
          </div>
          <div className="srv-card">
            <div className="card-desc">
              <h3>
                <b>🌐 포트폴리오 1</b>
              </h3>
              <p className="text">포트폴리오 용도로 제작한 웹사이트입니다.</p>
              <a href="https://github.com/YounJ00/Portfolio">
                <FaGithub
                  size="25"
                  color="#222831"
                  style={{ marginRight: "5px" }}
                />
              </a>
              <a href="https://younj00.github.io/Portfolio/">
                <IoIosLink size="25" color="#222831" />
              </a>
            </div>
            <a href="#" className="btn secondary-btn">
              Explore More
            </a>
          </div>
          <div className="srv-card">
            <div className="card-desc">
              <h3>
                <b>🎨 포트폴리오 2</b>
              </h3>
              <p className="text">
                포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이
                웹사이트에 해당합니다.
              </p>
              <a href="https://github.com/YounJ00/Portfolio2">
                <FaGithub
                  size="25"
                  color="#222831"
                  style={{ marginRight: "5px" }}
                />
              </a>
              <a href="https://capstone-cogrow.github.io/cogrow/">
                <IoIosLink size="25" color="#222831" />
              </a>
            </div>
            <a href="#" className="btn secondary-btn">
              Explore More
            </a>
          </div>
          <img src="/assets/square1.png" alt="" className="shape square" />
        </div>
      </div>
    </section>
  );
};

export default Project;
