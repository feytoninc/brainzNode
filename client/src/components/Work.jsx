import { services } from "../config/data";

function Work() {
  return (
    <div className="what-we-do center">
      <h2 className="text-3xl font-bold text-center my-5">Our Work</h2>
      <div className="service">
        <div className="service-list">
          {services.map((service) => {
            return (
              <div
                className="card service px-2 py-3 rounded-md"
                key={service.id}
              >
                <h3 className="font-bold text-center">{service.name}</h3>
                <hr />
                <p className="mb-4 text-justify">{service.info}</p>
                <button className="py-2 px-4 rounded-md">Learn more</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
