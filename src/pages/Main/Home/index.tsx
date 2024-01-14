import "./style.css";

const Home = () => {
  return (
    <main>
      <section className="showcase-area" id="home">
        <img src="/assets/square1.png" className="shape square" alt="" />
        <div className="container">
          <div className="showcase-info">
            <h3 className="sub-heading">Frontend / UI Developer</h3>
            <h1 className="heading">Younjin Ham</h1>
            <p className="text">
              I am freelance web developer. Let's work together.
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
          <div className="showcase-image">
            <img
              src="https://github.com/YounJ00/Portfolio2/assets/91127380/13118035-b14a-4fa4-a5d1-8a1308946c12"
              //src="https://github.com/YounJ00/Portfolio2/assets/91127380/87bd9678-42c8-4189-b051-bf7d9b1c0fc6"
              className="person"
              alt="Miroslav"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
