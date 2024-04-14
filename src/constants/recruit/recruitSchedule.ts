import { RecruitScheduleDate } from '@/interfaces/recruit/recruitScheduleDate';

export const RECRUIT_SCHEDULE: Record<string, RecruitScheduleDate> = {
  document: {
    title: '서류 모집',
    startDate: '2023/08/28',
    endDate: '2023/09/08',
  },
  firstPresentation: {
    title: '1차 발표',
    startDate: '2023/09/10',
  },
  interview: {
    title: '인터뷰',
    startDate: '2023/09/11',
  },
  finalPresentation: {
    title: '최종 발표',
    startDate: '2023/09/14',
    endDate: '2023/09/15',
  },
  orientation: {
    title: '오리엔테이션',
    startDate: '2023/09/15',
  },
};
