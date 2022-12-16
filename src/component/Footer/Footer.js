import './footer.css';
import home from '../../img/footer/home.svg';
import user from '../../img/footer/user.svg';
import bag from '../../img/footer/bag.svg';
import instagram from '../../img/footer/instagram.svg';
import telegram from '../../img/footer/telegram.svg';
import linkedin from '../../img/footer/linkedin.svg';
import { motion } from 'framer-motion';

const Footer = (props) => {
    const textDown = {
        hidden: {
            y: 150,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    return (
        <motion.footer className="footer" ref={props.scrollToContacts} initial='hidden' whileInView='visible' viewport={{amount: 0.7, once: true}}>
            <div className="footer__container">
                <div className="footer-content">
                    <div className="menu__footer">
                        <ul className="footer__list menu__list">
                            <li className="footer__item menu__item">
                                <motion.a href="" className="footer__link menu__link" variants={textDown} custom={0.2}>
                                    <img src={home} alt="" />
                                    Home
                                </motion.a>
                            </li>
                            <li className="footer__item menu__item">
                                <motion.span className='footer__link menu__link' onClick={props.scrollToAbout} variants={textDown} custom={0.5}>
                                    <img src={user} alt="" />
                                    About me
                                </motion.span>
                            </li>
                            <li className="footer__item menu__item">
                                <motion.span className='footer__link menu__link' onClick={props.scrollToWork} variants={textDown} custom={0.8}>
                                    <img src={bag} alt="" />
                                    Works
                                </motion.span>
                            </li>
                        </ul>
                        <ul className="social__list menu__link">
                            <li className="social__item">
                                <motion.a href='https://www.instagram.com/bantixk/' className="social__link" variants={textDown} custom={1}>
                                    <img src={instagram} alt="" />
                                </motion.a>
                            </li>
                            <li className="social__item">
                                <motion.a href='https://t.me/antony_developer' className="social__link" variants={textDown} custom={1.2}>
                                    <img src={telegram} alt="" />
                                </motion.a>
                            </li>
                            <li className="social__item">
                                <motion.a href='https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D1%81%D0%BE%D0%BB%D0%BE%D0%B2-%D1%8F%D0%BD%D0%BE%D0%B2-75522a257/' className="social__link" variants={textDown} custom={1.4}>
                                    <img src={linkedin} alt="" />
                                </motion.a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer;