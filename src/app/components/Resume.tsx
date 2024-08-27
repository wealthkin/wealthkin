import React from "react";
import styles from "../../styles/Resume.module.css";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
        Well Kin Molina Angara
      </h1>
      <h2 className="text-2xl text-center text-gray-600 mb-6">
        Aspiring IT Professional
      </h2>
      <div className="text-center my-4">
        <p className="mb-1">
          Email:{" "}
          <a
            href="mailto:wealthkin@outlook.com"
            className="text-blue-600 hover:underline"
          >
            wealthkin@outlook.com
          </a>
        </p>
        <p className="mb-1">
          Phone:{" "}
          <span className="text-blue-600 hover:underline">
            +63 962 595 9951
          </span>
        </p>
        <p className="mb-1">Location: Casiguran, Aurora</p>
        <p className="mb-1">
          LinkedIn:
          <a
            href="https://linkedin.com/in/well-kin-angara-a54790321"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/well-kin-angara-a54790321
          </a>
        </p>
        <p className="mb-4">
          GitHub:
          <a
            href="https://github.com/wealthkin"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/wealthkin
          </a>
        </p>
      </div>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Education</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Bachelor of Science in Information Technology (2023 - 2024)</li>
        <li>Associate Degree (2021 - 2022, with honor)</li>
        <li>
          Mount Carmel College of Casiguran, Senior High School Achiever (2019 -
          2020)
        </li>
        <li>
          Tinib Calangcuasan Integrated School, Graduated High School with Honor
          (2016 - 2017)
        </li>
        <li>
          Tinib Calangcuasan Integrated School, Graduated Elementary (2014 -
          2015)
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Experience</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>
          IT Staff - Aurora State College of Technology Testing and Evaluation
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Programming Languages: PHP, JavaScript, TypeScript</li>
        <li>Frameworks: Laravel, Livewire, Next.js</li>
        <li>Frontend: HTML, CSS, Tailwind CSS, React</li>
        <li>Version Control: Git, GitHub</li>
        <li>Soft Skills: Teamwork, Communication, Problem Solving</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Portfolio website using Next.js and Tailwind CSS.</li>
        <li>Web applications developed with Laravel and Livewire.</li>
        <li>
          <strong>CAPSTONE PROJECT:</strong>
          <br />
          KWARTRACK: A REAL-TIME FINANCIAL TRACKING SYSTEM FOR EFFICIENT
          TRANSACTIONS AND RECORD KEEPING FOR THE ASSOCIATION OF INFORMATION
          TECHNOLOGY STUDENTS (AITECHS)
        </li>
        <li>
          <strong>GAME DEVELOPMENT:</strong>
          <br />
          THE ASCOT GAME USING GODOT
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact</h3>
      <p className="mb-4 text-gray-700">Email: wealthkin@outlook.com</p>
    </div>
  );
};

export default Resume;
