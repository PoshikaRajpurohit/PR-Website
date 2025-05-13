
import React, { useState, useEffect } from 'react';
import {Navbar,Nav,NavDropdown,Container,Offcanvas,Accordion,Row, Col,Button} from 'react-bootstrap';
import {FaSearch,FaRegUser,FaShoppingCart,FaTwitter,FaFacebook,FaPinterest,FaInstagram,FaYoutube, FaRegHeart} from 'react-icons/fa';
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/footerlogo.png";
const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSidebar, setShowSidebar] = useState(false);
  const homePages = [
    "Home Page 01", "Home Page 02", "Home Page 03", "Home Page 04",
    "Home Page 05", "Home RTL", "Home OnePage", "Header Style 1"
  ];
  const pages = ["About us", "Our Services", "Our Team", "Testimonials", "404"];
  const blogPages = [
    "Blog 01", "Blog 02", "Blog 03", "Blog 04", "Blog 05", "Blog Details 01", "Blog Details 02"];
  const shop = [
    { title: "Shop Page", items: ["Shop Page 01", "Shop Page 02", "Shop Page 03", "Shop Page 04", "Shop Page 05","Shop Page 06"]},
    { title: "Product Details Page", items: ["Product Details 01", "Product Details 02", "Product Details 03", 
        "Product Details 04", "Product Details 05","Product Details 06","Product Details 07"] },
    { title: "Other Shop Page", items: ["Cart Page", "Checkout Page", "My Account"] }
  ]
  const element = [
    { title: "Elements 1", items: ["Category 01", "Category 02", "Category 03", "Category 04",
       "Shop 01","Shop 02","Shop 03","Shop 04"]},
    { title: "Elements 2", items: ["News 01", "News 02", "Service 01", 
        "Service 02", "Team 01","Team 02","Instagram","Clients"] },
  ]
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);};
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleClick = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };
  const handleDropdownClick = () => {
    setShowSidebar(false);
  };
 
  if (isMobile) {
    return (
      <>
        <Navbar bg="light" expand="lg" className="d-flex justify-content-between px-3 py-4">
          <Navbar.Brand ><img src={logo} style={{width:"129px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" onClick={() => setShowSidebar(true)}/>
          <div className="d-flex gap-3">
            <FaSearch />
            <FaRegHeart />
            <FaRegUser />
            <div style={{ position: "relative" }}>
              <FaShoppingCart />
              <span style={{position: "absolute",top: -5,right: -10,backgroundColor: "black",color: "white",borderRadius: "50%",
              fontSize: "12px",padding: "2px 6px" }} > 3</span>
            </div>
          </div>
        </Navbar>
    <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="end" className="offcanvas bg-black text-white " 
          style={{width: "300px"}}>
      <Offcanvas.Header>
          <Button variant="close" onClick={() => setShowSidebar(false)} className="btn-close-white" aria-label="Close"></Button>
      </Offcanvas.Header>
        <Offcanvas.Title className='mx-3 my-3 mb-5'>
              <a href=""><img src={logo2} alt="" style={{width:"120px"}}/></a>
        </Offcanvas.Title>
          <Offcanvas.Body>
              <Accordion className="accordion-dark">
            <Accordion.Item eventKey="0">
                  <Accordion.Header>Home</Accordion.Header>
              <Accordion.Body>
                {homePages.map((item, index) => (
                  <div key={index} onClick={() => handleDropdownClick(item)} style={{ cursor: "pointer", padding: "5px 0" }}>{item}<hr/>
                  </div>
                  ))}
              </Accordion.Body>
          </Accordion.Item>
                <hr className='m-0'/>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Pages</Accordion.Header>
        <Accordion.Body>
          {pages.map((item, index) => (
            <div key={index} onClick={() => handleDropdownClick(item)} style={{ cursor: "pointer", padding: "5px 0" }}>{item}<hr/>
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <hr className='m-0'/>
      <Accordion.Item eventKey="2" className='mb-0'>
        <Accordion.Header>Shop</Accordion.Header>
        <Accordion.Body>
          {shop.map((section, index) => (
            <div key={index}>
              {section.items.map((item, i) => (
                <div key={i} onClick={() => handleDropdownClick(item)} style={{ cursor: "pointer", padding: "5px 0" }}>
                  {item}<hr/>
                </div>
              ))}
            </div>
          ))}
         
        </Accordion.Body>
        <hr className='m-0'/>
      </Accordion.Item>    
      <Accordion.Item eventKey="3">
        <Accordion.Header>Elements</Accordion.Header>
        <Accordion.Body>
          {element.map((section, index) => (
            <div key={index}>
              {section.items.map((item, i) => (
                <div key={i} onClick={() => handleDropdownClick(item)} style={{ cursor: "pointer", padding: "5px 0" }}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <hr className='m-0'/>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Blog</Accordion.Header>
        <Accordion.Body>
          {blogPages.map((item, index) => (
            <div key={index} onClick={() => handleDropdownClick(item)} style={{ cursor: "pointer", padding: "5px 0" }}>
              {item}
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <hr className='m-0'/>
    </Accordion>
  <div style={{ marginTop: "100px",  marginBottom:"50px"}} className='contact-info mx-3'>
    <h5>Contact Info</h5>
    <ul className='list-unstyled' style={{color:"#fffc"}}>
      <li>Chicago 12, Melborne City, USA</li>
      <li><a href=""  className="text-decoration-none">+88 01682648101</a></li>
      <li><a href=""  className="text-decoration-none">info@example.com</a></li>
    </ul>
    <ul className='list-unstyled d-flex gap-3  mx-2 text-secondary' style={{marginTop:"70px"}}>
      <li><a href="" className="text-decoration-none text-secondary "><FaTwitter /></a></li>
      <li><a href="" className="text-decoration-none text-secondary "><FaFacebook /></a></li>
      <li><a href="" className="text-decoration-none text-secondary "><FaPinterest /></a></li>
      <li><a href="" className="text-decoration-none text-secondary "><FaInstagram /></a></li>
      <li><a href="" className="text-decoration-none text-secondary "><FaYoutube /></a></li>
    </ul>
  </div>
  </Offcanvas.Body>

        </Offcanvas>
      </>
    );
  }
  
  return (
    <Navbar className="header" expand="lg">
      <Container fluid className="px-4">
        <Navbar.Brand>
          <img src={logo} alt="Logo" style={{ width: '129px', height: '28px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-between">
          <Nav className="mx-auto navbar-nav text-black ">
            <div onClick={()=> handleClick('home')}>
              <NavDropdown title="Home" show={openDropdown === 'home'} className=" menu-title">
                {homePages.map((item, index) => (
                  <NavDropdown.Item key={index}  className="text-black"> 
                    {item}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </div>
            <div onClick={()=> handleClick('pages')}>
              <NavDropdown title="Pages" show={openDropdown === 'pages'} className=" menu-title">
                {pages.map((item, index) => (
                  <NavDropdown.Item key={index} className="text-black" >
                    {item}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </div>
           <div onClick={()=> handleClick('Shop')}>
              <NavDropdown
                title={<span className="text-black menu-title" >Shop <span className="badge bg-danger ">Hot</span></span>}
                id="shop-dropdown"show={openDropdown === 'Shop'}className="position-static  "
              >
                <Container className="mega-menu">
                  <Row>
                    {shop.map((section, idx) => (
                      <Col key={idx}>
                        <h5 className="text-black">{section.title}</h5>
                        <Nav className="flex-column">
                          {section.items.map((item, i) => (
                            <React.Fragment key={i}>
                              <Nav.Link href="#" className="text-black">
                                {item}
                              </Nav.Link>
                              {i !== section.items.length - 1 && <NavDropdown.Divider />}
                            </React.Fragment>
                          ))}
                        </Nav>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </NavDropdown>
            </div>

            <div onClick={()=> handleClick('Elements')}>
              <NavDropdown
                title="Elements"
                id="elements-dropdown"
                className="position-static text-black menu-title"
                show={openDropdown === 'Elements'}
              >
                <Container className="mega-menu">
                  <Row>
                    {element.map((section, idx) => (
                      <Col key={idx}>
                        <h5 className="text-black">{section.title}</h5>
                        <Nav className="flex-column">
                          {section.items.map((item, i) => (
                            <React.Fragment key={i}>
                              <Nav.Link href="#" className="text-black">
                                {item}
                              </Nav.Link>
                              {i !== section.items.length - 1 && <NavDropdown.Divider />}
                            </React.Fragment>
                          ))}
                        </Nav>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </NavDropdown>
            </div>
            <div onClick={()=> handleClick('blog')}>
              <NavDropdown title="Blog" show={openDropdown === 'blog'} className=" menu-title">
                {blogPages.map((item, index) => (
                  <NavDropdown.Item
                    key={index}
                    className="text-black"
                  >
                    {item}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </div>
            <Nav.Link href="#" className=" menu-title nav-link pt-0">
              <a href="#" className='nav-link'>Contact</a>
            </Nav.Link>
          </Nav>

          <Nav>
            {[FaSearch, FaRegHeart, FaRegUser].map((Icon, index) => (
              <Nav.Link key={index} className="text-black pt-1 icon" style={{ fontSize: "22px" }}>
                <Icon />
                
              </Nav.Link>
            ))}
             <Nav.Link style={{ position: "relative" }} className='pt-2 nav-link'>
              <FaShoppingCart className='fs-4 cart'/>
              <span style={{position: "absolute",top: -5,right: -10,backgroundColor: "black",color: "white",borderRadius: "50%",
              fontSize: "11px",padding: "2px 6px" }} > 3</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;

