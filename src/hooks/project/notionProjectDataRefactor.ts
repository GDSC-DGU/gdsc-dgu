import { ProjectData } from '@/interfaces/project/projectData';
import ProjectImg from '@/images/project_img.png';

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
  }));
}
