'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function MiddleContent() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    return (
        <motion.div className='bg-[#D3D8E1] w-full p-6 lg:p-12'>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='uppercase text-sm lg:text-base mb-6 lg:mb-20'>
                who we are.
            </motion.div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='uppercase text-2xl lg:text-6xl lg:w-2/3 font-semibold mb-6 lg:mb-20'>
                Welcome to the heart of innovation. Experience creativity like never before.
            </motion.div>

            <div className='flex flex-col lg:flex-row gap-6 lg:gap-20'>
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='text-sm lg:text-base lg:flex-1'>
                    Based in the vibrant heart of Paris, we specialize in bringing visions to life, delivering high-quality production
                    services for global brands and creatives.
                    <br />
                    <br />
                    From intimate street shoots to large-scale productions blending real-world locations with studio precision, we
                    streamline the process—ensuring efficiency, creativity, and seamless execution.
                </motion.p>
                <div className='h-[200px] lg:h-[350px] lg:flex-1 relative overflow-hidden'>
                    <motion.div
                        ref={containerRef}
                        animate={{ y: isInView ? '100%' : '0' }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='absolute top-0 left-0 w-full h-full bg-[#D3D8E1] z-10'></motion.div>
                    <video className='w-full h-full object-cover pointer-events-none' playsInline autoPlay muted loop>
                        <source src='/movie1.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </motion.div>
    );
}
