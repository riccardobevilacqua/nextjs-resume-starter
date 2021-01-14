import styles from '../styles/Card.module.scss'

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h4>Example</h4>
        <div className="content">
          <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          <p>Laboris nisi ut aliquip ex ea commodo consequat. Animi, id est laborum et dolorum fuga. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
        </div>
      </div>
    </div>
  )
}
