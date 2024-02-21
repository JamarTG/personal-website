import { useState } from "react";

const TechList = () => {
  const [showStack, setShowStack] = useState<boolean>(false);

  const handleClick = () => {
    setShowStack(!showStack);
  };

  return (
    <div className="tech-list">
      <h2 onClick={handleClick} style={{ color: "white", fontSize: "15px" }}>
        {showStack ? "Hide " : "Show "} {"Stack?"}
      </h2>

      {showStack ? (
        <div className="stack" style={{ display: showStack ? "flex" : "none" }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
        </div>
      ) : null}
    </div>
  );
};

export default TechList;
