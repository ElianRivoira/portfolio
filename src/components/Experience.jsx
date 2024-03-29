import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodeJs.png";
import express from "../assets/express.png";
import redux from "../assets/redux.png";
import postgresql from "../assets/postgresql.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import tailwind from '../assets/tailwind.png';
import docker from '../assets/docker.png';
import firebase from '../assets/firebase.png';
import kubernetes from '../assets/kubernetes.png';
import typescript from '../assets/typescript.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "shadow-violet-400",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-700",
    },
    {
      id: 10,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: express,
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 13,
      src: mysql,
      title: "MySQL",
      style: "shadow-orange-500",
    },
    {
      id: 14,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 15,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-400",
    },
    {
      id: 16,
      src: docker,
      title: "Docker",
      style: "shadow-sky-600",
    },
    {
      id: 17,
      src: firebase,
      title: "Firebase",
      style: "shadow-amber-400",
    },
    {
      id: 18,
      src: kubernetes,
      title: "Kubernetes",
      style: "shadow-blue-500",
    },
    {
      id: 19,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
