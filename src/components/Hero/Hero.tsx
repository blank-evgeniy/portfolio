import { GithubIcon, TelegramIcon } from '../img/Icons';
import { MotionButton } from '../ui/Button';
import Header from '../Header/Header';
import Link from '../ui/Link';
import { motion } from 'framer-motion';

const heroAnimation = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * 0.2 },
    }),
};

const linksAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1 },
    },
};

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-main">
            <Header />
            <section className="text-white">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="absolute left-1/2 top-1/2 w-[90vh] -translate-x-1/2 -translate-y-1/2 text-center"
                >
                    <motion.h2
                        variants={heroAnimation}
                        custom={1}
                        className="text-3xl md:text-5xl"
                    >
                        Бланк Евгений
                    </motion.h2>
                    <motion.h1
                        variants={heroAnimation}
                        custom={2}
                        className="mb-8 mt-4 text-2xl text-accent"
                    >
                        frontend react developer
                    </motion.h1>
                    <MotionButton variants={heroAnimation} custom={3}>
                        Обо мне
                    </MotionButton>
                </motion.div>
                <motion.div
                    variants={linksAnimation}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-8 left-[50%] flex translate-x-[-50%] gap-4"
                >
                    <Link href="" variant="accent">
                        <GithubIcon />
                    </Link>
                    <Link href="" variant="accent">
                        <TelegramIcon />
                    </Link>
                </motion.div>

                <div className="pointer-events-none absolute left-12 top-12 select-none text-nowrap text-9xl opacity-10">
                    {'<web />'}
                </div>
                <div className="pointer-events-none absolute bottom-12 right-12 select-none text-nowrap text-9xl opacity-10">
                    {'<dev />'}
                </div>
            </section>
        </div>
    );
};

export default Hero;
