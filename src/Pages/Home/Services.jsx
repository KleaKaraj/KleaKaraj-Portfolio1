// Student Name: Klea Karaj
// Student Id: 301369256
// Date: 28 Jan 2024
import data from "../../data/index.json";

export default function Services() {
  return (
    <section className="services--section" id="services">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          
          <h2 className="sections--heading">Services</h2>
        </div>
      </div>
      
        <div className="services--section--container">
        {data?.services?.map((item, index) => (
          <div key={index} className="services--section--card">
            <div className="services--section--img">
    
            </div>
            <div className="services--section--card--content">
              <div>
                <h3 className="services--section--title">{item.title}</h3>
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