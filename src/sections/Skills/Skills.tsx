import Reveal from '@/animation/Reveal';

export const Skills = () => (
  <section className='relative overflow-hidden bg-main' id='skills'>
    <div className='mx-auto max-w-[1360px] px-4 py-20'>
      <Reveal>
        <h2 className='text-5xl font-semibold text-white'>Мои навыки.</h2>
      </Reveal>
    </div>

    <div className='pointer-events-none absolute right-12 top-12 select-none text-nowrap font-chakra text-8xl text-white opacity-10 sm:text-9xl'>
      {'<skills />'}
    </div>
  </section>
);
