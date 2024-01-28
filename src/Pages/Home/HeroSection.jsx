
// Student Name: Klea Karaj
// Student Id: 301369256
// Date: 28 Jan 2024
export default function HeroSection() {
    return (
      <section id="herosection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Klea Karaj</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">AI Student</span>{" "}
              <br />
          
            </h1>
            <p className="hero--section-description">
              To know more about me scroll down.
             
            </p>
          </div>
          
        </div>
        <div className="hero--section--img">
          <img src="./img/image1.jpg" alt="hero Section" />
        </div>
      </section>
    );
  }