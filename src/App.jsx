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
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Event from "./components/Event";
import InstaPost from "./components/InstaPost";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donatingTo, setDonatingTo] = useState("");
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
          <Donate onDonateClick={openModal} setDonatingTo={setDonatingTo} />

          <Event />
          <Testimonials />
          <InstaPost />

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
      <Footer />

      <DonationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        donatingTo={donatingTo}
      />
    </>
  );
}

export default App;
