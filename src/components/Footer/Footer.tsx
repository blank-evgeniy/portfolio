import Link from '../ui/Link';
import { EmailIcon, GithubIcon, TelegramIcon } from '../img/Icons';
import Reveal from '../ui/Reveal';

const Footer = () => {
    return (
        <footer className="bg-secondary" id="contacts">
            <div className="mx-auto max-w-[1200px] py-8">
                <Reveal>
                    <div className="flex justify-center gap-4 pb-8 pt-12 text-xl uppercase">
                        <Link variant={'accent'} href="#about">
                            обо мне
                        </Link>
                        <Link variant={'accent'} href="#projects">
                            проекты
                        </Link>
                        <Link variant={'accent'} href="#skills">
                            навыки
                        </Link>
                    </div>
                </Reveal>
                <hr className="text-white" />
                <div className="flex flex-wrap justify-center gap-4 pt-16 text-xl">
                    <Reveal>
                        <Link
                            variant={'buttonAccent'}
                            href="mailto:blank.eugeny@yandex.ru"
                        >
                            <div className="flex gap-4">
                                blank.eugeny@yandex.ru <EmailIcon />
                            </div>
                        </Link>
                    </Reveal>
                    <Reveal>
                        <Link
                            variant={'buttonAccent'}
                            href="https://t.me/blankeee"
                            target="_blank"
                        >
                            <div className="flex gap-4">
                                Telegram <TelegramIcon />
                            </div>
                        </Link>
                    </Reveal>
                    <Reveal>
                        <Link
                            variant={'buttonAccent'}
                            href="https://github.com/blank-evgeniy"
                            target="_blank"
                        >
                            <div className="flex gap-4">
                                GitHub <GithubIcon />
                            </div>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
