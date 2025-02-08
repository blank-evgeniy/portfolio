import { GithubIcon } from '@/assets/icons';
import Link from '@/shared/ui/Link';

interface ProjectLinkProps {
  deploy: string;
  github: string;
}

export const ProjectLink = ({ deploy, github }: ProjectLinkProps) => (
  <div className='flex'>
    <Link className='rounded-none' variant='buttonAccent' href={deploy} target='_blank'>
      Смотреть проект
    </Link>
    <Link
      className='m-0 flex items-center justify-center rounded-none border-l-0 p-0 px-4'
      variant={'button'}
      href={github}
      target='_blank'
    >
      <GithubIcon className='h-6 w-6' />
    </Link>
  </div>
);
