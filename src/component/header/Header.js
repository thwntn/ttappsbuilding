import styles from './header.module.css';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import clsx from 'clsx';
import { FaOctopusDeploy, FaUserAlt, FaSistrix, FaFeatherAlt, FaEuroSign, FaEraser, FaDove, FaDrumstickBite, FaArrowRight, FaBullseye, FaCoins, FaCogs, FaCompress, FaCross, FaDiceFour, FaDrawPolygon, FaEject, FaEthernet, FaFan } from 'react-icons/fa';

const type = [
    {
        name: "Explore Design Work",
        sub: "Trending designs to inspire you",
        icons: <FaBullseye size={20}></FaBullseye>,
        color: "red"
    },
    {
        name: "New & Noteworthy",
        sub: "Up-and-coming designers",
        icons: <FaOctopusDeploy size={20}></FaOctopusDeploy>,
        color: "rebeccapurple"
    },
    {
        name: "Free",
        sub: "Playoffs",
        icons: <FaCoins size={20}></FaCoins>,
        color: "blue"
    },
    {
        name: "Blog",
        sub: "Interviews, tutorials, and more",
        icons: <FaCogs size={20}></FaCogs>,
        color: "green"
    }
]

const major = [
    {
        name: "Sicientis Technology",
        sub: "Trending designs to inspire you",
        icons: <FaCross size={20}></FaCross>,
        color: "DarkSlateGray"
    },
    {
        name: "Information Technology",
        sub: "Trending designs to inspire you",
        icons: <FaCompress size={20}></FaCompress>,
        color: "red"
    },
    {
        name: "Data Technology",
        sub: "Trending designs to inspire you",
        icons: <FaFeatherAlt size={20}></FaFeatherAlt>,
        color: "green"
    }
]

const system = [
    {
        name: "Windows 11",
        sub: "New operating system",
        icons: <FaDrawPolygon size={20}></FaDrawPolygon>,
        color: "green"
    },
    {
        name: "Windows 10",
        sub: "Trending operating system",
        icons: <FaEject size={20}></FaEject>,
        color: "red"
    },
    {
        name: "Windows 8",
        sub: "Support from micrsoft",
        icons: <FaEthernet size={20}></FaEthernet>,
        color: "blue"
    },
    {
        name: "Windows 7",
        sub: "Not support but can using",
        icons: <FaDove size={20}></FaDove>,
        color: "Aquamarine"
    },
    {
        name: "Windows Vista",
        sub: "Not support",
        icons: <FaEraser size={20}></FaEraser>,
        color: "CornflowerBlue"
    },
    {
        name: "Windows XP",
        sub: "Trending designs to inspire you",
        icons: <FaEuroSign size={20}></FaEuroSign>,
        color: "DarkMagenta"
    },
    {
        name: "Windows Lite",
        sub: "Not support",
        icons: <FaDrumstickBite size={20}></FaDrumstickBite>,
        color: "green"
    },
    {
        name: "Ubuntu",
        sub: "Linux operating system",
        icons: <FaFan size={20}></FaFan>,
        color: "DarkSeaGreen"
    }
]
const market = [
    {
        name: "Office",
        sub: "Manager Data",
        icons: <FaFan size={20}></FaFan>,
        color: "DarkSeaGreen"
    }
]

function Header() {
    return ( 
        <Row className={styles.header}>
            <Col md={7} className={styles.headerLeft}>
                <div className={styles.logo}></div>
                <ul className={styles.selects}>
                    <li>Type
                        <div className={styles.subSelectsType}>
                            <ul className={styles.subSelectsTypeLeft}>
                                {type.map((item, index) => {
                                    return (
                                        <li className={clsx(styles.itemq, styles.itemLeft)}>
                                            <div className={styles.icon} style={{ color: item.color }}>{item.icons}</div>
                                            <div className={styles.content}>
                                                <h5>{item.name}</h5>
                                                <h5 className={styles.subItem}>{item.sub}</h5>
                                            </div>
                                            <div className={styles.go}>
                                                <button style={{ color: item.color}}><FaArrowRight size={10}></FaArrowRight></button>
                                            </div>
                                        </li>
                                    )
                                })}
                                <li className={styles.others}>Participate
                                    <div className={styles.go}>
                                        <button style={{ color: "item.color"}}><FaArrowRight size={10}></FaArrowRight></button>
                                    </div>
                                </li>
                            </ul>
                            <ul className={styles.subSelectsTypeRight}>
                                <li>Browse</li>
                                <li>Animation</li>
                                <li>Branding</li>
                                <li>Illustration</li>
                                <li>Mobile</li>
                            </ul>
                        </div>
                    </li>
                    <li>Major
                        <div className={styles.subSelectsType}>
                            <ul className={styles.subSelectsTypeLeft}>
                                {major.map((item, index) => {
                                    return (
                                        <li className={clsx(styles.itemq, styles.itemLeft)}>
                                            <div className={styles.icon} style={{ color: item.color }}>{item.icons}</div>
                                            <div className={styles.content}>
                                                <h5>{item.name}</h5>
                                                <h5 className={styles.subItem}>{item.sub}</h5>
                                            </div>
                                            <div className={styles.go}>
                                                <button style={{ color: item.color}}><FaArrowRight size={10}></FaArrowRight></button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </li>
                    <li>Find Work</li>
                    <li>Market
                        <div className={styles.subSelectsType}>
                            <ul className={styles.subSelectsTypeLeft}>
                                {market.map((item, index) => {
                                    return (
                                        <li className={clsx(styles.itemq, styles.itemLeft)}>
                                            <div className={styles.icon} style={{ color: item.color }}>{item.icons}</div>
                                            <div className={styles.content}>
                                                <h5>{item.name}</h5>
                                                <h5 className={styles.subItem}>{item.sub}</h5>
                                            </div>
                                            <div className={styles.go}>
                                                <button style={{ color: item.color}}><FaArrowRight size={10}></FaArrowRight></button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </li>
                    <li>System
                        <div className={styles.subSelectsType}>
                            <ul className={styles.subSelectsTypeLeft}>
                                {system.map((item, index) => {
                                    return (
                                        <li className={clsx(styles.itemq, styles.itemLeft)}>
                                            <div className={styles.icon} style={{ color: item.color }}>{item.icons}</div>
                                            <div className={styles.content}>
                                                <h5>{item.name}</h5>
                                                <h5 className={styles.subItem}>{item.sub}</h5>
                                            </div>
                                            <div className={styles.go}>
                                                <button style={{ color: item.color}}><FaArrowRight size={10}></FaArrowRight></button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </li>
                    <li>Info</li>
                </ul>
            </Col>
            <Col md={5} className={styles.headerRight}>
                <div className={styles.search}>
                    <input></input>
                    <div className={styles.searchIcon}><FaSistrix></FaSistrix></div>
                </div>
                <div className={styles.imgUser}><FaUserAlt></FaUserAlt></div>
                <div className={styles.login}>
                    <button>Signin</button>
                </div>
            </Col>
        </Row>
     );
}

export default Header;