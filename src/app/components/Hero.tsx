import React from "react";

const Hero = () => {
  return (
    <section
      className="flex justify-between items-center w-full p-5"
      style={{
        background: "#043873",
        marginRight: "30px",
      }}
    >
      {/* Left Section */}
      <div
        className="flex-1 flex flex-col justify-start"
        style={{
          width: "656px",
          height: "361px",
        }}
      >
        <h2 className="text-3xl font-inter text-white mb-2">
          Get More Done with Whitepace
        </h2>
        <p className="text-lg text-white mb-4">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <button
          className="bg-[#4F9CF9] text-white text-lg font-medium rounded-lg"
          style={{
            width: "219px",
            height: "63px",
            padding: "20px",
            borderRadius: "8px",
            marginTop: "20px", // Adjust the top margin to bring the button closer to the content
          }}
        >
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div
        className="flex-1 flex justify-center items-center"
        style={{
          width: "700px", // Reduced width
          height: "500px", // Reduced height
        }}
      >
        <div
          className="bg-[#C4DEFD] text-white flex justify-center items-center rounded-lg"
          style={{
            width: "100%",
            height: "100%",
            gap: "4px",
          }}
        >
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
