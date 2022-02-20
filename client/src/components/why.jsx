import { info } from "../config/data";

function WhyCard() {
  return (
    <div class="why-us text-center pt-6 px-3 pb-3">
      <h2 class="text-3xl font-bold pb-5">Why Us</h2>
      <div class="grid grid-cols-2 px-6">
        <div class="mission">
          <h3 class="text-2xl text-blue-800 pb-2 max-w-sm">Our Vision</h3>
          <p className="max-w-md text-justify">{info.vision}</p>
        </div>
        <div class="mission">
          <h3 class="text-2xl text-blue-800 pb-2 max-w-sm">Our Mission</h3>
          <p className="max-w-md text-justify">{info.mission}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyCard;
