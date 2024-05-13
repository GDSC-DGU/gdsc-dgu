import { ProjectData } from '@/interfaces/project/projectData';
import ProjectImg from '@/images/project_img.png';
import { ProjectMemberData } from '@/interfaces/project/projectMemberData';

// 프로젝트 목록 데이터
export function refactorProjectListData(items: any[]): ProjectData[] {
  return items.map((item) => ({
    id: item.id ?? '',
    title: item?.properties?.Idea?.title[0]?.plain_text ?? '',
    introduce:
      item?.properties['소개 (150자 이내)']?.rich_text[0]?.plain_text ?? '',
    image: item?.cover?.file?.url ?? ProjectImg.src,
    feature: '',
    performance: '',
    team: [],
    content: '',
    date: '',
    // 유튜브, 깃허브 링크도 추가하기
  }));
}

// 프로젝트 디테일 데이터
export function refactorProjectData(item: any, memberList: any[]): ProjectData {
  return {
    id: item.id ?? '',
    title: item?.properties?.Idea?.title[0]?.plain_text ?? '',
    introduce:
      item?.properties['소개 (150자 이내)']?.rich_text[0]?.plain_text ?? '',
    image: item?.cover?.file?.url ?? ProjectImg.src,
    feature: '',
    performance: '',
    team: item?.properties?.Members?.relation.map((item: any) =>
      memberList.find((member) => member.id === item.id),
    ),
    content: '',
    date: '',
    youtube:
      item?.properties['유튜브 링크']?.rich_text[0]?.plain_text ?? undefined,
    github:
      item?.properties['깃허브 링크']?.rich_text[0]?.plain_text ?? undefined,
  };
}

// 멤버 목록 데이터
export function refactorMemberListData(items: any[]): ProjectMemberData[] {
  return items.map((item) => ({
    id: item.id ?? '',
    name: item?.properties['이름']?.title[0]?.plain_text ?? '',
    role: item.properties.Part?.multi_select[0]?.name ?? '',
    seminar: '',
    // 프로필 이미지도 추가하기
  }));
}
