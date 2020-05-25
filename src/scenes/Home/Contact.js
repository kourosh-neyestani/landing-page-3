import React from "react";
import { Container, Row, Col } from "react-grid-system";

function Contact() {
    return (
        <section class="section section-contact section-contact-1">
            <div class="display-center">
                <div className="display-spacing">
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <div class="contact-image">
                                    <div class="image overlay-image" style={{ backgroundImage: `url(/assets/images/contact/1-1.jpg)` }}></div>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div class="contact-content">
                                    <header className="el-heading">
                                        <h2 className="el-icon">
                                            <span className="el-icon-title">CONTACT ME</span>
                                        </h2>
                                        <h3>
                                            <span>Get in touch with me today.</span>
                                        </h3>
                                        <div class="divider divider-1"></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </header>
                                    <form class="form form-1 pt-15">
                                        <Row class="row">
                                            <Col xs={12} sm={12} md={6}>
                                                <div class="form-item">
                                                    <input type="text" id="form-item-name" />
                                                    <label for="form-item-name">Your Name</label>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6}>
                                                <div class="form-item">
                                                    <input type="email" id="form-item-email" />
                                                    <label for="form-item-email">Your Email</label>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={12}>
                                                <div class="form-item">
                                                    <textarea id="form-item-message"></textarea>
                                                    <label for="form-item-message">Your Message</label>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={12}>
                                                <button class="button button-md button-primary">Send Message</button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Contact;
