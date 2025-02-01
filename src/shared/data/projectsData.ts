import { Project } from './types';

export const projectsData: Project[] = [
  {
    title: 'Wish Listify',
    description:
      'Веб-приложение, в котором ты можешь составить свой список желаний, добавить друзей и делиться друг с другом идеями для подарков.',
    devTools: [
      'TypeScript',
      'React',
      'Vite',
      'Tanstack Query',
      'React Hook Form',
      'React Router',
      'Firebase',
    ],
    img: './projects/wish-listify.jpg',
    deployLink: 'https://wish-listify.vercel.app',
    githubLink: 'https://github.com/blank-evgeniy/wish-listify',
    background: '#5c3b3e',
  },
  {
    title: 'Tasty Creations',
    description:
      'Сайт с различными рецептами, которые пользователь может добавить в свою книжку. Простой дищайн и красивые анимации при помощи Framer Motion',
    devTools: [
      'TypeScript',
      'Next.js',
      'React (Tanstack) Query',
      'React Hook Form',
      'Express.js',
      'MongoDB',
    ],
    img: './projects/tasty-creations.jpg',
    deployLink: 'https://tasty-creations-coral.vercel.app/',
    githubLink: 'https://github.com/blank-evgeniy/tasty-creations',
    background: '#3d405b',
  },
  {
    title: 'Serebro39',
    description:
      'Сайт-каталог для небольшого магазина гель-лака. Здесь вы можете ознакомиться с перечнем товаров, добавить их в корзину и связаться с продавцом для проведения заказа.',
    devTools: ['TypeScript', 'React', 'React Router', 'Redux Toolkit', 'Bootstrap', 'Firebase'],
    img: './projects/nail-polish-store.jpg',
    deployLink: 'https://nail-polish-store.vercel.app/',
    githubLink: 'https://github.com/blank-evgeniy/nail-polish-store',
    background: '#0f041e',
  },
];
