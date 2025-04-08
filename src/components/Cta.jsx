import { Heart } from "lucide-react"
import { Image } from "lucide-react"
export default function Cta() {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">324+ Trusted Global Partners</h2>

          <button className="btn btn-outline">
            <span>Become a Partner</span>
            <Heart />
          </button>
        </div>

        <figure className="cta-banner">
          <Image src="/images/cta-banner.jpg" width={520} height={228} alt="Fox" className="img-cover" />
        </figure>
      </div>
    </section>
  )
}

