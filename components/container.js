export default function Container({ children }) {
  return (
    <section>
      <div className="container is-max-desktop">{children}</div>
    </section>
  )
}
