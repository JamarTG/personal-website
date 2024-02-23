import HomeCatGif from "../components/HomeCatGif";
import TechList from "../components/TechList";
import JammyInfo from "../components/Info";
import SocialIcons from "../components/SocialIcons";import SocialIcons from "../components/SocialIcons";


const Home = () => {
  return (
    <main className="main-content">
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
