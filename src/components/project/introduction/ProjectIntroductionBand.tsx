import { ProjectData } from '@/interfaces/project/projectData';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * @description
 * 프로젝트 상세 페이지 띠지 컴포넌트
 * @component ProjectIntroductionBand
 * @returns {JSX.Element} ProjectIntroductionBand
 * @since 2024.04.30
 */
/**
 * Renders the prject introduction Band component for the project detail section.
 * @returns The rendered project introduction Band component.
 */

const ProjectIntroductionBand = ({
  projectData,
}: {
  projectData: ProjectData;
}) => {
  const motionRef = useRef(null);
  const isInView = useInView(motionRef, { once: true });

  return (
    <section
      ref={motionRef}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className="w-full flex flex-col items-center my-16 bg-mono_900"
    >
      <div className="w-full max-w-[1200px] tablet:px-10 px-4 flex desktop:flex-row flex-col justify-between items-center py-10">
        <div className="H5">서비스가 어디서 시작됐는지, 서비스의 띠지</div>
        <div className="H5">{projectData?.performance}</div>
      </div>
    </section>
  );
};

export default ProjectIntroductionBand;
