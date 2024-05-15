import SeminarThumbnailCardImg from '@/images/seminar/default_seminar.png';
import OpenSeminarThumbnailCardImg from '@/images/seminar/default_open_seminar.png';
import { OpenSeminar, OpenSeminarDetailSeminar, OpenSeminarInfo } from '@/interfaces/seminar/openSeminar';
import { SeminarThumbnail } from '@/interfaces/seminar/seminarThumbnail';

export const OPEN_DETAIL_SEMINAR_DATA:SeminarThumbnail [] = [
    {
        id: '1',
        flag: 1,
        type: '🌲 Open Seminar',
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
    {
        id: '2',
        flag: 1,
        type: '🌲 Open Seminar',
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
    {
        id: '3',
        flag: 1,
        type: '🌲 Open Seminar',
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
    {
        id: '4',
        flag: 1,
        type: '🌲 Open Seminar',
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

export const OPEN_SEMINAR_DATA: OpenSeminar[] = [
    {
        id: '',
        flag: 1,
        type: '🌲 Open Seminar',
        date: '',
        location: '동국대학교',
        title: '',
        description: `
        GDSC DGU의 소속이 아니더라도 기술과 경험을 공유하는 것에 관심이 있는 학생들을 대상으로 진행하는 세미나입니다.
        `,
        image_url: OpenSeminarThumbnailCardImg.src,
        status: true,
        seminars: [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}],
    },
    {
        id: '',
        flag: 1,
        type: '🌲 Open Seminar',
        date: '',
        location: '동국대학교',
        title: '',
        description: `
        GDSC DGU의 소속이 아니더라도 기술과 경험을 공유하는 것에 관심이 있는 학생들을 대상으로 진행하는 세미나입니다.
        `,
        image_url: OpenSeminarThumbnailCardImg.src,
        status: false,
        seminars: [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}],
    },
    {
        id: '',
        flag: 1,
        type: '🌲 Open Seminar',
        date: '',
        location: '동국대학교',
        title: '',
        description: `
        GDSC DGU의 소속이 아니더라도 기술과 경험을 공유하는 것에 관심이 있는 학생들을 대상으로 진행하는 세미나입니다.
        `,
        image_url: OpenSeminarThumbnailCardImg.src,
        status: false,
        seminars: [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}],
    },
]

export const OPEN_SEMINAR_INFO_DATA: OpenSeminarInfo = {
    id: 1,
    open_seminar_id: '',
    information: ``
}

export const OPEN_SEMINAR_DETAIL_SEMINAR_DATA: OpenSeminarDetailSeminar[] = [
    {
        id: 1,
        seminar_id: '',
        member_id: '',
        member_name: '',
        member_role: '',
        member_profile_image: '',
        seminar_title: '',
    }
]
