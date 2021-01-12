import { SITE_TITLE, SITE_SUBTITLE } from '@lib/constants'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container is-max-desktop has-text-centered">
          <h1 className="title is-size-1">{SITE_TITLE}</h1>
          <h2 className="subtitle is-size-4">{SITE_SUBTITLE}</h2>
        </div>
      </div>
    </section>
  )
}
