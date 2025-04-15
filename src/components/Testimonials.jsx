import React from "react";
// Import images
import subtitleImgGreen from "../assets/subtitle-img-green.png";
import testiAvatar from "../assets/testi-avatar.png";
import testiBanner from "../assets/testi-banner.jpg";

function Testimonials() {
  return (
    <section className="testi">
      <div className="testi-content">
        <p className="section-subtitle">
          <img src={subtitleImgGreen} width="32" height="7" alt="Wavy line" />
          <span>Our Testimonials</span>
        </p>
        <h2 className="h2 section-title">
          What People Say About <strong>Our Organization</strong>
        </h2>
        <div className="testi-card">
          <figure className="card-avatar">
            <img
              src={testiAvatar}
              width="60"
              height="60"
              loading="lazy"
              alt="David S. Neuman"
            />
          </figure>
          <div>
            <blockquote className="testi-text">
              Supporting Wildvine has been one of the most meaningful choices
              I've made. Knowing that my contribution helps rescue,
              rehabilitate, and protect vulnerable wildlife fills me with hope.
              Every update, every rescued life, reminds me that compassion truly
              makes a difference. Wildvine isn’t just a charity—it’s a movement
              of love for the wild.
            </blockquote>
            <h3 className="testi-name">David S. Neuman</h3>
            <p className="testi-title">Business Manager</p>
          </div>
        </div>
      </div>
      <figure className="testi-banner">
        <img
          src={testiBanner}
          width="960"
          height="846"
          loading="lazy"
          alt="Rhinoceros"
          className="img-cover"
        />
      </figure>
    </section>
  );
}

export default Testimonials;
