import { ProjectMemberData } from './projectMemberData';

export interface ProjectData {
  id: number;
  title: string;
  introduce: string;
  image: string;
  feature: string;
  performance: string;
  team: ProjectMemberData[];
  content: string;
  date: string; // 일단은 연도값만 넣기
  youtube?: string;
  github?: string;
}
