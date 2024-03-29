import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>Full-stack software engineer, marketer, and product builder.</h3>
                            <div className="separator" />
                            <p>I'm passionate about making complexity attainable, palatable, and delightful for the user.</p>

                            <p>Currently I'm applying this passion at Juni Learning, as the Team Lead for the Growth Engineering team, as well as by developing Skyvue, a no-code data warehouse that looks and feels like a spreadsheet, but is able to seamlessly handle millions of rows.</p>

                            <p>What else? I'm a musician, dog parent, married to Andréa, and a pretty good cook.</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/tristan-kenneth-tarpley/')}/>
                                <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://twitter.com/_TristanKenneth')} />
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/tristantarpley')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="JavaScript" value={90} delay={600} />
                                <Progress name="TypeScript" value={90} delay={600} />
                                <Progress name="React" value={85} delay={600} />
                                <Progress name="Node.JS" value={80} delay={600} />
                                <Progress name="HTML/CSS" value={100} delay={600} />
                                <Progress name="Python" value={60} delay={600} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero