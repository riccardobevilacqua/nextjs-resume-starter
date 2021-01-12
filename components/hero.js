import { SITE_TITLE, SITE_SUBTITLE } from '@lib/constants'

export default function Hero() {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container is-max-desktop has-text-centered">
          <h1 className="title is-size-1">{SITE_TITLE}</h1>
          <h2 className="subtitle is-size-4">{SITE_SUBTITLE}</h2>
          <div className="columns has-text-centered">
            <div className="column">
              <a aria-label="phone" href="tel:+11234567890">+11234567890</a>
            </div>
            <div className="column">
              <a aria-label="email" href="mailto:carl.sagan@gmail.com">carl.sagan@gmail.com</a>
            </div>
            <div className="column">
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/carlsagan/">LinkedIn</a><span> | </span><a aria-label="Twitter" href="https://twitter.com/carlsagan">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
