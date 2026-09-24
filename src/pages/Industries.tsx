
import autoParts from '../assets/industries/auto_parts.png';
import railwayParts from '../assets/industries/railway_parts.png';
import handicrafts from '../assets/industries/handicrafts.png';
import buttonMachine from '../assets/industries/button_machine.png';
import electricPanel from '../assets/industries/electric_panel.png';
import pullers from '../assets/industries/pullers.png';
import './Industries.css';

const industriesData = [
  {
    title: "Automobiles Parts",
    description: "High precision, durable metal components manufactured using advanced CNC and Kharad machines. Designed to meet the strict tolerances and heavy-duty demands of the modern automotive industry.",
    image: autoParts
  },
  {
    title: "Railway Parts",
    description: "Rugged and resilient steel parts engineered specifically for the railway sector. We deliver robust components that guarantee safety and longevity under extreme loads.",
    image: railwayParts
  },
  {
    title: "Handicrafts",
    description: "We bring industrial precision to artistic design. Our custom machined metal handicrafts combine structural integrity with beautiful, detailed aesthetics for premium decorative items.",
    image: handicrafts
  },
  {
    title: "Polyester Button Machine Parts",
    description: "Intricate, small-scale precision parts, gears, and molds specifically designed for industrial polyester button manufacturing machines. Ensuring smooth operation and zero downtime.",
    image: buttonMachine
  },
  {
    title: "Electric Panel Parts",
    description: "Custom machined fasteners, brackets, and housing components for industrial electrical panels. Engineered for precise fitment and electrical safety standards.",
    image: electricPanel
  },
  {
    title: "Studd Puller & Injector Puller",
    description: "Heavy-duty mechanical puller tools made from hardened steel. Built for professional mechanics and industrial maintenance to safely extract stubborn studs and fuel injectors.",
    image: pullers
  }
];

const Industries = () => {
  return (
    <main className="industries-page">
      <div className="page-banner">
        <div className="container">
          <h1>Industries We Serve</h1>
          <p>Delivering precision mechanical engineering across diverse sectors.</p>
        </div>
      </div>
      
      <div className="container ind-content">
        <div className="industries-grid">
          {industriesData.map((ind, idx) => (
            <div key={idx} className="industry-card">
              <div className="ind-image-box">
                <img src={ind.image} alt={ind.title} />
              </div>
              <div className="ind-text-box">
                <h2>{ind.title}</h2>
                <p>{ind.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Industries;
