import Layout from '@components/layout'
import Container from '@components/container'

export default function Index() {
  return (
    <>
      <Layout>
        <Container>
          <h3 className="title">Contacts</h3>
          <div className="columns">
            <div className="column">
              <span>Phone: </span><a href="tel:+11234567890">+11234567890</a>
            </div>
            <div className="column">
              <span>Email: </span><a href="mailto:carl.sagan@gmail.com">carl.sagan@gmail.com</a>
            </div>
            <div className="column">
              <span>Social: </span><a href="https://www.linkedin.com/in/carlsagan/">LinkedIn</a><span> | </span><a href="https://twitter.com/carlsagan">Twitter</a>
            </div>
          </div>
        </Container>
        <Container>
          <h3 className="title">About</h3>
          <div className="block">
            American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, poet, and science communicator.
          </div>
          <div className="block">
            His best known scientific contribution is research on extraterrestrial life, including experimental demonstration of the production of amino acids from basic chemicals by radiation.
          </div>
        </Container>
        <Container>
          <h3 className="title">Skills</h3>
          <div className="block">
            Mathematics, Astrophysics, Cosmology, Astrobiology
          </div>
          <div className="block">
            Science Communication
          </div>
          <div className="block">
            Creativity, Passion, Inquisitivity
          </div>
        </Container>
        <Container>
          <h3 className="title">Work Experience</h3>
          <article className="media">
            <figure className="media-left is-hidden-mobile">
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <h4 className="title">University of California, Berkeley</h4>
                <p>Miller Fellow</p>
                <p className="is-italic">1960 - 1962</p>
                <p>American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, poet, and science communicator.</p>
              </div>
            </div>
          </article>
        </Container>
      </Layout>
    </>
  )
}
