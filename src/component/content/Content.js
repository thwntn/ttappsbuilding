import { Row } from 'react-bootstrap';
import styles from './content.module.css'

function Content() {
    return ( 
        <Row class={styles.frameContent}>
            <ul>
                <li className={styles.item}>
                    {/* <img src="https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg"></img> */}
                </li>
                <li>1</li>

                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>

            </ul>
        </Row>
     );
}

export default Content;