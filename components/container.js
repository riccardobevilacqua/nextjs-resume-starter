export default function Container({ children }) {
  return (
    <div className="section">
      <div className="container is-max-desktop">{children}</div>
    </div>
  )
}
