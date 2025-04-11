<><img src="src/assets/cta-banner.jpg" alt="Description" /><a href="/partner">Go to Page</a></>

export default function Partner() {
  return (
    <section className="section partner">
      <div className="container">
        <Link href="#" className="partner-logo">
          <Image src="/images/partner-1.png" width={157} height={55} alt="Children Fund" className="gray" />
          <Image src="/images/partner-1-active.png" width={157} height={55} alt="Children Fund" className="color" />
        </Link>gi

        <Link href="#" className="partner-logo">
          <Image src="/images/partner-2.png" width={163} height={55} alt="Non Profit Agency" className="gray" />
          <Image src="/images/partner-2-active.png" width={163} height={55} alt="Non Profit Agency" className="color" />
        </Link>

        <Link href="#" className="partner-logo">
          <Image src="/images/partner-3.png" width={149} height={55} alt="Rise Hand Help Us" className="gray" />
          <Image src="/images/partner-3-active.png" width={149} height={55} alt="Rise Hand Help Us" className="color" />
        </Link>

        <Link href="#" className="partner-logo">
          <Image src="/images/partner-4.png" width={169} height={58} alt="Helping" className="gray" />
          <Image src="/images/partner-4-active.png" width={169} height={58} alt="Helping" className="color" />
        </Link>

        <Link href="#" className="partner-logo">
          <Image src="/images/partner-5.png" width={211} height={55} alt="Poor Fund Organization" className="gray" />
          <Image
            src="/images/partner-5-active.png"
            width={211}
            height={55}
            alt="Poor Fund Organization"
            className="color"
          />
        </Link>
      </div>
    </section>
  )
}

