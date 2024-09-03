import Image from 'next/image';
import { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export default function Slider({ slides }) {
    const length = slides.length;
    const [current, setCurrent] = useState(0);
    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <div id='gallery' className='max-w-[1240px] mx-auto'>
            <h1 className='text-2xl font-bold text-center p-4'>Sky Arcade</h1>
            <div className="relative flex justify-center p-4">
                {SliderData.map((slide, index) => {
                    return (
                        <div key={index} className={index === current ? 'opacity-[1] ease-in-out duration-500' : 'opacity-0'}>
                            <FaArrowCircleLeft onClick={prevSlide} size={50} className='absolute top-[50%] left-[240px] text-white/70 cursor-pointer select-none z-[2]' />
                            {index === current && <Image height={600} width={800} src={slide.image} alt="" objectFit='cover' />}
                            <FaArrowCircleRight onClick={nextSlide} size={50} className='absolute top-[50%] right-[240px] text-white/70 cursor-pointer select-none z-[2]' />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};