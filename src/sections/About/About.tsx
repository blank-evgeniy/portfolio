import Emoji from './components/Emoji';
import Story from './components/Story';

export const About = () => (
  <section className='relative overflow-hidden bg-slate-200' id='about'>
    <Story />

    <div className='pointer-events-none absolute left-12 top-12 select-none text-nowrap font-chakra text-8xl opacity-10 sm:text-9xl'>
      {'<about />'}
    </div>

    <div className='mx-auto max-w-[1260px]'>
      <Emoji />
    </div>
  </section>
);
