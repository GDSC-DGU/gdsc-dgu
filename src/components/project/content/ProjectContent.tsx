import { ProjectData } from '@/interfaces/project/projectData';
import ProjectToggle from './ProjectToggle';
import { projectCardVariants } from '@/constants/project/projectCardVariants';
import { motion } from 'framer-motion';

/**
 * @description
 * 프로젝트 상세 페이지 프로젝트 내용 컴포넌트
 * @component ProjectContent
 * @returns {JSX.Element} ProjectContent
 * @since 2024.04.16
 */
/**
 * Renders the prject content component for the project section.
 * @returns The rendered project content component.
 */

const ProjectContent = ({ projectData }: { projectData: ProjectData }) => {
  return (
    <section className="w-full max-w-[1200px] tablet:px-10 px-4">
      <section className="w-full pb-[7.5rem] mx-auto">
        <ProjectToggle teamData={projectData?.team || []} />
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.9 }}
          variants={projectCardVariants}
          style={{ transformOrigin: '10% 60%' }}
          className="w-full mt-[5rem]"
        >
          <div className="H6">노션 내용 크롤링</div>
          <div className="B1">{projectData?.content}</div>
        </motion.section>
      </section>
    </section>
  );
};

export default ProjectContent;
