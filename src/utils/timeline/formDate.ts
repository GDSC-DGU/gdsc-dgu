// utils/formatDate.ts
/**
 * 날짜 포맷 함수: ISO 문자열을 'YYYY MMMM' 포맷으로 변환.
 * @param {string} dateString - ISO 날짜 문자열 ('2023-09-24')
 * @returns {string} - 변환된 날짜 문자열 ('2023 September')
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });
  return `${year} ${month}`;
};
