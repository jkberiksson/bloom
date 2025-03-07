'use client';

import { motion, useAnimate, animate, useScroll, useTransform, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

export default function Home() {
    const [blackBar, animateBlackBar] = useAnimate();
    const [countRef, animateCount] = useAnimate();
    const [loadingRef, animateLoading] = useAnimate();
    const [count, setCount] = useState(0);
    const [textRef, animateText] = useAnimate();
    const [textA, animateA] = useAnimate();
    const [textB, animateB] = useAnimate();
    const [textC, animateC] = useAnimate();
    const [textD, animateD] = useAnimate();
    const [showVideo, setShowVideo] = useState(false);
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    useEffect(() => {
        async function animations() {
            animate(0, 100, { onUpdate: (latest) => setCount(Math.floor(latest)), duration: 1, delay: 0.2, ease: 'easeInOut' });
            await animateBlackBar(blackBar.current, { width: '100%' }, { duration: 1.2, ease: [0.87, 0, 0.13, 1] });
            animateCount(countRef.current, { opacity: 0 }, { duration: 0.5, delay: 0.5 });
            await animateLoading(loadingRef.current, { opacity: 0 }, { duration: 0.5, delay: 0.5 });
            await animateBlackBar(blackBar.current, { height: '100vh' }, { duration: 0.3 });
            animateText(textRef.current, { left: '16px', translateX: '50%' }, { duration: 0.5 });
            animateA(textA.current, { display: 'none', opacity: 0, y: '100%' }, { duration: 0.5, delay: 0.22 });
            animateB(textB.current, { display: 'none', opacity: 0, y: '100%' }, { duration: 0.5, delay: 0.18 });
            animateC(textC.current, { display: 'none', opacity: 0, y: '100%' }, { duration: 0.5, delay: 0.14 });
            animateD(textD.current, { display: 'none', opacity: 0, y: '100%' }, { duration: 0.5, delay: 0.1 });
            setShowVideo(true);
        }

        animations();
    }, []);

    return (
        <div>
            <div ref={container} className='flex items-center bg-white h-screen text-black'>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    ref={textRef}
                    className='text-4xl uppercase font-bold absolute top-4 left-1/2 -translate-x-1/2 text-white mix-blend-difference overflow-hidden z-10'
                    layout>
                    <motion.span>b</motion.span>
                    <motion.span ref={textA} className='inline-block'>
                        l
                    </motion.span>
                    <motion.span ref={textB} className='inline-block'>
                        o
                    </motion.span>
                    <motion.span ref={textC} className='inline-block'>
                        o
                    </motion.span>
                    <motion.span ref={textD} className='inline-block'>
                        m
                    </motion.span>
                </motion.h1>

                <motion.div className='flex flex-col gap-2 uppercase w-full'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        ref={loadingRef}
                        className='text-center'>
                        Loading
                    </motion.p>
                    <motion.div ref={blackBar} className='bg-black w-0 h-10'></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        ref={countRef}
                        className='text-center'>
                        / {count}
                    </motion.p>
                </motion.div>
            </div>
            {showVideo && (
                <>
                    <motion.div className='w-full h-screen absolute left-0 top-0 overflow-hidden'>
                        <motion.video
                            style={{ y }}
                            animate={{ scale: 1, rotate: 0 }}
                            initial={{ scale: 0, rotate: -10 }}
                            transition={{ duration: 0.5 }}
                            className='w-full h-full object-cover pointer-events-none'
                            autoPlay
                            muted
                            loop
                            preload='auto'>
                            <source src='/movie.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </motion.video>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className='text-white mix-blend-difference z-10 absolute top-4 right-4 uppercase text-sm font-semibold'>
                            Menu.
                        </motion.div>

                        <motion.div className='text-white z-10 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center uppercase text-3xl lg:text-8xl font-semibold'>
                            <div className='overflow-hidden'>
                                <motion.p initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
                                    YOUR VISION,
                                </motion.p>
                            </div>
                            <div className='overflow-hidden'>
                                <motion.p initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}>
                                    OUR CREATION.
                                </motion.p>
                            </div>
                            <div className='overflow-hidden'>
                                <motion.p
                                    initial={{ y: '100%' }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className='text-orange-400'>
                                    MADE IN PARIS
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                    <Section />
                    <footer className='w-full h-[80vh] bg-black text-white p-12 flex flex-col text-center'>
                        <div className='flex flex-col lg:text-center justify-center items-center gap-12 flex-1'>
                            {/* Logo & Tagline */}
                            <div>
                                <h2 className='text-3xl font-bold'>BLOOM</h2>
                                <p className='text-gray-400 mt-2'>Crafting stunning visual experiences from the heart of Paris.</p>
                            </div>

                            {/* Navigation Links */}
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-lg font-semibold'>Explore</h3>
                                <div className='flex gap-2'>
                                    <div className='text-gray-400 hover:text-white transition cursor-pointer'>Home</div>
                                    <div className='text-gray-400 hover:text-white transition cursor-pointer'>About</div>
                                    <div className='text-gray-400 hover:text-white transition cursor-pointer'>Projects</div>
                                    <div className='text-gray-400 hover:text-white transition cursor-pointer'>Contact</div>
                                </div>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className='text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4'>
                            © {new Date().getFullYear()} BLOOM. All rights reserved.
                        </div>
                    </footer>
                </>
            )}
        </div>
    );
}

function Section() {
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
                    <video className='w-full h-full object-cover pointer-events-none' autoPlay muted loop>
                        <source src='/movie1.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </motion.div>
    );
}
