const Hero = () => {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between">

      {/* Left Side */}
      <div className="md:w-1/2">
        <p className="text-indigo-400 uppercase text-sm">
          Software Solutions That Grow Your Business
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          We Build. You Grow. <br />
          That’s <span className="text-indigo-500">ZetroWorks</span>
        </h1>

        <p className="mt-4 text-gray-300">
          We are a team of passionate developers building custom software,
          websites, and digital solutions for businesses of all sizes.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-indigo-600 px-6 py-2 rounded-lg">
            Our Services
          </button>
          <button className="border px-6 py-2 rounded-lg">
            View Projects
          </button>
        </div>
      </div>

      {/* Right Side (image placeholder) */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <div className="bg-gray-800 h-64 md:h-96 rounded-xl"></div>
      </div>

    </section>
  );
};

export default Hero;