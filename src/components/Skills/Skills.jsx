// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-20 bg-[#0f0f1a] text-white min-h-screen"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">SKILLS</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          A collection of my technical skills and expertise honed through various projects and experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border border-gray-700 bg-[#151523] p-6 shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="text-sm px-4 py-2 border border-gray-600 rounded-full text-gray-200 hover:bg-purple-600 transition"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
