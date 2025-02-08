import Link from '@/ui/Link';
import Reveal from '@/animation/Reveal';
import { EmailIcon, GithubIcon, TelegramIcon } from '@/assets/icons';
import NoiseEffect from '@/shared/ui/NoiseEffect';

const Footer = () => {
  return (
    <Reveal>
      <footer className='relative overflow-hidden bg-secondary px-2' id='contacts'>
        <NoiseEffect />
        <div className='mx-auto max-w-[1200px] py-8'>
          <div className='flex justify-center gap-4 pb-8 pt-12 text-2xl uppercase'>
            <Link variant={'accent'} href='#about'>
              обо мне
            </Link>
            <Link variant={'accent'} href='#projects'>
              проекты
            </Link>
            <Link variant={'accent'} href='#skills'>
              навыки
            </Link>
          </div>

          <hr className='text-white' />

          <div className='flex flex-wrap justify-center gap-4 pt-16 text-xl'>
            <Link variant={'buttonAccent'} href='mailto:blank.eugeny@yandex.ru'>
              blank.eugeny@yandex.ru <EmailIcon width={24} height={24} />
            </Link>
            <Link variant={'buttonAccent'} href='https://t.me/blankeee' target='_blank'>
              Telegram <TelegramIcon width={24} height={24} />
            </Link>
            <Link variant={'buttonAccent'} href='https://github.com/blank-evgeniy' target='_blank'>
              GitHub <GithubIcon width={24} height={24} />
            </Link>
          </div>
        </div>
      </footer>
    </Reveal>
  );
};

export default Footer;
