import { Project } from '@/data/projects';
import Link from 'next/link';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../../../components/ui/tooltip';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-[30px] h-[50%]">
      <div className="text-8xl leading-none font-extrabold text-white">{project.num}</div>
      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
        {project.category}
      </h2>
      <p className="text-white/60">{project.description}</p>
      <ul className="flex gap-4">
        {project.stack.map((item, idx) => (
          <li key={idx} className="text-xl text-accent">
            {item.name}
            {idx !== project.stack.length - 1 && ','}
          </li>
        ))}
      </ul>
      <div className="border border-white/20"></div>
      <div className="flex items-center gap-4">
        <Link href={project.live}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Live Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        <Link href={project.github}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                <BsGithub className="text-white text-3xl group-hover:text-accent" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Github Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;