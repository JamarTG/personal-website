import HomeCatGif from "../components/HomeCatGif";
import TechList from "../components/TechList";
import JammyInfo from "../components/Info";

const Home = () => {
  return (
    <main className="main-content">
      <section>
        <HomeCatGif />
        <JammyInfo />
      </section>

      <section>
        <TechList />
      </section>
    </main>
  );
};

export default Home;
