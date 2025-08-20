import React from "react";

const upworkExperiences = [
  {
    jobTitle: "Asp.net Full Stack Developer",
    clientFeedback: "Highly experienced in .NET and web technologies. Delivers scalable, clean architecture. Very reliable!",
    hoursWorked: 1775
  },
  {
    jobTitle: "API Integration Expert (QuickBooks, Autotask, Gunbroker)",
    clientFeedback: "Excellent implementation of third-party APIs. Smooth integration and error handling. Impressed!",
    hoursWorked: 400
  },
  {
    jobTitle: "SSRS & Stimulsoft report expert",
    clientFeedback: "Built advanced reports with filtering, pagination, and exports. Accurate and user-friendly.",
    hoursWorked: 300
  }
];

const Upwork = () => {
  return (
    <section id="upwork" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#0a0a1a] text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">UPWORK EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my Upwork experience, including client feedback, hours worked, and job details.
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {upworkExperiences.map((experience, index) => (
          <div key={index} className="border border-white bg-gray-900 rounded-2xl shadow-2xl p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-2">{experience.jobTitle}</h3>
            <p className="text-gray-400 italic mb-4">"{experience.clientFeedback}"</p>
            <p className="text-gray-300">{experience.hoursWorked}+ hours worked</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upwork;
