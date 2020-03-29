import React from 'react';
import ModalImage from "react-modal-image";



export default ({portfolioLinks}) => {
    return (
    <section className="bg-light page-section" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Gallery</h2>
        </div>
      </div>
      <div className="row">
        {
            portfolioLinks && portfolioLinks.map(({title, caption, image}, index) => 
                <div className="col-md-3 col-sm-6 portfolio-item">
                    <ModalImage id='portfolioModal'
                      small={image}
                      medium={image}
                      large={image}
                      alt="Hello World!"
                    />
                <div className="portfolio-caption">
                    <h4>{title}</h4>
                </div>
                </div>
            )
        }
        </div>
    </div>
  </section>
    )
}