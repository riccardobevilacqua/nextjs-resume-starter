import { SITE_TITLE, SITE_SUBTITLE } from '@lib/constants'
import styles from '../styles/Hero.module.scss';

export default function Hero() {
  return (
    <div className={[styles.hero, 'grid'].join(' ')}>
      <div className={[styles.heroHeader, 'cs1 ce12'].join(' ')}>
        <h1>{SITE_TITLE}</h1>
        <h2>{SITE_SUBTITLE}</h2>
      </div>
      <div className="cs1 ce4">
        <a aria-label="phone" href="tel:+11234567890">+11234567890</a>
      </div>
      <div className="cs5 ce8">
        <a aria-label="email" href="mailto:carl.sagan@gmail.com">carl.sagan@gmail.com</a>
      </div>
      <div className="cs9 ce12">
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/carlsagan/">LinkedIn</a>
        <span style={{ padding: '0 0.5em' }}>|</span>
        <a aria-label="Twitter" href="https://twitter.com/carlsagan">Twitter</a>
      </div>
    </div>
  )
}
