import Four04CatGif from "./404CatGit";

const PageNotFound = () => {
  return (
    <main className="main-content">
      <div style={{ display: "flex" , justifyContent:"center", alignItems:"center", color:"#333"}}>
        <Four04CatGif />
        <h2>I know you're lost...</h2>
      </div>
    </main>
  );
};

export default PageNotFound;
