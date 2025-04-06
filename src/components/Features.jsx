import { ShieldCheck, Droplet, Leaf, Snowflake } from "lucide-react";

export default function Features() {
  return (
    <section className="section features">
      <div className="container">
        <ul className="features-list">
          <li className="features-item">
            <div className="item-icon">
              <ShieldCheck />
            </div>

            <div>
              <h3 className="h4 item-title">Safe Shelter</h3>
              <p className="item-text">
                Sit amet consecte adiscine eiusm temor ultrices.
              </p>
            </div>
          </li>

          <li className="features-item">
            <div className="item-icon">
              <Droplet />
            </div>

            <div>
              <h3 className="h4 item-title">Safe Water</h3>
              <p className="item-text">
                Sit amet consecte adiscine eiusm temor ultrices.
              </p>
            </div>
          </li>

          <li className="features-item">
            <div className="item-icon">
              <Leaf />
            </div>

            <div>
              <h3 className="h4 item-title">Ecology Save</h3>
              <p className="item-text">
                Sit amet consecte adiscine eiusm temor ultrices.
              </p>
            </div>
          </li>

          <li className="features-item">
            <div className="item-icon">
              <Snowflake />
            </div>

            <div>
              <h3 className="h4 item-title">Environment</h3>
              <p className="item-text">
                Sit amet consecte adiscine eiusm temor ultrices.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
