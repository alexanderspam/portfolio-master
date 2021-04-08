import React from 'react'

const TitlePage = () => {

  return(
  <main>
    <section className="intro">
      <div>
        <span>HELLO</span>
        <h1>I'm Alexander</h1>
        <p>Front-end developer with focus on React and Javascript</p>
      </div>
      <div>
        <img />
        <figure></figure>
      </div>
    </section>
    <section className="about">
      <h2>About me</h2>
      <p>
        I just graduated from Nackademin where I studied front-end development.
        We also had classes in design and ...... On my freetime I work on my own
        development projects, climb at Klättercenter and do a lot of
        thriftshopping (mostly interior design). I am now looking for work as a
        developer.
      </p>
    </section>

    <section className="portfolio">
      <h2>Portfolio</h2>
      <div>
        <div className="col">
          <div className="row">
            <div></div>
          </div>
          <div className="row">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div></div>
            <div></div>
          </div>
          <div className="row">
            <div></div>
          </div>
        </div>
      </div>
    </section>
  </main>
)};
export default TitlePage