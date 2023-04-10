import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = (link) => {

  const projectEth = [
    // {
    //   title: "Coinante",
    //   description: "Decentralized Crypto Lottery",
    //   imgUrl: projImg1,
    //   link: "https://dry-snow-4572.on.fleek.co/"
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   link: "https://www.twitter.com"
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    //   link: "https://www.instagram.com"
    // },
  ];
   const projectSol = [
   
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   link: "https://www.twitter.com"
    // }, 
    // {
    //   title: "Coinante",
    //   description: "Decentralized Crypto Lottery",
    //   imgUrl: projImg1,
    //   link: "https://dry-snow-4572.on.fleek.co/"
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   link: "https://www.twitter.com"
    // }, 
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Showcase</h2>
                <p>Listed below are various Service Portfolios.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Cleaning Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Logistics Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other Services</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : "pe-auto"} >
                    <Tab.Pane eventKey="first">
                      <p>Cleaning Services</p>
                      <Row>
                        {
                          projectEth.map((project, index, link) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                {...link}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Logistics Services</p>
                      <Row>
                        {
                          projectSol.map((project, index, link) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                {...link}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> Other Services </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
