'use client';

import { motion, useAnimate, animate, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import Footer from './components/Footer';
import MiddleContent from './components/MiddleContent';
import Video from './components/Video';

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
    const movieContainer = useRef(null);

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
                    <motion.div ref={movieContainer} className='w-full h-screen absolute left-0 top-0 overflow-hidden'>
                        <motion.div
                            className='h-full w-full'
                            style={{ y }}
                            animate={{ scale: 1, rotate: 0 }}
                            initial={{ scale: 0, rotate: -10 }}
                            transition={{ duration: 0.5 }}>
                            <Video />
                        </motion.div>
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
                    <MiddleContent />
                    <Footer />
                </>
            )}
        </div>
    );
}
