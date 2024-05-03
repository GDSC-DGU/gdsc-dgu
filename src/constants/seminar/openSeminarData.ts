import SeminarThumbnailCardImg from '@/svg/seminar/seminar_thumbnail_card.png';
import PresenterProfileImg from '@/svg/seminar/presenter_profile_img.png';
import { OpenSeminar } from '@/interfaces/seminar/openSeminar';
import { SeminarThumnail } from '@/interfaces/seminar/seminarThumbnail';

export const OPEN_DETAIL_SEMINAR_DATA:SeminarThumnail [] = [
    {
        id: 1,
        flag: 1,
        type: 'Open Seminar',
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
        presenter_name: '서희찬',
        presenter_role: 'Lead',
        seminar_image_url: SeminarThumbnailCardImg.src,
        presenter_image_url: PresenterProfileImg.src,
    },
    {
        id: 2,
        flag: 1,
        type: 'Open Seminar',
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
        presenter_name: '서희찬',
        presenter_role: 'Lead',
        seminar_image_url: SeminarThumbnailCardImg.src,
        presenter_image_url: PresenterProfileImg.src,
    },
    {
        id: 3,
        flag: 1,
        type: 'Open Seminar',
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
        presenter_name: '서희찬',
        presenter_role: 'Lead',
        seminar_image_url: SeminarThumbnailCardImg.src,
        presenter_image_url: PresenterProfileImg.src,
    },
    {
        id: 4,
        flag: 1,
        type: 'Open Seminar',
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
        presenter_name: '서희찬',
        presenter_role: 'Lead',
        seminar_image_url: SeminarThumbnailCardImg.src,
        presenter_image_url: PresenterProfileImg.src,
    },
]

export const OPEN_SEMINAR_DATA: OpenSeminar[] = [
    {
        id: 1,
        flag: 1,
        type: 'Open Seminar',
        seminar_opening_date: '2024.05.16 (THU) 18:30',
        seminar_month_date: '2024/5',
        location: '동국대학교 원흥관 PBL',
        description: `
        GDSC DGU의 소속이 아니더라도 기술과 경험을 공유하는 것에 관심이 있는 학생들을 대상으로 진행하는 세미나입니다.
        `,
        information: `
        CONG(콩) : 축하 아카이빙 서비스<br><br>CONG은 왜 필요할까?<br><br>Unlearn Point 1️⃣ : 좋은 일이라도 나서서 축하해달라고 요청하는 것은 왠지 눈치보여 ...<br>Unlearn Point 2️⃣ : 축하는 대단한 일이어야만 받을 수 있겠지?<br>축하의 문제점 : 온/오프라인으로 축하받은 내용이 쉽게 휘발된다. <br>🥲 졸전 포스트잇들이 자꾸 떨어져..<br>간직하고 싶은데 <br>아쉬워요. <br>🥲 구두로 축하를 받거나, 내가 자리에 없을 때 누가 온지 파악이 힘들어요.<br>🥲 졸전 포스트잇 집에 들고 갔는데 지금은 어디에 있는지 몰라요.<br><br>작은 일이라도 좋은 일이 생겼을 때, <br>내가 먼저 🙌🏻 축하해달라고 하면?<br>이렇게 받은 축하를 오래 간직할 수 있다면? 📁<br><br>'CONG'을 통해 축하받고 싶은 일을 알리고 축하 노트를 받아요! <br>축하의 순간, 사라지지 않게 콩
        `,
        image_url: SeminarThumbnailCardImg.src,
        status: true,
        seminars: OPEN_DETAIL_SEMINAR_DATA,
    },
    {
        id: 2,
        flag: 1,
        type: 'Open Seminar',
        seminar_opening_date: '2024.05.16 (THU) 18:30',
        seminar_month_date: '2024/5',
        location: '동국대학교 원흥관 PBL',
        description: `
        GDSC DGU의 소속이 아니더라도 기술과 경험을 공유하는 것에 관심이 있는 학생들을 대상으로 진행하는 세미나입니다.
        `,
        information: `
        CONG(콩) : 축하 아카이빙 서비스<br><br>CONG은 왜 필요할까?<br><br>Unlearn Point 1️⃣ : 좋은 일이라도 나서서 축하해달라고 요청하는 것은 왠지 눈치보여 ...<br>Unlearn Point 2️⃣ : 축하는 대단한 일이어야만 받을 수 있겠지?<br>축하의 문제점 : 온/오프라인으로 축하받은 내용이 쉽게 휘발된다. <br>🥲 졸전 포스트잇들이 자꾸 떨어져..<br>간직하고 싶은데 <br>아쉬워요. <br>🥲 구두로 축하를 받거나, 내가 자리에 없을 때 누가 온지 파악이 힘들어요.<br>🥲 졸전 포스트잇 집에 들고 갔는데 지금은 어디에 있는지 몰라요.<br><br>작은 일이라도 좋은 일이 생겼을 때, <br>내가 먼저 🙌🏻 축하해달라고 하면?<br>이렇게 받은 축하를 오래 간직할 수 있다면? 📁<br><br>'CONG'을 통해 축하받고 싶은 일을 알리고 축하 노트를 받아요! <br>축하의 순간, 사라지지 않게 콩
        `,
        image_url: SeminarThumbnailCardImg.src,
        status: true,
        seminars: OPEN_DETAIL_SEMINAR_DATA,
    },
    {
        id: 3,
        flag: 1,
        type: 'Open Seminar',
        seminar_opening_date: '2024.05.16 (THU) 18:30',
        seminar_month_date: '2024/5',
        location: '동국대학교 원흥관 PBL',

        description: `
        GDSC DGU의 소속이 아니더라도 기술과 경험을 공유하는 것에 관심이 있는 학생들을 대상으로 진행하는 세미나입니다.
        `,
        information: `
        CONG(콩) : 축하 아카이빙 서비스<br><br>CONG은 왜 필요할까?<br><br>Unlearn Point 1️⃣ : 좋은 일이라도 나서서 축하해달라고 요청하는 것은 왠지 눈치보여 ...<br>Unlearn Point 2️⃣ : 축하는 대단한 일이어야만 받을 수 있겠지?<br>축하의 문제점 : 온/오프라인으로 축하받은 내용이 쉽게 휘발된다. <br>🥲 졸전 포스트잇들이 자꾸 떨어져..<br>간직하고 싶은데 <br>아쉬워요. <br>🥲 구두로 축하를 받거나, 내가 자리에 없을 때 누가 온지 파악이 힘들어요.<br>🥲 졸전 포스트잇 집에 들고 갔는데 지금은 어디에 있는지 몰라요.<br><br>작은 일이라도 좋은 일이 생겼을 때, <br>내가 먼저 🙌🏻 축하해달라고 하면?<br>이렇게 받은 축하를 오래 간직할 수 있다면? 📁<br><br>'CONG'을 통해 축하받고 싶은 일을 알리고 축하 노트를 받아요! <br>축하의 순간, 사라지지 않게 콩
        `,
        image_url: SeminarThumbnailCardImg.src,
        status: false,
        seminars: OPEN_DETAIL_SEMINAR_DATA,
    },
]