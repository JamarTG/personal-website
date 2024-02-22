import { useNavigate } from "react-router-dom";
import Four04CatGif from "./404CatGit";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="fourofour main-content">
      <h1>I know you're lost...</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#333",
        }}
      >
        <Four04CatGif />
        
        <br />
      </div>
      <a onClick={() => navigate("/")} className="return-btn">
        Return Home
      </a>
    </main>
  );
};

export default PageNotFound;
