function HomeHero() {
  return (
    <div className="hero min-h-screen">
      <div className="text">
        <h2>Welcome to beautiful Brainz</h2>
        <h4>Quality Education, Her Foundation to Quality Life</h4>
      </div>
      <div className="buttons">
        <a
          href="https://saveplus.io/causes/Help-500-young-girls-aged-8-12-stay-in-school-Y0921054908/donate?lang=en"
          target="_blank"
          className="btn btn-donate"
          rel="noreferrer"
        >
          DONATE
        </a>

        <button
          type="button"
          class="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 w-fit"
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default HomeHero;
