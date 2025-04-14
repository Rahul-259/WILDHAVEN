import {
  Leaf,
  Globe,
  Flower,
  SailboatIcon as Boat,
  ArrowRight,
} from "lucide-react";
import { Link } from "lucide-react";

export default function Service() {
  return (
    <section
      className="section service"
      id="service"
      style={{ backgroundImage: "url('/images/service-map.png')" }}
    >
      <div className="container">
        <p className="section-subtitle">
          <img
            src="src\assets\subtitle-img-green.png"
            width="32"
            height="7"
            alt="Wavy line"
          />
          <span>What We Do</span>
        </p>

        <h2 className="h2 section-title">
          We Work Differently to <strong>keep The World Safe</strong>
        </h2>

        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <Leaf />
              </div>

              <h3 className="h3 card-title">Save Nature</h3>

              <p className="card-text">
                Tempor incididunt ut labores dolore magna suspene
              </p>

              <a href="#" className="btn-link">
                <span>Read More</span>
                <ArrowRight />
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Globe />
              </div>

              <h3 className="h3 card-title">Save Ecology</h3>

              <p className="card-text">
                Tempor incididunt ut labores dolore magna suspene
              </p>

              <a href="#" className="btn-link">
                <span>Read More</span>
                <ArrowRight />
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Flower />
              </div>

              <h3 className="h3 card-title">Tree Plantation</h3>

              <p className="card-text">
                Tempor incididunt ut labores dolore magna suspene
              </p>

              <Link href="#" className="btn-link">
                <span>Read More</span>
                <ArrowRight />
              </Link>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Boat />
              </div>

              <h3 className="h3 card-title">Clear Ocean</h3>

              <p className="card-text">
                Tempor incididunt ut labores dolore magna suspene
              </p>

              <Link href="#" className="btn-link">
                <span>Read More</span>
                <ArrowRight />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
