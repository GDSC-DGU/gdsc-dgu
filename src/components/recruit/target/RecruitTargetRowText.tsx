import { FC } from 'react';

interface Props {
  title: string;
  content: string;
}
/**
 * @description
 * 모집 페이지 타겟 텍스트 컴포넌트
 * @component RecruitTargetRowText
 * @param {string} title - 타겟 텍스트 제목
 * @param {string} content - 타겟 텍스트 내용
 * @returns {JSX.Element} RecruitTargetRowText
 * @since 2024.04.12
 * @example
 * return (
 *  <RecruitTargetRowText title="제목" content="내용" />
 * )
 */
const RecruitTargetRowText: FC<Props> = ({ title, content }) => {
  return (
    <div className="inline-flex">
      <p className="tracking-tight pr-3">{title}</p>
      <p className="">{content}</p>
    </div>
  );
};
export default RecruitTargetRowText;
