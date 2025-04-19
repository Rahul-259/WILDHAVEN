import { Heart } from "lucide-react";

export default function Hero({ onDonateClick }) {
  return (
    <section className="hero" id="home">
      <div className="container">
        <p className="section-subtitle">
          <img
            src="src\assets\subtitle-img-white.png"
            width={32}
            height={7}
            alt="Wavy line"
          />
          <span>Welcome to Wildvine</span>
        </p>

        <h2 className="h1 hero-title">
          Give Love for Saving <strong>World Animals</strong>
        </h2>

        <p className="hero-text">
          When we choose to give love, we become the guardians of Earth's most
          vulnerable creatures—each gesture of kindness echoes in the forests,
          oceans, and skies.
        </p>

        <button className="btn btn-primary" onClick={onDonateClick}>
          <span>Donation</span>
          <Heart />
        </button>
      </div>
    </section>
  );
}
