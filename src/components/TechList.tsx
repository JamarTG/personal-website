import { useState } from "react";

const TechList = () => {
  const [showStack, setShowStack] = useState<boolean>(false);

  const handleClick = () => {
    setShowStack(!showStack);
  };

  return (
    <div className="tech-list">
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
            animation: !showStack ? "bounce 1s infinite" : "",
          }}
        >
          {!showStack ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width={25}
              fill="#333"
            >
              <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
            </svg>
          ) : (
            <svg
              fill="#333"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={28}
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
            </svg>
          )}
        </div>
      </h2>

      {showStack ? (
        <div className="stack">
          <img
            title="react"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
          <img
            title="typescript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          />

          {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /> */}

          <img
            title="flask"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
          />

          {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /> */}

          <img
            title="css"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          />

          <img
            title="tailwindcss"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />

          <img
            title="nodejs"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          />

          <img
            title="express"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          />

          <img
            title="mongodb"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          />
          <img
            title="graphql"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
          />

          <img
            title="python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          />

          {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /> */}
          {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" /> */}
        </div>
      ) : null}
    </div>
  );
};

export default TechList;
