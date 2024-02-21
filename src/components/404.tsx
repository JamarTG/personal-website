import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Four04CatGif from "./404CatGit";

interface PageNotFoundProps {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageNotFound = ({ setShowNav }: PageNotFoundProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    setShowNav(false);
  }, []);

  return (
    <main className="main-content">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#333",
        }}
      >
        <Four04CatGif />
        <h2>I know you're lost...</h2>
        <br />
      </div>
      <a onClick={() => navigate("/")} className="return-btn">
        Return Home
      </a>
    </main>
  );
};

export default PageNotFound;
