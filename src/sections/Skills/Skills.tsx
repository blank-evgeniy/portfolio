import Reveal from '@/animation/Reveal';
import SkillBadge from './components/SkillBadge';
import {
  CSSIcon,
  ESLintIcon,
  ExpressIcon,
  FirebaseIcon,
  GitIcon,
  HTMLIcon,
  JestIcon,
  JSIcon,
  MaterialUIIcon,
  MongoIcon,
  NestIcon,
  NextIcon,
  PostgresIcon,
  PrettierIcon,
  PrismaIcon,
  ReactIcon,
  ReduxIcon,
  StoryBookIcon,
  TailwindIcon,
  TSIcon,
  ViteIcon,
  WebpackIcon,
} from '@/assets/icons';

export const Skills = () => (
  <section className='relative overflow-hidden bg-main' id='skills'>
    <div className='mx-auto max-w-[1360px] px-4 py-20'>
      <Reveal>
        <h2 className='text-5xl font-semibold text-white'>Мои навыки.</h2>
      </Reveal>
      <Reveal>
        <h3 className='mt-8 text-3xl font-semibold text-slate-200'>Основное</h3>
        <div className='mt-4 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-x-4 gap-y-6'>
          <SkillBadge title='JavaScript' renderIcon={(w, h) => <JSIcon width={w} height={h} />} />
          <SkillBadge title='TypeScript' renderIcon={(w, h) => <TSIcon width={w} height={h} />} />
          <SkillBadge title='HTML' renderIcon={(w, h) => <HTMLIcon width={w} height={h} />} />
          <SkillBadge title='CSS' renderIcon={(w, h) => <CSSIcon width={w} height={h} />} />
          <SkillBadge title='Git' renderIcon={(w, h) => <GitIcon width={w} height={h} />} />
        </div>
      </Reveal>
      <Reveal>
        <h3 className='mt-8 text-3xl font-semibold text-slate-200'>Frontend</h3>
        <div className='mt-4 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-x-4 gap-y-6'>
          <SkillBadge title='React' renderIcon={(w, h) => <ReactIcon width={w} height={h} />} />
          <SkillBadge title='Next.js' renderIcon={(w, h) => <NextIcon width={w} height={h} />} />
          <SkillBadge title='Redux' renderIcon={(w, h) => <ReduxIcon width={w} height={h} />} />
          <SkillBadge title='Vite' renderIcon={(w, h) => <ViteIcon width={w} height={h} />} />
          <SkillBadge title='Webpack' renderIcon={(w, h) => <WebpackIcon width={w} height={h} />} />
          <SkillBadge
            title='MaterialUI'
            renderIcon={(w, h) => <MaterialUIIcon width={w} height={h} />}
          />
          <SkillBadge
            title='Tailwind'
            renderIcon={(w, h) => <TailwindIcon width={w} height={h} />}
          />
        </div>
      </Reveal>
      <Reveal>
        <h3 className='mt-8 text-3xl font-semibold text-slate-200'>Backend</h3>
        <div className='mt-4 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-x-4 gap-y-6'>
          <SkillBadge
            title='Express.js'
            renderIcon={(w, h) => <ExpressIcon width={w} height={h} />}
          />
          <SkillBadge title='Nest.js' renderIcon={(w, h) => <NestIcon width={w} height={h} />} />
          <SkillBadge
            title='Firebase'
            renderIcon={(w, h) => <FirebaseIcon width={w} height={h} />}
          />
          <SkillBadge title='MongoDB' renderIcon={(w, h) => <MongoIcon width={w} height={h} />} />
          <SkillBadge
            title='Postgres'
            renderIcon={(w, h) => <PostgresIcon width={w} height={h} />}
          />
          <SkillBadge title='Prisma' renderIcon={(w, h) => <PrismaIcon width={w} height={h} />} />
        </div>
      </Reveal>
      <Reveal>
        <h3 className='mt-8 text-3xl font-semibold text-slate-200'>
          Тестирование и анализ качества кода
        </h3>
        <div className='mt-4 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-x-4 gap-y-6'>
          <SkillBadge title='Jest' renderIcon={(w, h) => <JestIcon width={w} height={h} />} />
          <SkillBadge
            title='StoryBook'
            renderIcon={(w, h) => <StoryBookIcon width={w} height={h} />}
          />
          <SkillBadge title='ESLint' renderIcon={(w, h) => <ESLintIcon width={w} height={h} />} />
          <SkillBadge
            title='Prettier'
            renderIcon={(w, h) => <PrettierIcon width={w} height={h} />}
          />
        </div>
      </Reveal>
    </div>

    <div className='pointer-events-none absolute right-12 top-12 select-none text-nowrap font-chakra text-8xl text-white opacity-10 sm:text-9xl'>
      {'<skills />'}
    </div>
  </section>
);
