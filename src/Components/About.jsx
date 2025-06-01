import React from "react";

function About() {
  return (
   <div className="overflow-x-hidden container">
      <div className="max-w-screen-3xl relative w-full h-screen pt-20 flex  items-center space-x-20 justify-center  ">
        <div >
          <img src="src\assets\my.jpg" alt="Img2" className="w-100 h-100 rounded-full "/>
        </div>
        <div className="w-6/12">
          <div className="mb-10">
            <h1 className="font-semibold text-3xl">About <span className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Me</span></h1>
            <h1 className=" inline text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Software Developer</h1>
          </div>
          <div className="  text-justify  text-2xl font-light">
            <p>
              A passionate and results-driven Software Engineer with hands-on
              experience in both front-end and back-end development,
              specializing in building fast, responsive, and user-friendly
              full-stack web applications. Core technologies include HTML5,
              CSS3, Tailwind CSS, JavaScript, React.js, Node.js, Express.js, and
              MongoDB. Projects range from dynamic UI components to scalable
              RESTful APIs and complete back-end architectures. Focused on
              writing clean, maintainable code and delivering solutions that
              balance functionality with thoughtful design. Continuously
              exploring new tools, refining skills, and staying updated with the
              latest in web development.<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-2xl "> .......</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
