import About from "./components/about";
import Features from "./components/Features";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <Features />
          <About />
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
