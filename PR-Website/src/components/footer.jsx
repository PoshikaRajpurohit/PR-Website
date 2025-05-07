
import React, { useState } from 'react';
import logo from "../assets/images/footerlogo.png";
import card1 from "../assets/images/card-1.png";
import card2 from "../assets/images/card-2.png";
import card3 from "../assets/images/card-3.png";
import card4 from "../assets/images/card-4.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  FaLocationDot,
  FaPhoneVolume,
  FaRegEnvelope,
  FaVimeoV,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setSubmitted(true);

    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <footer className="bg-black text-white text-start py-5">
        <Container>
          <Row className="gy-4" style={{ marginBottom: "80px" }}>
            <Col sm={12} md={4} lg={2}>
              <img src={logo} alt="Logo" style={{ width: "120px" }} />
            </Col>

            <Col sm={12} md={4} lg={2}>
              <h3>Category</h3>
              <ul className="list-unstyled">
                {["Men", "Women", "Kids", "Accessories", "Shoe"].map((item, i) => (
                  <li key={i} style={{ margin: "0px 0px 12px" }}>
                    <a href="#" className="text-white-50 text-decoration-none" style={{ fontSize: "15px" }}>{item}</a>
                  </li>
                ))}
              </ul>
            </Col>

            <Col sm={12} md={4} lg={2}>
              <h3>Useful Links</h3>
              <ul className="list-unstyled">
                {["News & Tips", "About Us", "Terms & Conditions", "Our Shop", "Contact Us"].map((link, i) => (
                  <li key={i} style={{ margin: "0px 0px 12px" }}>
                    <a href="#" className="text-white-50 text-decoration-none">{link}</a>
                  </li>
                ))}
              </ul>
            </Col>

            <Col sm={12} md={6} lg={2}>
              <h3>Contact</h3>
              <ul className="list-unstyled text-secondary">
                <li style={{ margin: "0px 0px 17px",fontSize: "15px" }}>
                  <FaLocationDot className="me-2" style={{ fontSize: "30px" }} />
                    4708 Ruecker Wall,<br/>Kassandratown, HI
                </li>
                <li style={{ margin: "0px 0px 17px" }}>
                 <a href="#" className='text-white-50 text-decoration-none'>
                 <FaPhoneVolume className="me-2" style={{ fontSize: "30px" }} />
                 +2(305) 587-3407
                 </a>
                </li>
                <li style={{ margin: "0px 0px 17px" }}>
                  <a href="#" className='text-white-50 text-decoration-none'>
                  <FaRegEnvelope className="me-2" style={{ fontSize: "30px" }} />
                  info@example.com
                  </a>
                </li>
              </ul>
            </Col>

            <Col xs={12} md={6} lg={2}>
              <h3>Newsletter</h3>
              <p className="text-white-50 mb-4">4708 Ruecker Wall, Kassandratown, HI 97729</p>
              <Form onSubmit={handleFormSubmit}>
                <Form.Control type="email" placeholder="Enter your Email" className="mb-3" value={email} onChange={handleInputChange} required     
                style={{borderRadius: "0px",border: "none",backgroundColor: "#F2F2F2",padding: "10px 20px" }}/>
                <Button variant="light" size="sm" type="submit" className='text-white fw-bold f-btn'>
                  Subscribe
                </Button>
              </Form>
              {submitted && <div className="text-success mt-2">Thanks for subscribing!</div>}
            </Col>
          </Row>
          <hr />
          <Row className="mt-4 d-flex text-sm-center ">
            <Col xs={12} md={6} className="mb-3 mb-md-0 justify-content-start text-md-start">
              {[card1, card2, card3, card4].map((card, i) => (
                <img key={i} src={card} alt={`card-${i + 1}`} style={{ width: "52px", height: "34px" }} className="me-2" />
              ))}
            </Col>
            <Col xs={12} md={6} className='justify-content-end text-md-end' style={{ fontSize: "14px" }}>
              {[FaFacebookF, FaTwitter, FaVimeoV, FaGooglePlusG].map((Icon, i) => (
                <a key={i} href="#" className="text-secondary ms-3 fs-5">
                  <Icon />
                </a>
              ))}
              <li className='list-unstyled'>
                <p className='text-secondary'>Castro © 2020 All Right Reserved</p>
              </li>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
