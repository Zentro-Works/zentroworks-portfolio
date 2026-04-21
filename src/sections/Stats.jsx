const Stats = () => {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-12">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div>
          <h2 className="text-3xl font-bold">20+</h2>
          <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">40+</h2>
          <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">500+</h2>
          <p className="text-gray-400 text-sm mt-1">Working Hours</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">100%</h2>
          <p className="text-gray-400 text-sm mt-1">Client Satisfaction</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;