import Link from 'next/link'

import { SITE_TITLE, SITE_SUBTITLE } from '@lib/constants'

export default function Hero() {
  return (
    <section className="hero">
      <Link href="/">
        <a>
          <div className="hero-body">
            <div className="container is-max-desktop">
              <h1 className="title">{SITE_TITLE}</h1>
              <h2 className="subtitle">{SITE_SUBTITLE}</h2>
            </div>
          </div>
        </a>
      </Link>
    </section>
  )
}
