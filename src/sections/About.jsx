const About = () => {
  return (
    <section className="px-6 md:px-12 py-16 bg-white">

      <div className="grid md:grid-cols-2 gap-10">

        {/* About */}
        <div>
          <p className="text-indigo-600 text-sm uppercase">About Us</p>
          <h2 className="text-3xl font-bold mt-2">
            We Are ZentroWorks
          </h2>

          <p className="text-gray-600 mt-4">
            We are a team of passionate developers helping businesses
            build digital products that drive growth and efficiency.
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            <li>✔ Client-focused approach</li>
            <li>✔ Scalable solutions</li>
            <li>✔ On-time delivery</li>
            <li>✔ Quality assurance</li>
          </ul>
        </div>

        {/* Placeholder image */}
        <div className="bg-gray-200 h-64 rounded-xl"></div>

      </div>
    </section>
  );
};

export default About;