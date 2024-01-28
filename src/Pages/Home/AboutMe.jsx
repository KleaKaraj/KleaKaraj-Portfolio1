// Student Name: Klea Karaj
// Student Id: 301369256
// Date: 28 Jan 2024
export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/image2.png" alt="About Me" style={{ width: '500px', height: 'auto' }} />
        </div>
        <div className="home--section--content--box about--section--box">
          <div className="home--section--content">

            <h1 className="skills-section--heading">About Me</h1>
            <p className="home--section-description">
              <br /> <br />I am Klea Karaj. Currently I am Software Engineering -Artificial Intelligence Student at Centennial College.
              I have finished my bachelor studies for Computer Engineering at Epoka University.
              As a student I am gaining hand-on experience in areas like programming, software design and web development.
            </p>
            <p className="home--section-description">
             <br /> Feel free to contact me.
            </p>
          </div>
        </div>
      </section>
    );
}