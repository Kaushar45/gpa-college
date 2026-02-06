const page = () => {
  return (
    <div>
      {" "}
      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-10 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <img
            src="/images/campus1.jpg"
            alt="Campus 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="/images/campus2.jpg"
            alt="Campus 2"
            className="rounded-lg shadow-md"
          />
          <img
            src="/images/campus3.jpg"
            alt="Campus 3"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
