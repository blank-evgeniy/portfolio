import React from 'react';

import Reveal from '@/animation/Reveal';
import { Project } from '@/shared/data/types';
import { ProjectLink } from './ProjectLink';

interface ProjectItemProps {
  projectData: Project;
  num: number;
}

const Numbers = ['01', '02', '03', '04', '05', '06'];

const ProjectItem: React.FC<ProjectItemProps> = ({ projectData, num }) => {
  return (
    <article className='py-20 lg:py-40' style={{ background: projectData.background }}>
      <div className={'mx-auto flex max-w-[1360px] flex-wrap px-4'}>
        <div className='w-full text-white lg:w-1/3'>
          <Reveal>
            <h3 className='font-chakra text-5xl font-semibold'>{projectData.title}</h3>
          </Reveal>
          <Reveal>
            <p className='my-6 text-lg font-medium text-gray-50'>{projectData.description}</p>
          </Reveal>
          <Reveal>
            <h4 className='text-2xl font-semibold'>Инструменты разработки</h4>
          </Reveal>

          <Reveal>
            <ul className='m-6 list-inside list-disc'>
              {projectData.devTools.map((item) => (
                <li className='font-chakra text-lg' key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className='mt-12 text-center'>
            <Reveal>
              <ProjectLink deploy={projectData.deployLink} github={projectData.githubLink} />
            </Reveal>
          </div>
        </div>
        <div className={'relative w-full p-1 pt-12 md:pl-12 lg:w-2/3 lg:p-8'}>
          <Reveal>
            <div className='relative flex h-[50vh] items-center justify-center'>
              <div className='relative max-h-[50vh] bg-slate-400'>
                <img
                  className='pointer-events-none h-full shadow-md brightness-75'
                  src={projectData.img}
                />
                <span
                  className={
                    'absolute -right-4 -top-8 font-chakra text-7xl text-white sm:-right-8 sm:-top-12 sm:text-9xl'
                  }
                >
                  {Numbers[num]}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
