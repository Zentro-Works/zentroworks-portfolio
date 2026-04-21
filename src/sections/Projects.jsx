const Projects = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-12 py-16">

      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-indigo-600 text-sm uppercase">Our Projects</p>
          <h2 className="text-3xl font-bold">Some of Our Work</h2>
        </div>

        <button className="text-indigo-600 border px-4 py-2 rounded-lg">
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-4">

        {[
          "Inventory System",
          "Business Website",
          "E-Commerce App",
          "HR System"
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg">
            <div className="h-40 bg-gray-200 rounded-lg"></div>
            <h3 className="font-semibold mt-3">{item}</h3>
            <p className="text-sm text-gray-500">Web App / Dashboard</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;