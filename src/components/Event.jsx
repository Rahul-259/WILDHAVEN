
import { Heart, ArrowRight } from "lucide-react"

export default function Event() {
  const events = [
    { month: "Jan", date: "05" },
    { month: "Feb", date: "23" },
    { month: "Mar", date: "27" },
  ]

  return (
    <section className="section event" id="event">
      <div className="container">
        <p className="section-subtitle">
          <Image src="/images/subtitle-img-green.png" width={32} height={7} alt="Wavy line" />
          <span>Event & Program</span>
          <Image src="/images/subtitle-img-green.png" width={32} height={7} alt="Wavy line" />
        </p>

        <h2 className="h2 section-title">
          Our Most Popular Causes For <strong>Building Fund</strong>
        </h2>

        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index}>
              <div className="event-card">
                <time className="card-time" dateTime={`${event.month.toLowerCase()}-${event.date}`}>
                  <span className="month">{event.month}</span>
                  <span className="date">{event.date}</span>
                </time>

                <div className="wrapper">
                  <div className="card-content">
                    <p className="card-subtitle">Ocean Water</p>
                    <h3 className="card-title">Far from the countries Vokalia and Consonantia 2022</h3>
                    <p className="card-text">Sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                  </div>

                  <button className="btn btn-white">
                    <span>View Events</span>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="btn btn-secondary">
          <span>Learn More Us</span>
          <Heart />
        </button>
      </div>
    </section>
  )
}

