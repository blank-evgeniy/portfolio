import {
    BootstrapIcon,
    CssIcon,
    HtmlIcon,
    JSIcon,
    ReactIcon,
    ReduxIcon,
    SASSIcon,
    TailwindIcon,
    TSIcon,
} from '../img/Icons';
import Badge from '../ui/Badge';
import Reveal from '../ui/Reveal';

const Skills = () => {
    return (
        <section
            className="relative min-h-screen overflow-hidden bg-main"
            id="skills"
        >
            <div className="mx-auto max-w-[1360px] px-4 py-20">
                <Reveal>
                    <h2 className="text-5xl font-semibold text-white">
                        Мои навыки.
                    </h2>
                </Reveal>
                <div className="font-chakra mt-20 items-center justify-center gap-4 text-white sm:grid sm:grid-cols-3 md:mt-32 md:grid-cols-4 xl:grid-cols-5">
                    <Reveal>
                        <Badge className="hover:border-orange-600 hover:text-orange-600">
                            HTML5 <HtmlIcon size={48} />
                        </Badge>
                    </Reveal>
                    <Reveal>
                        <Badge className="hover:border-blue-400 hover:text-blue-400">
                            CSS <CssIcon size={48} />
                        </Badge>
                    </Reveal>
                    <Reveal>
                        <Badge className="hover:border-yellow-600 hover:text-yellow-600">
                            JavaScript <JSIcon size={48} />
                        </Badge>
                    </Reveal>
                    <Reveal>
                        <Badge className="hover:border-blue-600 hover:text-blue-500">
                            TypeScript <TSIcon size={48} />
                        </Badge>
                    </Reveal>
                    <Reveal>
                        <Badge className="hover:border-cyan-400 hover:text-cyan-400">
                            React <ReactIcon size={48} />
                        </Badge>
                    </Reveal>
                    <Reveal>
                        <Badge className="hover:border-purple-600 hover:text-purple-600">
                            Redux <ReduxIcon size={48} />
                        </Badge>
                    </Reveal>
                    <Reveal>
                        <Badge className="hover:border-rose-600 hover:text-rose-600">
                            SASS <SASSIcon size={48} />
                        </Badge>
                    </Reveal>
                    <Reveal>
                        <Badge className="hover:border-blue-300 hover:text-blue-300">
                            Tailwindcss <TailwindIcon size={48} />
                        </Badge>
                    </Reveal>
                    <Reveal>
                        <Badge className="hover:border-purple-500 hover:text-purple-500">
                            Bootstrap <BootstrapIcon size={48} />
                        </Badge>
                    </Reveal>
                </div>

                <div className="mt-12 px-12 font-mono text-white">
                    <Reveal>
                        <p className="text-3xl">А таккже:</p>
                    </Reveal>
                    <div className="flex flex-wrap gap-x-20 pt-4">
                        <Reveal>
                            <ul className="list-disc text-xl">
                                <li>Python</li>
                                <li>React Router</li>
                                <li>React Query</li>
                                <li>vite</li>
                            </ul>
                        </Reveal>
                        <Reveal>
                            <ul className="list-disc text-xl">
                                <li>REST API</li>
                                <li>Git</li>
                                <li>ES6</li>
                                <li>AJAX</li>
                            </ul>
                        </Reveal>
                        <Reveal>
                            <ul className="list-disc text-xl">
                                <li>адаптивная верстка</li>
                                <li>отзывчивая верстка</li>
                                <li>семантическая верстка</li>
                                <li>методология BEM</li>
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="font-chakra pointer-events-none absolute right-12 top-12 select-none text-nowrap text-8xl text-white opacity-10 sm:text-9xl">
                {'<skills />'}
            </div>
        </section>
    );
};

export default Skills;
