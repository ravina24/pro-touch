import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: '', name: '', email: '', phone: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value
        });
    }

      handleSubmit (event) {
        event.preventDefault();
        var template_params = {
            "name": this.state.name,
            "message": this.state.message,
            "phone": this.state.phone,
            "email": this.state.email
         }
         
         var service_id = "default_service";
         var template_id = "template_M5OycbLq";
         window.emailjs.send(service_id, template_id, template_params).then(res => {
             alert("Message Sent!");
             this.setState({
                name: '',
                email: '',
                phone: '',
                message: ''
             });
         }).catch(e => {
             console.log("There was an error", e);
         });    
      }

    render() {
        
        return (
            <section className="page-section" id="contact">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted" style={{color: "white"}}>Fill in the form below to contact us through email</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <form id="contactForm" name="sentMessage" noValidate="noValidate">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <input className="form-control" id="name" name="name" type="text" placeholder="John Smith" required="required" data-validation-required-message="Please enter your name." onChange={this.handleChange} value={this.state.name}></input>
                            <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                            <input className="form-control" id="email" name="email" type="email" placeholder="johnsmith@gmail.com" required="required" data-validation-required-message="Please enter your email address." onChange={this.handleChange} value={this.state.email}></input>
                            <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                            <input className="form-control" id="phone" name="phone" type="tel" placeholder="778-123-4567" required="required" data-validation-required-message="Please enter your phone number." onChange={this.handleChange} value={this.state.phone}></input>
                            <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <textarea className="form-control" id="message" name="message" placeholder="Enter Message" required="required" data-validation-required-message="Please enter a message." onChange={this.handleChange} value={this.state.message}></textarea>
                            <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit" onClick={this.handleSubmit}>Send Message</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        )
        }
}