import "./style.css";

const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills-box">
          <div className="box-heading">
            <h3 className="sub-heading">My skills</h3>
            <h1 className="heading">Let me help you</h1>
            <div className="box-desc">
              <p className="text">
                웹디자인기능사 준비를 시작으로 4년이 지난 지금까지 여러
                프로젝트를 경험하며 html를 익혔습니다. <br />
                연구실 프로젝트에서 처음 접하게 되었습니다. 자바스크립트 기반의
                정적타입 문법을 적용해보며 동적인 웹 개발을 위해 시작하게
                되었습니다.
              </p>
              <a href="#" className="btn">
                Hire me
              </a>
            </div>
          </div>
          <div className="skills-wrap">
            <div className="skill">
              <div className="sk-progress">
                <svg>
                  <circle
                    cx="75"
                    cy="75"
                    r="68"
                    strokeDasharray={`${2 * Math.PI * 90 * 0.75} ${
                      2 * Math.PI * 90 * 0.25
                    }`}
                    strokeDashoffset={2 * Math.PI * 30 * 0.25}
                  />
                </svg>
                <h2 className="counter">
                  <span data-target="79">90</span>%
                </h2>
              </div>
              <div className="sk-title">HTML / CSS</div>
            </div>
            <div className="skill">
              <div className="sk-progress">
                <svg>
                  <circle
                    cx="75"
                    cy="75"
                    r="68"
                    strokeDasharray={`${2 * Math.PI * 90 * 0.75} ${
                      2 * Math.PI * 90 * 0.25
                    }`}
                    strokeDashoffset={2 * Math.PI * 90 * 0.25}
                  />
                </svg>
                <h2 className="counter">
                  <span data-target="68">65</span>%
                </h2>
              </div>
              <div className="sk-title">Javascript / Typescript</div>
            </div>
            <div className="skill">
              <div className="sk-progress">
                <svg>
                  <circle
                    cx="75"
                    cy="75"
                    r="68"
                    strokeDasharray={`${2 * Math.PI * 90 * 0.75} ${
                      2 * Math.PI * 90 * 0.25
                    }`}
                    strokeDashoffset={2 * Math.PI * 75 * 0.25}
                  />
                </svg>
                <h2 className="counter">
                  <span data-target="45">70</span>%
                </h2>
              </div>
              <div className="sk-title">React.js</div>
            </div>
            <div className="skill">
              <div className="sk-progress">
                <svg>
                  <circle
                    cx="75"
                    cy="75"
                    r="68"
                    strokeDasharray={`${2 * Math.PI * 90 * 0.75} ${
                      2 * Math.PI * 90 * 0.25
                    }`}
                    strokeDashoffset={2 * Math.PI * 20 * 0.25}
                  />
                </svg>
                <h2 className="counter">
                  <span data-target="80">95</span>%
                </h2>
              </div>
              <div className="sk-title">Figma / Adobe</div>
            </div>
          </div>
          <img src="/assets/dots.png" alt="" className="shape dots" />
          <img src="/assets/square1.png" alt="" className="shape square" />
        </div>
      </div>
    </section>
  );
};

export default Skill;
