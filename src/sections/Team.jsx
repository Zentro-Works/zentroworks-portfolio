const Team = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-12 py-16">

      <div className="text-center mb-10">
        <p className="text-indigo-600 text-sm uppercase">Our Team</p>
        <h2 className="text-3xl font-bold">People Behind ZentroWorks</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-5">

        {["Aman", "Rohan", "Vivaan", "Karan", "Sahil"].map((name, i) => (
          <div key={i} className="bg-white p-4 rounded-xl text-center shadow">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto"></div>
            <h3 className="mt-3 font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">Developer</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Team;