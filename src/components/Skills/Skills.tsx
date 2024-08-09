import Reveal from '../ui/Reveal';

const Skills = () => {
    return (
        <section
            className="relative min-h-screen overflow-hidden bg-slate-200"
            id="skills"
        >
            <div className="mx-auto max-w-[1000px] px-4 pt-20">
                <Reveal>
                    <h2 className="text-center text-5xl font-semibold text-main">
                        Мои навыки.
                    </h2>
                </Reveal>
            </div>

            <div className="font-chakra pointer-events-none absolute left-12 top-12 select-none text-nowrap text-8xl opacity-10 sm:text-9xl">
                {'<skills />'}
            </div>
        </section>
    );
};

export default Skills;
