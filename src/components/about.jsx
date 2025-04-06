import { useState } from "react";

import { Heart, CheckCircle } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-banner">
          <h2 className="deco-title">About Us</h2>
          <img
            src="src\assets\deco-img.png"
            width={58}
            height={261}
            alt=""
            className="deco-img"
          />

          <div className="banner-row">
            <div className="banner-col">
              <img
                src="src\assets\about-banner-1.jpg"
                width={315}
                height={380}
                alt="Tiger"
                className="about-img w-100"
              />
              <img
                src="src\assets\about-banner-2.jpg"
                width={386}
                height={250}
                alt="Panda"
                className="about-img about-img-2 w-100"
              />
            </div>

            <div className="banner-col">
              <img
                src="src\assets\about-banner-3.jpg"
                width={250}
                height={277}
                alt="Elephant"
                className="about-img about-img-3 w-100"
              />
              <img
                src="src\assets\about-banner-4.jpg"
                width={315}
                height={380}
                alt="Deer"
                className="about-img w-100"
              />
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="section-subtitle">
            <img
              src="src\assets\subtitle-img-green.png"
              width={32}
              height={7}
              alt="Wavy line"
            />
            <span>Why Choose Us</span>
          </p>

          <h2 className="h2 section-title">
            Rise Your Hand to Save <strong>World Animals Life</strong>
          </h2>

          <ul className="tab-nav">
            <li>
              <button
                className={`tab-btn ${activeTab === "mission" ? "active" : ""}`}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
            </li>

            <li>
              <button
                className={`tab-btn ${activeTab === "vision" ? "active" : ""}`}
                onClick={() => setActiveTab("vision")}
              >
                Our Vision
              </button>
            </li>

            <li>
              <button
                className={`tab-btn ${activeTab === "plan" ? "active" : ""}`}
                onClick={() => setActiveTab("plan")}
              >
                Next Plan
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <p className="section-text">
              But I must explain to you how all this mistaken denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system expoundmaster
            </p>

            <ul className="tab-list">
              <li className="tab-item">
                <div className="item-icon">
                  <CheckCircle />
                </div>
                <p className="tab-text">Charity For Foods</p>
              </li>

              <li className="tab-item">
                <div className="item-icon">
                  <CheckCircle />
                </div>
                <p className="tab-text">Charity For Education</p>
              </li>

              <li className="tab-item">
                <div className="item-icon">
                  <CheckCircle />
                </div>
                <p className="tab-text">Charity For Water</p>
              </li>

              <li className="tab-item">
                <div className="item-icon">
                  <CheckCircle />
                </div>
                <p className="tab-text">Charity For Medical</p>
              </li>
            </ul>

            <button className="btn btn-secondary">
              <span>Learn More Us</span>
              <Heart />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
