import "./style.css";

const Activity = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <img src="/assets/square2.png" alt="" className="shape square" />
        <div className="contact-info">
          <h3 className="sub-heading">Activity Timeline</h3>
          <h1 className="heading">That's what I did</h1>
          <p className="text">
            저는 지금까지 다양한 활동들을 통해 경험을 쌓고 성취해 왔습니다!
            이러한 경험은 협업 능력을 향상시키고, 새로운 도전에 대한 적응력을
            키워줬습니다.
          </p>
        </div>
        <div className="activity-card">
          <h3 className="date">20th September, 2019</h3>
          <h1 className="activityHeading">웹디자인기능사 취득 🎨</h1>
          <p>✔︎ 2019.02.01 필기시험 합격</p>
          <p>✔︎ 2019.09.20 실기시험 합격</p>
        </div>
        <div className="activity-card">
          <h3 className="date">December, 2019 ~ June, 2023</h3>
          <h1 className="activityHeading">영상처리 연구실 👬</h1>
          <p>
            <a
              href="https://younj00.github.io/posts/2020-Academic-Seminar/"
              style={{ color: "#222831", borderBottom: "1px solid #222831" }}
            >
              ✔︎ 2020 공과대학 학술제 참여 (금상 🏆)
            </a>
          </p>
          <p>
            <a
              href="https://younj00.github.io/posts/2022-Academic-Seminar/"
              style={{ color: "#222831", borderBottom: "1px solid #222831" }}
            >
              ✔︎ 2022 공과대학 학술제 참여 (금상 🏆)
            </a>
          </p>
          <p>
            <a
              href="https://github.com/IPLaboratory/IPLaboratory_FE"
              style={{ color: "#222831", borderBottom: "1px solid #222831" }}
            >
              ✔︎ 연구실 웹사이트 제작중
            </a>
          </p>
        </div>
        <div className="activity-card">
          <h3 className="date">September, 2020 ~ Febuary, 2021</h3>
          <h1 className="activityHeading">Google Developer Student Clubs 🔥</h1>
          <p>✔︎ Flutter, Design 과정 수료</p>
          <p>
            <a
              href="https://github.com/Healthy-Me"
              style={{ color: "#222831", borderBottom: "1px solid #222831" }}
            >
              ✔︎ 2021 GDSC KR 해커톤 참여 (Top 10 🎖)
            </a>
          </p>
          <p>
            <a
              href="https://github.com/2022-GDSC-Solution-Challenge"
              style={{ color: "#222831", borderBottom: "1px solid #222831" }}
            >
              ✔︎ 2022 GDSC Solution Challenge 참여
            </a>
          </p>
        </div>
        <div className="activity-card">
          <h3 className="date">15th November, 2023</h3>
          <h1 className="activityHeading">정보처리기사 취득 ✍️</h1>
          <p>
            <p>✔︎ 2023.03.21 필기시험 합격</p>
            <p>✔︎ 2023.11.15 실기시험 합격</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Activity;
