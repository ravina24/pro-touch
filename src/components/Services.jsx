import React from 'react';

export default ({services}) => {
    return (
        <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">We give FREE estimates!</h3>
            </div>
          </div>
          <div className="row text-center">
          {
            services && services.map(({title, caption, image}, index) => 
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className={image}></i>
              </span>
              <h4 className="service-heading">{title}</h4>
              <p className="text-muted">{caption}</p>
            </div>
            )
        }
          </div>
        </div>
      </section>
    )
}