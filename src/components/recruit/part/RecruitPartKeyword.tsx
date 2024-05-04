import React, { FC } from 'react';

interface RecruitPartKeywordProps {
  keyword: string;
}

/**
 * RecruitPartKeyword
 * @description
 * - Keyword component used in the RecruitPartRow component
 */
const RecruitPartKeyword: FC<RecruitPartKeywordProps> = ({ keyword }) => {
  return (
    <div className="px-3 py-2 bg-mono_700 rounded-lg border border-mono_700 justify-center items-center gap-2.5 flex">
      <div className="text-center Btn">{keyword}</div>
    </div>
  );
};

export default RecruitPartKeyword;
