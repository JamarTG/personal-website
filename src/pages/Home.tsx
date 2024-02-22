import HomeCatGif from "../components/HomeCatGif";
import TechList from "../components/TechList";
import JammyInfo from "../components/Info";

const Home = () => {
  return (
    <main className="main-content">
      <HomeCatGif />
      <JammyInfo />

      <TechList />
    </main>
  );
};

export default Home;
