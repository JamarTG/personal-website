import { useState } from "react";
import FlexWrapper from "./FlexWrapper";

const ProjectList = () => {
  const [showProjects, setShowProjects] = useState(false);

  const handleClick = () => {
    setShowProjects(!showProjects);
  };
  return (
    <div
      style={{
        animation: showProjects
          ? "scaleIn .5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          : "scaleOut .5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      className="tech-list"
    >
      <h2
        onClick={handleClick}
        style={{
          color: "white",
          fontSize: "15px",
        }}
        className="icon"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: !showProjects ? "bounce 1s infinite" : "",
          }}
        >
          {!showProjects ? (
            <svg
              width={25}
              fill="#575757"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
            </svg>
          ) : (
            <svg
              fill="#575757"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={25}
              height={25}
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
            </svg>
          )}
        </div>
      </h2>

      {showProjects ? (
        <div className="projects">
          <FlexWrapper direction="row" gap={10}>
            <small>  <i className="devicon-github-original"></i>Full Stack Messaging Application </small>
            <small> <i className="devicon-github-original"></i>React Portfolio Website </small>
          </FlexWrapper>

          {/* <i className="devicon-typescript-plain" title="TypeScript"></i>

          <i className="devicon-flask-original" title="Flask"></i>

          <i className="devicon-css3-plain" title="CSS3"></i>

          <i className="devicon-tailwindcss-original" title="Tailwind CSS"></i>

          <i className="devicon-nodejs-plain" title="Node.js"></i>

          <i className="devicon-express-original" title="Express"></i>

          <i className="devicon-mongodb-plain" title="MongoDB"></i>

          <i className="devicon-graphql-plain" title="GraphQL"></i>

          <i className="devicon-python-plain" title="Python"></i> */}
        </div>
      ) : null}
    </div>
  );
};

export default ProjectList;
