import { Row, Col } from 'react-bootstrap';
import styles from './background.module.css'

function Background() {
    return ( 
        <Row className={styles.background}>
            <Col md={6} className={styles.content}>
                <h1>Discover the world’s top <br></br> designers & creatives</h1>
                <p>
                Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.
                </p>
                <button>Signup</button>
            </Col>
            <Col md={6} className={styles.image}>
                <div></div>
                <p>
                    Learn more about how we’re supporting Ukraine. Art by Merge Development
                </p>
            </Col>
        </Row>
     );
}

export default Background;