import { Heart } from "lucide-react";
import { useDonation } from "./DonateContext";

const Animals = ["elephant", "rhino", "tiger", "koala"];

export default function Donate({ onDonateClick, setDonatingTo }) {
  const { donationData, getPercentage } = useDonation();

  return (
    <section className="section donate" id="donate">
      <div className="container">
        <ul className="donate-list">
          {Animals.map((animal, i) => {
            const animalData = donationData[animal] || {
              raised: 0,
              goal: 1,
              toGo: 1,
            };
            const percentage = getPercentage(animal);

            return (
              <li key={i}>
                <div className="donate-card">
                  <figure className="card-banner">
                    <img
                      src={`src/assets/donate-${i + 1}.jpg`}
                      width={520}
                      height={325}
                      alt={animal}
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="progress-wrapper">
                      <p className="progress-text">
                        <span>Raised</span>
                        <data value={animalData.raised}>
                          ${animalData.raised}
                        </data>
                      </p>

                      <data className="progress-value" value={percentage}>
                        {percentage}%
                      </data>
                    </div>

                    <div className="progress-box">
                      <div
                        className="progress"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>

                    <h3 className="h3 card-title">
                      Help Save the{" "}
                      {animal.charAt(0).toUpperCase() + animal.slice(1)}
                    </h3>

                    <div className="card-wrapper">
                      <p className="card-wrapper-text">
                        <span>Goal</span>
                        <data className="green" value={animalData.goal}>
                          ${animalData.goal}
                        </data>
                      </p>

                      <p className="card-wrapper-text">
                        <span>Raise</span>
                        <data className="yellow" value={animalData.raised}>
                          ${animalData.raised}
                        </data>
                      </p>

                      <p className="card-wrapper-text">
                        <span>To Go</span>
                        <data className="cyan" value={animalData.toGo}>
                          ${animalData.toGo}
                        </data>
                      </p>
                    </div>

                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        onDonateClick();
                        setDonatingTo(animal);
                      }}
                    >
                      <span>Donation</span>
                      <Heart />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
