import styles from './body.module.css'
import { Row, Col } from 'react-bootstrap'
import { FaAlignRight } from 'react-icons/fa'
import { FaSistrix } from 'react-icons/fa'

function Body() {
    return ( 
        <Row className={styles.body}>
            <Row className={styles.navigation}>
                <div className={styles.nav}>
                    <Col md={2} className={styles.select}>
                        <select>
                            <option>After install windows</option>
                            <option>Popular</option>
                            <option>Favorite</option>
                            <option>Tools</option>
                            <option>Game</option>
                        </select>
                    </Col>
                    <Col md={8} className={styles.listChoose}>
                        <ul>
                            <li>All</li>
                            <li>Animation</li>
                            <li>Branding</li>
                            <li>illustration</li>
                            <li>Mobile</li>
                            <li>Print</li>
                            <li>Product Design</li>
                            <li>Typography</li>
                            <li>Web Design</li>
                        </ul>
                    </Col>
                    <Col md={2} className={styles.filters}>
                        <button><FaAlignRight></FaAlignRight>Filters</button>
                    </Col>
                </div>
                <Row>
                    <Col className={styles.navFilters}>
                        <label>Tags</label>
                        <div>
                            <input></input>
                            <FaSistrix className={styles.iconSearch}></FaSistrix>
                        </div>
                    </Col>
                    <Col className={styles.navFilters}>
                        <label>Color</label>
                        <div className={styles.filterColor}>
                            <div className={styles.iconFilterColor}></div>
                            <input placeholder='Enter Text'></input>
                            <FaSistrix className={styles.iconSearch}></FaSistrix>
                        </div>
                    </Col>
                    <Col className={styles.navFilters}>
                        <label>Timeframe</label>
                        <div>
                            <input></input>
                            <FaSistrix className={styles.iconSearch}></FaSistrix>
                        </div>
                    </Col>
                    <Col className={styles.navFilters}>
                        <label>Made With</label>
                        <div>
                            <input></input>
                            <FaSistrix className={styles.iconSearch}></FaSistrix>
                        </div>
                    </Col>
                    <Col className={styles.navFilters}>
                        <label>Downloads</label>
                        <div>
                            <input></input>
                            <FaSistrix className={styles.iconSearch}></FaSistrix>
                        </div>
                    </Col>
                </Row>
            </Row>
        </Row>
     );
}

export default Body;