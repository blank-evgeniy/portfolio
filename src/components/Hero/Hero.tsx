import { GithubIcon, TelegramIcon } from '../img/Icons';
import Link, { MotionLink } from '../ui/Link';
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
                        className="font-chakra mb-8 mt-4 text-2xl text-accent"
                    >
                        frontend react developer
                    </motion.h1>
                    <MotionLink
                        variants={heroAnimation}
                        custom={3}
                        variant="button"
                        href="#about"
                    >
                        Обо мне
                    </MotionLink>
                </motion.div>
                <motion.div
                    variants={linksAnimation}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-8 left-[50%] flex translate-x-[-50%] gap-4"
                >
                    <Link
                        href="https://github.com/blank-evgeniy"
                        variant="accent"
                        target="_blank"
                    >
                        <GithubIcon size={48} />
                    </Link>
                    <Link
                        href="https://t.me/blankeee"
                        variant="accent"
                        target="_blank"
                    >
                        <TelegramIcon size={48} />
                    </Link>
                </motion.div>

                <div className="font-chakra pointer-events-none absolute left-12 top-16 select-none text-nowrap text-8xl opacity-10 sm:text-9xl">
                    {'<web />'}
                </div>
                <div className="font-chakra pointer-events-none absolute bottom-12 right-12 select-none text-nowrap text-8xl opacity-10 sm:text-9xl">
                    {'<dev />'}
                </div>
            </section>
        </div>
    );
};

export default Hero;
