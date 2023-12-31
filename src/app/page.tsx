import About from "./home/About";
import Blogs from "./home/Blogs";
import Contact from "./home/Contact";
import Header from "./home/Header";
import Portfolio from "./home/Portfolio";
import Resume from "./home/Resume";
import Review from "./home/Review";
import Service from "./home/Service";
import Skills from "./home/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Service />
      <Skills />
      <Resume />
      <Portfolio />
      <Review />
      <Blogs />
      <Contact />
    </main>
  );
}
