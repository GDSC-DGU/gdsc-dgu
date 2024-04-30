import { RecruitScheduleDate } from '@/interfaces/recruit/recruitScheduleDate';

const RecruitScheduleBox = ({
  schedules,
}: {
  schedules: RecruitScheduleDate;
}) => {
  return (
    <div className="grow shrink basis-0 px-5 py-8 bg-gray-200 rounded flex-col justify-start items-center gap-1 inline-flex">
      <div className="text-mono_black H6">{schedules.title}</div>
      <div className="mt-2 w-20 flex-col justify-center items-center flex grow">
        <div className="text-mono_black B1">{schedules.startDate}</div>
        {schedules.endDate && (
          <div className="text-mono_black B1">~{schedules.endDate}</div>
        )}
      </div>
    </div>
  );
};

export default RecruitScheduleBox;
