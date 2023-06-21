import React, { useState, useEffect } from 'react';
import Link from 'next/router';
import { motion } from 'framer-motion';
// import Flicking, { MoveEvent, WillChangeEvent } from "@egjs/react-flicking";
import CarouselItem from '../carousel-item/carousel-item';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import CarouselProps from '@/interfaces/carousel';
import { AnimatePresence } from 'framer-motion';


const Carousel = ({ items }: { items: CarouselProps[] }) => {
    const [activeIndicator, setActiveIndicator] = useState(0);
    const [index, setIndex] = useState(0);
    const itemsLength = items.length;
    let interval: any;

    useEffect(() => {
        function slider() {
            setIndex(index <= itemsLength ? index + 1 : 0);
        }

        interval = setInterval(() => slider(), 4000);

        document.body.addEventListener("mouseover", () => clearInterval(interval))
    }, [index]);
        
    return (
        <section className="w-full h-full relative z-20">
            <div className="overflow-hidden md:h-full lg:h-[85%] relative">
                {/*<Flicking
                  viewportTag="div"
                  cameraTag="div"
                  cameraClass=""
                  renderOnSameKey={false}
                  align="center"
                  onMove={(e: MoveEvent) => {}}
                  onWillChange={(e: WillChangeEvent) => {}}
                  horizontal={true}
                  circular={true}
                >
                </Flicking>*/}
                {items.map(data => ( <CarouselItem key={data.route} data={data} /> ))}
            </div>

            {/* Controls */}
            <div className="controls_container flex items-end w-[97%] h-56 -z-10 bg-teal-500 absolute -right-[3.3rem] -bottom-[13%] lg:-right-12 lg:bottom-[2.8rem] xlg:bottom-[1.3rem] xlg:-right-14">
                <div className="wrapper bg-inherit w-[96%] h-14 px-6 text-white flex justify-between items-center">
                    {/* Indicators */}
                    <div className="indicators flex items-center gap-x-4">
                        <span className="font-normal text-dark-shade-600">0{activeIndicator + 1}</span>
                        
                        {/* Indicators */}
                        <ul className="relative grid grid-cols-3 w-24 rounded-sm overflow-hidden gap-x-1">
                            {Array(itemsLength).fill(null).map((list, index) => (
                                <li 
                                    key={index}
                                    className={`h-1 cursor-pointer transition-colors ${activeIndicator === index ? "bg-black" : "bg-gray-100/30"}`}
                                    onClick={() => setActiveIndicator(index)}
                                ></li>
                            ))}
                        </ul>

                        <span className="font-normal text-dark-shade-600">03</span>
                    </div>

                    {/* Controls */}
                    <div className="controls text-black flex items-center gap-x-5 text-2xl">
                        <span className="cursor-pointer">
                            <HiArrowLeft />
                        </span>

                        <span className="cursor-pointer">
                            <HiArrowRight />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel