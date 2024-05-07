import SeminarThumbnailCardImg from '@/svg/seminar/seminar_thumbnail_card.png';
import { SeminarThumbnail } from '@/interfaces/seminar/seminarThumbnail';

export const SEMINAR_NONE_DATA: SeminarThumbnail[] = [
    {
        id: '1',
        flag: 1,
        type: 'Camping Seminar',
        topic: 'DevTalk',
        date: '',
        location: '동국대학교 원흥관 PBL',
        title: `
        휴, 하마터면 
        의사 될 뻔...
        `,
        description: `
        의사를 목표로 공부를 하다가,
        프로그래밍을 시작한 과정들을 토대로 개발 공부를 하며 깨달은 것들
        `,
        seminar_image_url: '',
        pdf_url: SeminarThumbnailCardImg.src,
    },
]

export const SEMINAR_DATA: SeminarThumbnail[] = [
    {
        id: '1',
        flag: 1,
        type: 'Camping Seminar',
        topic: 'DevTalk',
        date: '2023.09.22 (FRI) 19:30',
        location: '동국대학교 원흥관 PBL',
        title: `
        휴, 하마터면 
        의사 될 뻔...
        `,
        description: `
        의사를 목표로 공부를 하다가,
        프로그래밍을 시작한 과정들을 토대로 개발 공부를 하며 깨달은 것들
        `,
        seminar_image_url: SeminarThumbnailCardImg.src,
        pdf_url: SeminarThumbnailCardImg.src,
    },
]
