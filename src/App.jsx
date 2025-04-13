import About from "./components/About";
import Cta from "./components/cta";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Partner from "./components/Partner";
import Donate from "./components/Donate";
import DonationModal from './components/DonationModal';

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
          <Partner />
          <Donate />
          {/* <Hero />
          <Features />
          <About />
          <Cta />
          <Service />
          
          <Testimonials />
          
          <Event />
          <InstaPost /> */}
        </article>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
