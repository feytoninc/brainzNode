function HomeHero() {
  return (
    <div className="hero min-h-screen">
      <div className="text-center my-10 ">
        <h2 className="text-5xl font-extrabold ">Beautiful Brainz</h2>
        <h3 className="text-3xl font-bold color-primary">
          Making the difference
        </h3>
      </div>
      <div className="buttons">
        <a
          href="https://saveplus.io/causes/Help-500-young-girls-aged-8-12-stay-in-school-Y0921054908/donate?lang=en"
          target="_blank"
          className="py-2 px-4 mr-4 bg-transparent outline-1 border-2  text-center rounded-xl text-white font-bold"
          rel="noreferrer"
        >
          DONATE
        </a>

        <button
          type="button"
          className="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-black transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:outline-none hover:border-0 border-0 outline-none focus:outline-none w-fit box-border"
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default HomeHero;
