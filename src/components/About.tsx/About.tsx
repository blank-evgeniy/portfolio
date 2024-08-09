import Emoji from './Emoji';
import Story from './Story';

const About = () => {
    return (
        <section
            className="relative min-h-screen overflow-hidden bg-slate-200"
            id="about"
        >
            <Story />

            <div className="font-chakra pointer-events-none absolute left-12 top-12 select-none text-nowrap text-8xl opacity-10 sm:text-9xl">
                {'<about />'}
            </div>

            <div className="mx-auto max-w-[1260px]">
                <Emoji />
            </div>
        </section>
    );
};

export default About;
