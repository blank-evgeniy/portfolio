import Emoji from './components/Emoji';
import Story from './components/Story';

export const About = () => (
  <section
    className='relative flex min-h-[80vh] items-center overflow-hidden bg-slate-200'
    id='about'
  >
    <div className='mx-auto flex w-full max-w-[1360px] flex-col-reverse justify-between gap-x-20 px-4 pb-8 pt-20 lg:flex-row'>
      <Story />
      <Emoji />
    </div>

    <div className='pointer-events-none absolute left-12 top-12 select-none text-nowrap font-chakra text-8xl opacity-10 sm:text-9xl'>
      {'<about />'}
    </div>
  </section>
);
