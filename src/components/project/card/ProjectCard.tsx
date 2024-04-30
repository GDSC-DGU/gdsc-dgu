import ProjectImg from '@/images/project_img.png';
import { ProjectData } from '@/interfaces/project/projectData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectCardVariants } from '@/constants/project/projectCardVariants';

/**
 * @description
 * 프로젝트 페이지 프로젝트 카드 컴포넌트
 * @component ProjectCard
 * @returns {JSX.Element} ProjectCard
 * @since 2024.04.16
 */
/**
 * Renders the card component for the project section.
 * @returns The rendered card component.
 */

const ProjectCard = ({ project }: { project: ProjectData }) => {
  return (
    <motion.section
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.8 }}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.9 }}
      variants={projectCardVariants}
      style={{ transformOrigin: '10% 60%' }}
    >
      <Link href={`/project/${project.id}`}>
        <div
          className="w-full h-[12.375rem] rounded-md flex-col justify-center items-center cursor-pointer"
          style={{
            backgroundImage: `url(${ProjectImg.src})`,
            backgroundSize: 'cover', // Sets the background image to cover the div
            backgroundPosition: 'center', // Aligns the background image to the center
          }}
        ></div>
        <div className="w-full p-4 pt-3 rounded-b-md bg-mono_900">
          <div className="pb-1 H6">{project.title}</div>
          <div className="B2 h-[3.2rem] text-overflow-custom">
            {project.introduce}
          </div>
          <div className="pt-5 Cap text-mono_400">{project.feature}</div>
        </div>
      </Link>
    </motion.section>
  );
};

export default ProjectCard;
