import SeminarThumbnailCardImg from '@/images/seminar/default_seminar.png';
import { SeminarThumbnail } from '@/interfaces/seminar/seminarThumbnail';

export const SEMINAR_NONE_DATA: SeminarThumbnail[] = [
    {
        id: '1',
        flag: 1,
        type: '🏕️ Camping Seminar',
        topic: '',
        date: '',
        location: '동국대학교',
        title: `
        `,
        description: `
        `,
        seminar_image_url: '',
        pdf_url: SeminarThumbnailCardImg.src,
    },
]

export const SEMINAR_DATA: SeminarThumbnail[] = [
    {
        id: '1',
        flag: 1,
        type: '🏕️ Camping Seminar',
        topic: '',
        date: '',
        location: '동국대학교',
        title: `
        `,
        description: `
        `,
        seminar_image_url: SeminarThumbnailCardImg.src,
        pdf_url: SeminarThumbnailCardImg.src,
    },
]
