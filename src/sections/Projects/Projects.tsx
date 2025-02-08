import { projectsData } from '@/data/projectsData';
import ProjectItem from './components/ProjectItem';
import NoiseEffect from '@/shared/ui/NoiseEffect';

export const Projects = () => (
  <section className='relative overflow-hidden bg-slate-200' id='projects'>
    <div className='mx-auto max-w-[1360px] px-4 pb-8 pt-20'>
      <h2 className='text-5xl font-bold text-main'>Мои проекты.</h2>
      <hr className='mt-2 h-[6px] rounded-lg border-0 bg-main'></hr>
    </div>
    <div className='relative'>
      <NoiseEffect />
      {projectsData.map((data, index) => (
        <ProjectItem key={data.title} num={index} projectData={data} />
      ))}
    </div>
  </section>
);
