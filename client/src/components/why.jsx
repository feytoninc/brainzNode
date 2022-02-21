import { info } from "../config/data";

function WhyCard() {
  return (
    <div className="why-us text-center pt-6 px-3 pb-3">
      <h2 className="text-3xl font-bold pb-5">Why Us</h2>
      <div className="grid grid-cols-2 px-6">
        <div className="mission">
          <h3 className="text-2xl text-blue-800 pb-2 max-w-sm">Our Vision</h3>
          <p className="max-w-md text-justify">{info.vision}</p>
        </div>
        <div className="mission">
          <h3 className="text-2xl text-blue-800 pb-2 max-w-sm">Our Mission</h3>
          <p className="max-w-md text-justify">{info.mission}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyCard;
