const Departments = () => {
  return (
    <div>
      {" "}
      {/* Departments Section */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Civil Engineering</h3>
            <p>
              Diploma programs in civil engineering, infrastructure, and
              construction technology.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Mechanical Engineering</h3>
            <p>
              Offering courses in mechanical design, manufacturing, and
              automation.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Electrical Engineering</h3>
            <p>
              Focus on electrical circuits, power systems, and electronics
              technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
