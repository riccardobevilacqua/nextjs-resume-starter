import { SITE_TITLE, SITE_SUBTITLE } from '@lib/constants'
import styles from '../styles/Hero.module.scss';

export default function Hero() {
  return (
    <div className={`${styles.hero} grid`}>
      <div className={[styles.heroHeader, 'cs1 ce12'].join(' ')}>
        <h1>{SITE_TITLE}</h1>
        <h2>{SITE_SUBTITLE}</h2>
      </div>
      <div className="cs1 ce4">
        <a aria-label="phone" href="tel:+11234567890">
          <i className="eva eva-phone"></i>
          <span>+11234567890</span>
        </a>
      </div>
      <div className="cs5 ce8">
        <a aria-label="email" href="mailto:carl.sagan@gmail.com">
          <i className="eva eva-email"></i>
          <span>carl.sagan@gmail.com</span>
        </a>
      </div>
      <div className={`${styles.heroSocial} cs9 ce12`}>
        <a aria-label="LinkedIn" href="https://www.linkedin.com">
          <i className="eva eva-linkedin"></i>
        </a>
        <a aria-label="Twitter" href="https://twitter.com">
          <i className="eva eva-twitter"></i>
        </a>
        <a aria-label="GitHub" href="https://github.com">
          <i className="eva eva-github"></i>
        </a>
      </div>
    </div>
  )
}
