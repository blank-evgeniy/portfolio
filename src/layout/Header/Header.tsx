import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Link from '@/ui/Link';
import { CloseIcon, MenuIcon } from '@/assets/icons';

const MobileMenuStyles = {
  open: 'absolute left-0 top-0 z-30 flex h-[200vh] overflow-hidden w-screen flex-col gap-4 bg-secondary p-8 transition-transform duration-500 ease-out sm:hidden translate-x-0',
  close:
    'absolute left-0 top-0 z-30 flex h-[200vh] overflow-hidden w-screen flex-col gap-4 bg-secondary p-8 transition-transform duration-500 ease-out sm:hidden translate-x-full',
};

const headerAnimations = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      ease: 'easeIn',
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'scroll';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, [isOpen]);

  return (
    <header className='fixed z-30 w-screen bg-main font-main text-2xl text-white shadow-sm shadow-main'>
      <nav className='mx-auto max-w-[1360px] px-4'>
        <motion.div
          variants={headerAnimations}
          initial='hidden'
          animate='visible'
          className='hidden justify-end gap-12 py-6 pr-12 align-middle sm:flex'
        >
          <Link className='mr-auto font-chakra' href='#'>
            blanke
          </Link>
          <Link href='#about'>Обо мне</Link>
          <Link href='#projects'>Проекты</Link>
          <Link href='#skills'>Навыки</Link>
          <Link href='#contacts'>Контакты</Link>
        </motion.div>
        <div className={isOpen ? MobileMenuStyles.open : MobileMenuStyles.close}>
          <Link href='#about' onClick={handleOpen}>
            Обо мне
          </Link>
          <Link href='#projects' onClick={handleOpen}>
            Проекты
          </Link>
          <Link href='#skills' onClick={handleOpen}>
            Навыки
          </Link>
          <Link href='#contacts' onClick={handleOpen}>
            Контакты
          </Link>
          <button className='fixed right-8 top-8 z-30 block sm:hidden' onClick={handleOpen}>
            <CloseIcon width={24} height={24} />
          </button>
        </div>
        <button
          className='fixed right-8 top-8 z-20 block rounded-md bg-accent p-1 text-black shadow-lg sm:hidden'
          onClick={handleOpen}
        >
          <MenuIcon width={24} height={24} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
