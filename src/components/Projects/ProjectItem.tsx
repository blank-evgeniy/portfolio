import React, { useState } from 'react';
import Link from '../ui/Link';
import { LaptopIcon, MobileIcon } from '../img/Icons';
import Reveal from '../ui/Reveal';

export interface ProjectDataType {
    title: string;
    description: string;
    devTools: string[];
    laptopImg: string;
    mobileImg: string;
    link: string;
    background: string;
}

interface ProjectItemProps {
    projectData: ProjectDataType;
    num: number;
}

type orientationType = 'laptop' | 'mobile';

const Numbers = ['01', '02', '03', '04', '05', '06'];

const ProjectItem: React.FC<ProjectItemProps> = ({ projectData, num }) => {
    const [orientation, setOrientation] = useState<orientationType>('laptop');

    const handleChangeOrientation = (orientation: orientationType) => {
        setOrientation(orientation);
    };

    return (
        <div
            className="py-20 lg:py-40"
            style={{ background: projectData.background }}
        >
            <div className={'mx-auto flex max-w-[1360px] flex-wrap px-4'}>
                <div className="w-full text-white lg:w-1/3">
                    <Reveal>
                        <h3 className="font-chakra text-5xl font-semibold">
                            {projectData.title}
                        </h3>
                    </Reveal>
                    <Reveal>
                        <p className="my-6 text-lg">
                            {projectData.description}
                        </p>
                    </Reveal>
                    <Reveal>
                        <h4 className="text-2xl font-semibold">
                            Инструменты разработки
                        </h4>
                    </Reveal>

                    <Reveal>
                        <ul className="m-6 list-inside list-disc">
                            {projectData.devTools.map((item) => (
                                <li className="font-chakra text-lg" key={item}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <div className="mt-12 text-center">
                        <Reveal>
                            <Link
                                variant="buttonAccent"
                                href={projectData.link}
                                target="_blank"
                            >
                                Смотреть проект
                            </Link>
                        </Reveal>
                    </div>
                </div>
                <div
                    className={
                        'relative w-full p-1 pt-12 md:pl-12 lg:w-2/3 lg:p-8'
                    }
                >
                    <Reveal>
                        <div className="relative h-[50vh]">
                            <img
                                className={
                                    orientation === 'mobile'
                                        ? 'mx-auto max-h-[50vh] shadow-md shadow-black brightness-75'
                                        : 'absolute left-[50%] top-[50%] max-h-[50vh] -translate-x-1/2 -translate-y-1/2 shadow-md shadow-black brightness-75'
                                }
                                src={
                                    orientation === 'laptop'
                                        ? `./projects/${projectData.laptopImg}`
                                        : `./projects/${projectData.mobileImg}`
                                }
                            />
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="flex justify-center gap-4">
                            <button
                                disabled={orientation === 'laptop'}
                                onClick={() => {
                                    handleChangeOrientation('laptop');
                                }}
                                className="relative top-6 rounded-md bg-white p-1 shadow-md transition-colors duration-500 ease-out hover:bg-accent disabled:bg-gray-400"
                            >
                                <LaptopIcon />
                            </button>
                            <button
                                disabled={orientation === 'mobile'}
                                onClick={() => {
                                    handleChangeOrientation('mobile');
                                }}
                                className="relative top-6 rounded-md bg-white p-1 shadow-md transition-colors duration-500 ease-out hover:bg-accent disabled:bg-gray-400"
                            >
                                <MobileIcon />
                            </button>
                        </div>
                    </Reveal>
                    <div
                        className={
                            'font-chakra pointer-events-none absolute right-0 top-2 text-7xl text-white sm:text-9xl lg:-top-4'
                        }
                    >
                        {Numbers[num]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
