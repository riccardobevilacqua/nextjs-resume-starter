import Layout from '@components/layout'
import Container from '@components/container'

export default function Index() {
  return (
    <>
      <Layout>
        <Container>
          <div className="columns">
            <div className="column">
              <h3 className="title">About</h3>
              <div className="block">
                American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, poet, and science communicator.
              </div>
              <div className="block">
                Best known scientific contribution is research on extraterrestrial life, including experimental demonstration of the production of amino acids from basic chemicals by radiation.
              </div>
            </div>
            <div className="column">
              <h3 className="title">Skills</h3>
              <div className="tags are-medium">
                <span className="tag">Mathematics</span>
                <span className="tag">Astrophysics</span>
                <span className="tag">Cosmology</span>
                <span className="tag">Astrobiology</span>
              </div>
              <div className="tags are-medium">
                <span className="tag">Science Communication</span>
              </div>
              <div className="tags are-medium">
                <span className="tag">Creativity</span>
                <span className="tag">Passion</span>
                <span className="tag">Inquisitivity</span>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <h3 className="title">Experience</h3>
          <article className="media">
            <figure className="media-left is-hidden-mobile">
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <div className="columns">
                  <div className="column">
                    <h4 className="title">Awesome Ltd</h4>
                    <p>Senior Astrophysicist</p>
                  </div>
                  <div className="column has-text-right has-text-left-mobile">
                    <p className="is-italic">May 2019 - Present</p>
                  </div>
                </div>
                <p>Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam. Facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
              </div>
            </div>
          </article>
          <article className="media">
            <figure className="media-left is-hidden-mobile">
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <div className="columns">
                  <div className="column">
                    <h4 className="title">Great Company Ltd</h4>
                    <p>Cosmologist</p>
                  </div>
                  <div className="column has-text-right has-text-left-mobile">
                    <p className="is-italic">Sep 2015 - May 2019</p>
                  </div>
                </div>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam. Laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>At vero eos et accusamus. Eaque ipsa quae ab illo inventore veritatis et quasi. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
              </div>
            </div>
          </article>
        </Container>
      </Layout>
    </>
  )
}
