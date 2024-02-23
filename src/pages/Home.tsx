import HomeCatGif from "../components/HomeCatGif";
import TechList from "../components/TechList";
import JammyInfo from "../components/Info";
import SocialIcons from "../components/SocialIcons";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="main-content">
      <Navbar />
      <section>
        <HomeCatGif />
        <JammyInfo />
      </section>

      <SocialIcons />
      <section>
        <TechList />
        {/* <ProjectList /> */}
      </section>
    </main>
  );
};

export default Home;
