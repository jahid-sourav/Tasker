import Hero from "../../components/Hero";
import PageTitle from "../../components/PageTitle";
import "./home.css";

const HomePage = () => {
  return (
    <main>
      <PageTitle pageName="Home" />
      <Hero />
    </main>
  );
};

export default HomePage;
