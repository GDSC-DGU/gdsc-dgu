import { RecruitScheduleDate } from '@/interfaces/recruit/recruitScheduleDate';

const RecruitScheduleBox = ({
  schedules,
}: {
  schedules: RecruitScheduleDate;
}) => {
  return (
    <div className="grow shrink basis-0 px-5 py-8 bg-gray-200 rounded flex-col justify-start items-center gap-1 inline-flex">
      <div className="text-black text-xl font-medium  leading-7 tracking-tight">
        {schedules.title}
      </div>
      <div className="mt-2 w-20 flex-col justify-center items-center flex grow">
        <div className="text-black leading-7">{schedules.startDate}</div>
        {schedules.endDate && (
          <div className="text-black leading-7">~{schedules.endDate}</div>
        )}
      </div>
    </div>
  );
};

export default RecruitScheduleBox;
