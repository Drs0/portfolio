import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

let skills = ['Html', 'CSS', 'JavaScript', 'React', 'Vue', 'C#', 'Python', 'Django', 'Flask', 'PHP', 'Laravel', 'WordPress'];
let skillDescriptions = [
    'Hypertext Markup Language',
    'Cascading Style Sheets',
    'A high-level programming language',
    'A JavaScript library for building user interfaces',
    'A progressive framework for building user interfaces',
    'A general-purpose programming language',
    'A high-level programming language',
    'A web framework for Python',
    'A micro web framework for Python',
    'A server-side scripting language',
    'A PHP web application framework',
    'A content management system (CMS)',
];

const Swipercomponent = () => {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setCurrentSkillIndex(swiper.realIndex);
    };

    return (
        <div className="skills_container">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                onSlideChange={handleSlideChange}
            >
                {skills.map((skill, index) => (
                    <SwiperSlide key={index}>{skill}</SwiperSlide>
                ))}
            </Swiper>
            <div className="description">
                <span>
                    {skillDescriptions[currentSkillIndex]}
                </span>
            </div>
        </div>
    );
}

export default Swipercomponent;
