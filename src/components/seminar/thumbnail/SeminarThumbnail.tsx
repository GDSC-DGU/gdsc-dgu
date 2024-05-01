import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';
import Image from 'next/image';

/**
 * @description
 * 세미나 페이지 세미나 썸네일 디테일
 * @component SeminarThumbnail
 * @returns {JSX.Element} SeminarThumbnail
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const SeminarThumbnail = ({ data }: { data: SeminarThumnail }) => {
  return (
    <div className="w-full aspect-w-16 aspect-h-9">
    <Image
      src={data.image_url}
      alt={`${data.presenter}'s_seminarimage`}
      width={1600}
      height={900}
      quality={100}
      priority
    />
  </div>
  );
};
export default SeminarThumbnail;
