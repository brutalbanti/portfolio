import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import './sectionworks.css';
import { motion } from 'framer-motion';

import page_1 from '../../../img/preview-sites/01.png';
import page_2 from '../../../img/preview-sites/02.png';
import page_3 from '../../../img/preview-sites/03.png';
import page_4 from '../../../img/preview-sites/04.png';
import page_5 from '../../../img/preview-sites/05.png';
import page_6 from '../../../img/preview-sites/06.png';
import page_7 from '../../../img/preview-sites/07.png';
import page_8 from '../../../img/preview-sites/08.png';

const SectionWorks = (props) => {
    const works = [
        { image: page_8, url: 'https://weather-eight-tau.vercel.app/' },
        { image: page_6, url: 'https://brutalbanti.github.io/project-star/' },
        { image: page_7, url: 'https://battle-git-two.vercel.app/' },
        { image: page_1, url: 'https://nura.vercel.app/' },
        { image: page_2, url: 'https://brutalbanti.github.io/restaurant/' },
        { image: page_3, url: 'https://brutalbanti.github.io/Swingvy/' },
        { image: page_4, url: 'https://brutalbanti.github.io/Lemur-landing/' },
        { image: page_5, url: 'https://brutalbanti.github.io/RealEstate/' }
    ]
    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            767: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            991: {
                slidesPerView: 3,
            }
        }
    }

    const imageOpacity = {
        hidden: {
            opacity: 0,
        },
        visible: custom => ({
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }

    const textAnim = {
        hidden: {
            x: -150,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    return (
        <motion.section className="page__works" ref={props.scrollToWorks} initial='hidden' whileInView='visible' viewport={{ amount: 0.6, once: true }}>
            <div className="works__container">
                <div className="works-content">
                    <motion.h2 className="works-content__title" custom={1} variants={textAnim}>
                        My recent <span>works</span>
                    </motion.h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        {...params}
                    >
                        {works.map((work, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <motion.a href={work.url} target='_blank' custom={1} variants={imageOpacity}>
                                        <div className='slide-content'>
                                            <div className="slide-content__image">
                                                <img src={work.image} alt="" />
                                            </div>
                                        </div>
                                    </motion.a>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </motion.section >
    )
}

export default SectionWorks;