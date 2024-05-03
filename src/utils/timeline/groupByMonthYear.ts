import { TimelineCardProps } from '@/interfaces/timeline/timelineCard';
import { formatDate } from "./formDate";

/**
 * 그룹화 함수: TimelineCardProps 배열을 받아 '년 월'로 그룹화하고 내림차순으로 정렬된 객체를 반환.
 * @param {TimelineCardProps[]} data - 타임라인 카드 데이터 배열
 * @returns {Record<string, TimelineCardProps[]>} - '년 월'로 그룹화하고 내림차순으로 정렬된 객체
 */

const groupByMonthYear = (data: TimelineCardProps[]): Record<string, TimelineCardProps[]> => {
  const groups = data.reduce((acc, curr) => {
    const formattedDate = formatDate(curr.date);
    (acc[formattedDate] = acc[formattedDate] || []).push(curr);
    return acc;
  }, {} as Record<string, TimelineCardProps[]>);

  // 키(날짜)를 기준으로 역순 정렬을 수행
  const sortedKeys = Object.keys(groups).sort((a, b) => {
    // 'YYYY MMMM' 포맷을 Date 객체로 변환하여 비교
    const dateA = new Date(a + '-01'); // '2024 April' -> '2024-April-01'
    const dateB = new Date(b + '-01'); // '2025 March' -> '2025-March-01'
    return dateB.getTime() - dateA.getTime(); // 내림차순 정렬
  });

  // 정렬된 키를 기반으로 새 객체를 생성
  return sortedKeys.reduce((acc, key) => {
    acc[key] = groups[key];
    return acc;
  }, {} as Record<string, TimelineCardProps[]>);
};

export default groupByMonthYear;
