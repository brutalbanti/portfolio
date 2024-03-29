import './sectionabout.css';
import man from '../../../img/manabout.svg';
import React, { useEffect, useState } from 'react';
import music from '../../../img/music.svg';
import lamp from '../../../img/lamp.svg';
import arrow from '../../../img/arrow-for-text.svg';
import { motion } from 'framer-motion';


const SectionAbout = (props) => {
    const [readMore, setReadMore] = useState(false);
    const openForRead = () => {
        setReadMore(true)
    }

    const closeForRead = () => {
        setReadMore(false)
        props.scrollToAbout()
    }

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

    const downAnimation = {
        hidden: {
            y: 150,
            opacity: 0
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }

    const imageRight = {
        hidden: {
            opacity: 0,
        },
        visible: custom => ({
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }

    return (
        <motion.section className="page__about" ref={props.scrollToSection} initial='hidden' whileInView='visible' viewport={{ amount: 0.6, once: true }}>
            <div className="about__container" >
                <div className="about-content" >
                    <div className="about-content__bio">
                        <motion.img src={music} alt="emoji-music" className='emoji-music' custom={1} variants={textAnimation} />
                        <motion.img src={lamp} alt="emoji-lamp" className='emoji-lamp' custom={1} variants={textAnimation} />
                        {readMore === false &&
                            <motion.img src={arrow} alt="emoji-arrow" className='emoji-arrow' custom={2} variants={downAnimation} />
                        }
                        <motion.div className="bio-content__title" custom={2} variants={textAnimation}>About <span>me</span></motion.div>
                        <motion.p className="bio-content__text" viewport={{ once: true }} custom={2} variants={textAnimation}>
                            Вітаю роботодавців.
                            Мені 18 років, я студент. Проходив курси в ITEA. Хороші знання HTML, CSS, JS, React.
                            <br />
                            <br />
                            Коммерційний досвід: <br />
                            - Розробляв фронт сайту TikTok analytics - 1 місяць(проект призупинили)
                             <br /> 
                             <br />
                            Некомерційний досвід: <br />
                            - Розробки пет-проектів, які є в портфоліо. <br />
                            Займаюсь розробкою півтора року. 
                            <br />
                            <br />
                            Навички: <br />
                            - Адаптивна верстка різних сайтів. <br />
                            - React.{readMore === false ?
                                <span className='more-read'>..<b onClick={openForRead}>Читати більше</b></span>
                                :
                                <br />}
                            <span className='more' style={readMore === false ? { display: 'none' } : { display: 'block' }}>
                                - TypeScript (60%)
                                - Верстка First mobile, pixel perfect <br />
                                - Є досвід із хостингами (залити сайт на хост, купити домен, залити сайт на домен) <br />
                                - Був невеликий досвід верстки email-листа HTML Inline-CSS <br />
                                - Навички роботи з GitHub(деплой html-сайту, react-додатку, та налаштування GitHub Pages).
                                <br />
                                <br />
                                Для деплоя реакт додатку використовую vercel.com.
                                <br />
                                <br />
                                В даний час вдосконалюю навички TypeScript. <br />
                                Навички в React: <br />
                                - Базове розуміння Webpack. <br />
                                - Деплой реакт-додатків на git. <br />
                                - Вміння створити проект. <br />
                                - Написання фронту для проектів.
                                <br />
                                <br />
                                Ви зможете надати мені тестове завдання, яке я виконаю, щоб ви дізнались мої навички.
                                <br />
                                <br />
                                Захоплення це програмування та спорт. Займаюся змішаними єдиноборствами. Більшість часу приділяю програмуванню, вивчення чогось нового, удосконалення своїх навичок, набивання досвіду.
                                <br />
                                <br />
                                Ще трохи про мене: <br />
                                - Дружелюбний; <br />
                                - Стресостійкий; <br />
                                - Доводжу справу до кінця; <br />
                                - Визнаю свої помилки та виправляю їх якщо це можливо; <br />
                                - Готовий вивчати щось нове для себе під час роботи у вашій компанії;
                                <br />
                                <br />
                                Нижче ви зможете побачити секцію з роботами в якій є: <br />
                                - Декілька зверстаних адаптивних сайтів; <br />
                                - Проект Star Wars API; <br />
                                - Проект GitHub Battle; <br />
                                - Проект прогноз погоди; <br />
                                - Проект Clone Netflix; <br />
                                - Особистий проект Relax Programming. В ньому є таймер для відпочинку, можливо настроїти на скільки хвилин поставити таймер, увімкнути/вимкнути звук будильника. Є аудиоплеєр. Є три ToDo листи - (очікування/розробка/зроблено) <br />
                                - Проект CRM drive.
                                <br />
                                <br />
                                Дякую за увагу! <br />
                                <span className='read-less'><b onClick={closeForRead}>Приховати опис..</b></span>
                            </span>
                        </motion.p>
                    </div>
                    <div className="about-content__image">
                        <motion.img src={man} alt="" viewport={{ once: true }} custom={1} variants={imageRight} />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default SectionAbout;