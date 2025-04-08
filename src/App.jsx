import About from "./components/about";
import Cta from "./components/cta";
import Features from "./components/Features";
import Header from "./components/header";
import Hero from "./components/hero";
import Service from "./components/service";

function App() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <Features />
          <About />
          <Cta/>
          <Service/>
          {/* <Hero />
          <Features />
          <About />
          <Cta />
          <Service />
          <Donate />
          <Testimonials />
          <Partner />
          <Event />
          <InstaPost /> */}
        </article>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
