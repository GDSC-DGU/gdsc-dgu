import { SeminarMember } from '@/interfaces/seminar/seminarMember';
import { SeminarThumbnail } from '@/interfaces/seminar/seminarThumbnail';
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
const SeminarThumbnailBox = ({ seminar }: { seminar: SeminarThumbnail }) => {
  return (
    <div className="w-full aspect-w-16 aspect-h-9">
          <div className='rounded-lg overflow-hidden'>
    <Image
      src={seminar.seminar_image_url}
      alt={`${seminar.title} image`}
      width={1600}
      height={900}
      quality={100}
      priority
      rel="preload"
    />
    </div>
  </div>
  );
};
export default SeminarThumbnailBox;
