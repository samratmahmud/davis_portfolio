import About from "./home/About";
import Header from "./home/Header";
import Portfolio from "./home/Portfolio";
import Resume from "./home/Resume";
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
    </main>
  );
}
