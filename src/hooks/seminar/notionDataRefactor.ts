import { SeminarMember } from "@/interfaces/seminar/seminarMember";
import { SeminarReview } from "@/interfaces/seminar/seminarReview";
import { SeminarThumbnail } from "@/interfaces/seminar/seminarThumbnail";
import SeminarThumbnailCardImg from '@/images/seminar/default_seminar.png';
import OpenSeminarThumbnailCardImg from '@/images/seminar/default_open_seminar.png';
import PresenterProfileImg from '@/images/seminar/presenter/default_presenter.png';
import { OpenSeminar, OpenSeminarDetailSeminar, Relation } from "@/interfaces/seminar/openSeminar";

// seminar data
export function refactorSeminarData(items: any[]): SeminarThumbnail[] {
    return items.map(item => ({
      id: item.id ?? '',
      flag: 1,
      type: item.properties.Tags?.multi_select[0]?.name ?? '',
      topic: item.properties.Topic?.select?.name ?? '', 
      date: item.properties.Date?.date?.start ?? '',
      location: item.properties.Location?.rich_text[0]?.plain_text ?? '동국대학교', 
      title: item.properties.Name?.title[0]?.plain_text ?? '',
      description: item.properties.Description?.rich_text[0]?.plain_text ?? '',
      seminar_image_url: item.cover?.file?.url ?? SeminarThumbnailCardImg.src,
      pdf_url: item.properties['Files & media']?.files[0]?.file?.url ?? "", // 임시 pdf 데이터
    }));
  }

  // open seminar data
export function refactorOpenSeminarData(items: any[]): OpenSeminar[] {
  return items.map(item => ({
    id: item.id ?? '',
    flag: item.properties['다중 선택'].multi_select[1]?.name ?? '',
    type: item.properties['다중 선택'].multi_select[0]?.name ?? '',
    date: item.properties.Date?.date?.start ?? '',
    location: item.properties.Location?.rich_text[0]?.plain_text ?? '동국대학교', // static value as per example
    title: item.properties['이름']?.title[0]?.plain_text ?? '',
    description: item.properties.Description?.rich_text[0]?.plain_text ?? '',
    image_url: item.cover?.file?.url ?? OpenSeminarThumbnailCardImg.src,
    status: (item.properties.status?.status?.name === "종료" ? false : true) ?? false,
    seminars: item.properties.Seminars?.relation ?? [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}],
  }));
}

/*
export function refactorOpenSeminarInformationData(items: any[]): SeminarThumbnail[] {
  return items.map(item => ({
    id: item.id,
    open_seminar_id:
    information:
  }));
}
*/


  // seminar review data
  export function refactorSeminarReviewData(items: any[]): SeminarReview[] {
    return items.map(item => ({
      id: item.id ?? '',
      seminar_id: item.properties.Seminar.relation[0]?.id ?? '',
      author: item.properties.name?.title[0]?.plain_text ?? '',
      content: item.properties.Review.rich_text[0]?.plain_text ?? ''
    }));
  }

    // seminar member data
    export function refactorSeminarMemberData(item: any, id:string): SeminarMember {
        return {
            id: item.id ?? 'Unknown',
            seminar_id: id ?? 'Unknown',
            name: item.properties['이름']?.title[0]?.plain_text ?? '',
            role: item.properties.Part?.multi_select[0]?.name ?? '',
            profile_img: item.properties.ProfileImage?.url ?? PresenterProfileImg.src,
        };
      }

        // seminar review data
        export function refactorOpenSeminarDetailSeminarsData(seminar: any, member: any): OpenSeminarDetailSeminar {
            return {
              id: seminar.id,
              seminar_id: seminar.id,
              member_id: member.id ?? '',
              member_name: member.name ?? '',
              member_role: member.role ?? '',
              member_profile_image: member.profile_img ?? PresenterProfileImg.src,
              seminar_title: seminar.title,
            };
        }
      
    
      // open seminar ids로 seminar 데이터 반환
export function findSeminarsByIds(seminars: SeminarThumbnail[], ids: Relation[]): SeminarThumbnail[] {
        const idList = ids.map(relation => relation.id);
        return seminars.filter(seminar => idList.includes(seminar.id));
}