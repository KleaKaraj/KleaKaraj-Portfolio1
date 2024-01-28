// Student Name: Klea Karaj
// Student Id: 301369256
// Date: 28 Jan 2024
import data from "../../data/index.json";

export default function Projects() {
  return (
    <section className="projects--section" id="Projects">
      <div className="projects--container-box">
        <div className="projects--container">

          <h1 className="section--heading">My Projects</h1>
        </div>
        <div>

            <a
  href="https://github.com/KleaKaraj"
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn btn-github"
> <span className="btn-text">Visit Git Hub</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 33 33"
    fill="none"
  >

  </svg>
</a>
   
      
        </div>
      </div>
      <div className="projects--section--container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="projects--section--card">
            <div className="projects--section--img">
              { <img src={item.src} alt="Placeholder" /> }
            </div>
            <div className="projects--section--card--content">
              <div>
                <h3 className="projects--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm projects--link">
                {item.link}
               
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}