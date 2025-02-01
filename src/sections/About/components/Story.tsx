import Reveal from '@/animation/Reveal';
import Highlight from '@/shared/ui/Highlight';

const Story = () => {
  return (
    <div className='mx-auto max-w-[1000px] px-4 pt-20'>
      <Reveal>
        <h2 className='text-5xl font-semibold text-main'>Обо мне.</h2>
      </Reveal>
      <Reveal>
        <hr className='mb-8 mt-16 h-1 scale-x-50 bg-secondary' />
        <p className='text-2xl'>
          Привет! Меня зовут Бланк Евгений. Я программист из Калининграда, специализирующийся на{' '}
          <Highlight>frontend-разработке</Highlight>. Я увлекаюсь технологиями, спортом, музыкой и
          многими другими вещами, которые дают мне возможность развиваться и получать от жизни все.
        </p>
      </Reveal>

      <Reveal>
        <p className='pt-8 text-2xl'>
          На данный момент я студент последнего курса в техническом университете на специальности
          <Highlight> &quot;Прикладная информатика&quot;</Highlight>. Параллельно с обучением в ВУЗе
          я изучаю веб-разработку. Начиная с базовых уроков по верстке на HTML и CSS, я добрался до
          экосистемы такой популярной библиотеки как <Highlight>React</Highlight>, в которую
          углубляюсь по сей день.
        </p>
      </Reveal>

      <Reveal>
        <p className='pt-8 text-2xl'>
          Сейчас моя <Highlight>гланая цель</Highlight> - это найти работу в уютной компании, где я
          смог бы набраться опыта и быстрее развиваться как программист.
        </p>
      </Reveal>

      <Reveal>
        <p className='pt-8 text-2xl'>
          Чтобы узнать меня получше - предлагаю ознакомиться с моими <Highlight>работами</Highlight>
          , среди которых как PET-проекты, так и сайт на заказ.
        </p>
        <hr className='mt-8 h-1 scale-x-50 bg-secondary' />
      </Reveal>
    </div>
  );
};

export default Story;
