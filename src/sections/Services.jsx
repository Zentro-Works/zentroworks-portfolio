const Services = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-16">

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-indigo-600 text-sm uppercase">Our Services</p>
        <h2 className="text-3xl font-bold mt-2">What We Do</h2>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-4">

        <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold">Web Development</h3>
          <p className="text-sm text-gray-600 mt-2">
            Fast, responsive modern websites for businesses.
          </p>
        </div>

        <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold">Custom Software</h3>
          <p className="text-sm text-gray-600 mt-2">
            Build powerful systems to solve business problems.
          </p>
        </div>

        <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold">Web Applications</h3>
          <p className="text-sm text-gray-600 mt-2">
            Scalable apps designed for your business needs.
          </p>
        </div>

        <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold">Maintenance</h3>
          <p className="text-sm text-gray-600 mt-2">
            Continuous support to keep systems running smoothly.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;