import { DownArrowIcon } from '@/assets/icons';
import Reveal from '@/animation/Reveal';
import Highlight from '@/shared/ui/Highlight';

const Story = () => {
  return (
    <div className='max-w-[800px]'>
      <Reveal>
        <h2 className='pb-5 text-5xl font-semibold text-main'>Обо мне.</h2>
      </Reveal>
      <Reveal>
        <p className='text-2xl'>
          Привет! Меня зовут Бланк Евгений. Я программист из Калининграда, специализирующийся на{' '}
          <Highlight>web-разработке.</Highlight>
        </p>
      </Reveal>

      <Reveal>
        <p className='pt-8 text-2xl'>
          В настоящее время я учусь на последнем курсе в техническом университете на специальности{' '}
          <Highlight>Прикладная информатика.</Highlight> Параллельно с этим я также развиваюсь как{' '}
          <Highlight>frontend</Highlight> и немного <Highlight>backend</Highlight> разработчик.
        </p>
      </Reveal>

      <Reveal>
        <p className='pt-8 text-2xl'>
          У меня имеется несколько интересных <Highlight>проектов</Highlight> с реализацией как
          frontend, так и backend частей web-приложений. Предлагаю вам ознакомиться с ними.
        </p>

        <a
          href='#projects'
          className='mx-auto mt-12 block h-8 w-8 text-secondary transition-colors hover:text-accent'
        >
          <DownArrowIcon className='animate-bounce' height={32} width={32} />
        </a>
      </Reveal>
    </div>
  );
};

export default Story;
