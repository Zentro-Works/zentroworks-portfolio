import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between">

      {/* Left Side */}
      <div className="md:w-1/2">

        <p className="text-indigo-400 uppercase text-sm">
          Software Solutions That Grow Your Business
        </p>

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mt-4"
        >
          We Build. You Grow. <br />
          That's <span className="text-indigo-500">ZentroWorks</span>
        </motion.h1>

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

      {/* Right Side (ONLY ONE) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 mt-10 md:mt-0"
      >
        <div className="bg-gray-800 h-64 md:h-96 rounded-xl"></div>
      </motion.div>

    </section>
  );
};

export default Hero;