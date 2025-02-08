import React from 'react';

import Reveal from '@/animation/Reveal';
import { Project } from '@/shared/data/types';
import { ProjectLink } from './ProjectLink';

interface ProjectItemProps {
  projectData: Project;
  num: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ projectData }) => {
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
            <img
              className='pointer-events-none h-full w-full object-contain shadow-md brightness-75'
              src={projectData.img}
            />
          </Reveal>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
