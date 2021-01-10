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
            Carl Edward Sagan (/ˈseɪɡən/; November 9, 1934 – December 20, 1996) was an American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, poet, and science communicator.
          </div>
          <div className="block">
            His best known scientific contribution is research on extraterrestrial life, including experimental demonstration of the production of amino acids from basic chemicals by radiation.
          </div>
          <div className="block">
            Sagan assembled the first physical messages sent into space: the Pioneer plaque and the Voyager Golden Record, universal messages that could potentially be understood by any extraterrestrial intelligence that might find them. Sagan argued the now-accepted hypothesis that the high surface temperatures of Venus can be attributed to and calculated using the greenhouse effect.
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
      </Layout>
    </>
  )
}
