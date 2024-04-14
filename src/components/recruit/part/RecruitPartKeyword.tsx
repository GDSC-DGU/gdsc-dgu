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
    <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
      <div className="text-center text-sm font-medium leading-none">
        {keyword}
      </div>
    </div>
  );
};

export default RecruitPartKeyword;
