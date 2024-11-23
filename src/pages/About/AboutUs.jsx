import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-12 px-6 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <p className="text-center text-lg mb-10 text-gray-600">
        As a Web Development Services We are Committed to Building Custom
        Web Solutions that Drive Business Success.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/creative-group-working-startup-using-laptops_74855-3370.jpg?t=st=1732362592~exp=1732366192~hmac=ab440b75099165bd03b9fe1b13b17b6b9933be645559a9cc71b9b0eecf827e9b&w=1380" // Replace this URL with your image URL
            alt="Team Collaboration"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-600">
            At our web development agency, we specialize in crafting bespoke online
            solutions tailored to elevate businesses toward their digital objectives.
            Committed to continuous evolution, we remain abreast of cutting-edge web
            technologies and trends, ensuring a constant delivery of unparalleled
            excellence.
          </p>
          <p className="text-gray-600">
            Our ethos is rooted in equipping clients with the essential tools for
            triumph in the digital realm. Committed to continuous evolution, we remain
            abreast of cutting-edge web technologies and trends, ensuring a constant
            delivery of unparalleled excellence. We firmly believe in furnishing every
            business with a digital presence that authentically embodies their brand
            essence and effectively resonates with their target demographic.
          </p>
          <button className="btn bg-teal-500 text-white">Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
