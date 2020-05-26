import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Carousel, { Modal, ModalGateway } from "react-images";

// Components
import Headline from "../../components/common/Headline";

const portfolio = [
    {
        name: "All Worls",
        items: [
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-1.jpg",
                thumbnail: "/assets/images/portfolio/1-1.jpg",
            },
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-2.jpg",
                thumbnail: "/assets/images/portfolio/1-2.jpg",
            },
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Mobile Apps",
                src: "/assets/images/portfolio/1-3.jpg",
                thumbnail: "/assets/images/portfolio/1-3.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-5.jpg",
                thumbnail: "/assets/images/portfolio/1-5.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-6.jpg",
                thumbnail: "/assets/images/portfolio/1-6.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-7.jpg",
                thumbnail: "/assets/images/portfolio/1-7.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-8.jpg",
                thumbnail: "/assets/images/portfolio/1-8.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-9.jpg",
                thumbnail: "/assets/images/portfolio/1-9.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-10.jpg",
                thumbnail: "/assets/images/portfolio/1-10.jpg",
            },
        ],
    },
    {
        name: "Web Design",
        items: [
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-1.jpg",
                thumbnail: "/assets/images/portfolio/1-1.jpg",
            },
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-2.jpg",
                thumbnail: "/assets/images/portfolio/1-2.jpg",
            },
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-3.jpg",
                thumbnail: "/assets/images/portfolio/1-3.jpg",
            },
            {
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            },
        ],
    },
    {
        name: "Mobile Apps",
        items: [
            {
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-5.jpg",
                thumbnail: "/assets/images/portfolio/1-5.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-6.jpg",
                thumbnail: "/assets/images/portfolio/1-6.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-7.jpg",
                thumbnail: "/assets/images/portfolio/1-7.jpg",
            },
        ],
    },
    {
        name: "Branding",
        items: [
            {
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-8.jpg",
                thumbnail: "/assets/images/portfolio/1-8.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-9.jpg",
                thumbnail: "/assets/images/portfolio/1-9.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-9.jpg",
                thumbnail: "/assets/images/portfolio/1-9.jpg",
            },
            {
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-10.jpg",
                thumbnail: "/assets/images/portfolio/1-10.jpg",
            },
        ],
    },
];

const images = [
    {
        src: "/assets/images/portfolio/1-1.jpg",
    },
    {
        src: "/assets/images/portfolio/1-2.jpg",
    },
    {
        src: "/assets/images/portfolio/1-3.jpg",
    },
    {
        src: "/assets/images/portfolio/1-4.jpg",
    },
    {
        src: "/assets/images/portfolio/1-5.jpg",
    },
    {
        src: "/assets/images/portfolio/1-6.jpg",
    },
    {
        src: "/assets/images/portfolio/1-7.jpg",
    },
    {
        src: "/assets/images/portfolio/1-8.jpg",
    },
    {
        src: "/assets/images/portfolio/1-9.jpg",
    },
    {
        src: "/assets/images/portfolio/1-10.jpg",
    },
];

function Portfolio() {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleLightbox = (index) => {
        setSelectedIndex(index);
        setLightboxIsOpen(!lightboxIsOpen);
    };

    return (
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Portfolio" title="Let's See My Work" divider_1={true} position="center" />
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            {portfolio.map((category, categoryIndex) => (
                                <Tab key={categoryIndex}>{category.name}</Tab>
                            ))}
                        </TabList>
                        {portfolio.map((category, categoryIndex) => (
                            <TabPanel key={categoryIndex}>
                                <Row className="row-center mb--30">
                                    {category.items.map((item, index) => (
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3} onClick={() => toggleLightbox(index)}>
                                            <div className="portfolio-item">
                                                <div className="portfolio-card">
                                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.src})` }} />
                                                    <div className="content">
                                                        <button className="button button-circle button-icon button-circle-md button-primary">
                                                            <span className="el-icon-icon ti-fullscreen"></span>
                                                        </button>
                                                        <span>{item.title}</span>
                                                        <h3>{item.subtitle}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>
                </Container>
                <ModalGateway>
                    {lightboxIsOpen ? (
                        <Modal onClose={toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </section>
    );
}

export default Portfolio;
