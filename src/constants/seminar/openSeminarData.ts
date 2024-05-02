import SeoHuiChan from '@/images/seminar/presenter/seohuichan.png';
import { OpenSeminar } from '@/interfaces/seminar/openSeminar';

export const OPEN_SEMINAR_DATA: OpenSeminar[] = [
    {
        id: 1,
        flag: 1,
        type: 'Open Seminar',
        topic: 'DevTalk',
        opening_date: '2023/5',
        seminar_date: '2023.09.22 (FRI) 19:30',
        location: '동국대학교 원흥관 PBL',
        title: `
        휴, 하마터면 
        의사 될 뻔...
        `,
        description: `
        의사를 목표로 공부를 하다가,
        프로그래밍을 시작한 과정들을 토대로 개발 공부를 하며 깨달은 것들
        `,
        presenter: '서희찬',
        role: 'Lead',
        profile_image_url: SeoHuiChan.src,
        status: false
    },
]