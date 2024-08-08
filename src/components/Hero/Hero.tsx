import { GithubIcon, TelegramIcon } from '../img/Icons';
import Button from '../ui/Button';
import Header from '../Header/Header';
import Link from '../ui/Link';

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-main">
            <Header />
            <section className="text-white">
                <div className="absolute left-1/2 top-1/2 w-[90vh] -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="text-3xl md:text-5xl">Бланк Евгений</h2>
                    <h1 className="mb-8 mt-4 text-2xl text-accent">
                        frontend react developer
                    </h1>
                    <Button>Обо мне</Button>
                </div>
                <div className="absolute bottom-8 left-[50%] flex translate-x-[-50%] gap-4">
                    <Link href="" color="accent">
                        <GithubIcon />
                    </Link>
                    <Link href="" color="accent">
                        <TelegramIcon />
                    </Link>
                </div>

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
