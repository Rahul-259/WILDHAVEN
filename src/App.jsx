import About from "./components/about";
import React, { useState } from "react";
import Cta from "./components/cta";
import Features from "./components/Features";
import Header from "./components/header";
import Hero from "./components/hero";
import Service from "./components/Service";
import Partner from "./components/partner";
import Donate from "./components/Donate";
import DonationModal from "./components/DonationModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Header onDonateClick={openModal} />
      <main>
        <article>
          <Hero />
          <Features />
          <About />
          <Cta />
          <Service />
          <Partner />
          <Donate onDonateClick={openModal} />

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
      <DonationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
