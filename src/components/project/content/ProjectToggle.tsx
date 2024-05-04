'use client';

import { ProjectMemberData } from '@/interfaces/project/projectMemberData';
import ToggleIcon from '@/svg/icons/project/toggleIcon.svg';
import ProjectMember from './ProjectMember';
import { useState } from 'react';
import { toggle } from '@/utils/project/toggle';

/**
 * @description
 * 프로젝트 상세 페이지 팀 정보 토글 컴포넌트
 * @component ProjectToggle
 * @returns {JSX.Element} ProjectToggle
 * @since 2024.04.16
 */
/**
 * Renders the project toggle component for the project section.
 * @returns The rendered project toggle component.
 */

const ProjectToggle = ({ teamData }: { teamData: ProjectMemberData[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = toggle(isOpen);

  return (
    <section ref={scope}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-row justify-between items-center mb-8 px-2 pb-3 border-b border-solid border-mono_700"
      >
        <div className="H4">Team</div>
        <button className="toggle-arrow">
          <ToggleIcon />
        </button>
      </div>
      <div className="toggle-menu-box h-0 w-full grid min-[960px]:grid-cols-2 gap-8">
        {teamData.length > 0 &&
          teamData.map((member) => (
            <ProjectMember key={member?.id} member={member} />
          ))}
      </div>
    </section>
  );
};

export default ProjectToggle;
