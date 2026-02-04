import Navbar from "./Navbar";
import Tabs from "./Tabs";

const Hero = () => {
  return (
    <section className="h-[90vh] bg-[url(https://sakthitech.net/wp-content/uploads/2024/05/IMG-20210924-WA0008-e1716802745789.jpg)] bg-center bg-cover">
      <section className="bg-black/70 text-white h-full ">
        <Navbar />
        <Tabs />

        <h1 className="text-4xl font-bold text-center pt-16">
          Welcome to GPA College
        </h1>
        
      </section>
    </section>
  );
};

export default Hero;
