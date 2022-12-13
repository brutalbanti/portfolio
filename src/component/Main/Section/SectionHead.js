import React from "react";
import man from '../../../img/manhead.svg';
import './sectionhead.css';
import arrow from '../../../img/arrow.svg';
import { motion } from 'framer-motion';
import arrowDown from '../../../img/arrow-down.svg';

const SectionHead = (props) => {

    const textAnimation = {
        hidden: {
            x: -150,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    const imageAnimation = {
        hidden: {
            y: -150,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }

    const imageDown = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }

    const imageRight = {
        hidden: {
            x: 150,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }


    return (
        <motion.section className="page__head" initial='hidden' whileInView='visible' viewport={{once: true}}>
            <div className="head__container">
                <div className="head__content">
                    <div className="head-content__left">
                        <div className="content-left__top">
                            <motion.h2 custom={1} variants={textAnimation} className="content-left__title">
                                FrontEnd React <br />
                                <span>Developer</span>
                            </motion.h2>
                            <motion.a href="https://t.me/antony_developer" className="content-left__btn" variants={textAnimation} custom={2}>
                                Hire me
                            </motion.a>
                            <motion.img src={arrow} alt="" className="arrow" custom={2} variants={imageAnimation} />
                        </div>
                        <motion.div className="content-left__down" custom={2} variants={imageDown}>
                            <button className="content-left__btn-down" onClick={() => props.scrollToAbout()}>
                                <img src={arrowDown} alt="" />
                            </button>
                        </motion.div>
                    </div>
                    <div className="head-content__right">
                        <motion.div className="content-right__image" variants={imageRight} custom={2}>
                            <img src={man} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default SectionHead;