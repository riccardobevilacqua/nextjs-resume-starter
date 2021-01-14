import Layout from '@components/layout'
import Card from '@components/card'

export default function Index() {
  return (
    <>
      <Layout>
        <div className="main-container">
          <div className="grid">
            <div className="cs1 ce6">
              <section>
                <h3>About</h3>
                <div className="content">
                  <div className="block">
                    <p>American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, poet, and science communicator.</p>
                  </div>
                  <div className="block">
                    <p>Best known scientific contribution is research on extraterrestrial life, including experimental demonstration of the production of amino acids from basic chemicals by radiation.</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="cs7 ce12">
              <section>
                <h3>Skills</h3>
                <div className="content">
                  <div className="block">
                    <p><i className="eva eva-bulb-outline"></i> Mathematics, Astrophysics, Cosmology, Astrobiology</p>
                  </div>
                  <div className="block">
                    <p><i className="eva eva-code"></i> Science Communication</p>
                  </div>
                  <div className="block">
                    <p><i className="eva eva-heart-outline"></i> Creativity, Passion, Cosmology, Inquisitivity</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="cs1 ce12">
              <section>
                <h3 className="title">Experience</h3>
                <Card />
                <Card />
                <Card />
              </section>
            </div>
          </div>
        </div>
        {/*
        <Container>
          <h3 className="title">Experience</h3>
          <article className="media">
            <figure className="media-left is-hidden-mobile">
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/64x64.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="columns">
                <div className="column">
                  <h4 className="title is-size-4">Awesome Ltd</h4>
                  <h6 className="subtitle is-size-6">Senior Astrophysicist</h6>
                </div>
                <div className="column has-text-right-desktop has-text-left-mobile is-italic">
                  May 2019 - Present
                </div>
              </div>
              <div className="content">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                <p>Laboris nisi ut aliquip ex ea commodo consequat. Animi, id est laborum et dolorum fuga. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
              </div>
            </div>
          </article>
          <article className="media">
            <figure className="media-left is-hidden-mobile">
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/64x64.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="columns">
                <div className="column">
                  <h4 className="title is-size-4">Great Company Ltd</h4>
                  <h6 className="subtitle is-size-6">Astrophysicist</h6>
                </div>
                <div className="column has-text-right-desktop has-text-left-mobile is-italic">
                  Feb 2015 - May 2019
                </div>
              </div>
              <div className="content">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                <p>Laboris nisi ut aliquip ex ea commodo consequat. Animi, id est laborum et dolorum fuga. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
              </div>
            </div>
          </article>
        </Container> */}
      </Layout>
    </>
  )
}
