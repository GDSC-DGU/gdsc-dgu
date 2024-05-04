import React from 'react';
import RightArrowIcon from 'public/svg/icons/common/right_arrow.svg';

/**
 * @description
 * Component for clickable link with RightArrowIcon
 * @returns {JSX.Element} CreatorLink
 * @since 2024.05.26
 */
const CreatorLinkButton = () => {
    return (
        <div className="flex items-center">
          <a href="https://github.com/GDSC-DGU/gdsc-dgu" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <p className="F2" style={{ marginBottom: '-3px', marginRight: '8px', display: 'flex', alignItems: 'center' }}>제작자 소개</p>
            <RightArrowIcon style={{ width: '10px', height: '10px' }}/>
          </a>
        </div>
      );
};

export default CreatorLinkButton;
