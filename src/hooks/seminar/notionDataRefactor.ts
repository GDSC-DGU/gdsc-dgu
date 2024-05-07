import { SeminarMember } from "@/interfaces/seminar/seminarMember";
import { SeminarReview } from "@/interfaces/seminar/seminarReview";
import { SeminarThumbnail } from "@/interfaces/seminar/seminarThumbnail";
import SeminarThumbnailCardImg from '@/svg/seminar/seminar_thumbnail_card.png';
import PresenterProfileImg from '@/svg/seminar/presenter_profile_img.png';

// seminar data
export function refactorSeminarData(items: any[]): SeminarThumbnail[] {
    return items.map(item => ({
      id: item.id,
      flag: 1,
      type: item.properties.Tags?.multi_select[0]?.name ?? 'Unknown',
      topic: item.properties.Topic?.select?.name ?? 'all', // static value as per example
      date: item.properties.Date?.date?.start ?? 'Unknown Date',
      location: item.properties.Location?.rich_text[0]?.plain_text ?? 'No Location', // static value as per example
      title: item.properties.Name?.title[0]?.plain_text ?? 'Unknown Title',
      description: item.properties.Description?.rich_text[0]?.plain_text ?? 'No Description', // static value as per example
      seminar_image_url: item.cover?.file?.url ?? SeminarThumbnailCardImg.src,
      pdf_url: item.properties['Files & media']?.files[0]?.file?.url ?? PresenterProfileImg.src, // 임시 pdf 데이터
    }));
  }

  // seminar review data
  export function refactorSeminarReviewData(items: any[]): SeminarReview[] {
    return items.map(item => ({
      id: item.id ?? '',
      seminar_id: item.properties.Seminar.relation[0]?.id ?? '',
      author: item.properties.name?.title[0]?.plain_text ?? 'Unknown',
      content: item.properties.Review.rich_text[0]?.plain_text ?? 'No Review'
    }));
  }

    // seminar review data
    export function refactorSeminarMemberData(item: any): SeminarMember {
        return {
            id: item.id ?? 'Unknown',
            seminar_id: item.properties.Seminars?.relation[0]?.id ?? 'Unknown',
            name: item.properties['이름']?.title[0]?.plain_text ?? 'Unknown',
            role: item.properties.Part?.multi_select[0]?.name ?? 'Unknown',
            profile_img: item.properties.ProfileImage?.url ?? PresenterProfileImg.src,
        };
      }
    