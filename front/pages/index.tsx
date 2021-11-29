import type { NextPage } from "next";
import AboutMe from "../src/components/AboutMe";
import Skills from "../src/components/Skills";

const Home: NextPage = () => {
  return (
    <>
      <AboutMe />
      <Skills />
    </>
  );
};

export default Home;
