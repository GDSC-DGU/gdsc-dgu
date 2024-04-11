import { RecruitPart } from '@/interfaces/recruit/recruitPart';

export const PARTI_INTRODUCE: Record<string, RecruitPart> = {
  web: {
    id: 1,
    color: '#33A852',
    title: 'Web / App',
    description:
      'EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고 운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의 모임',
    preferred: [
      '2개 이상의 웹 프레임워크/라이브러리를 활용하여 프로젝트 경험이 있는 사람',
      'MVC, MVVM 디자인 패턴에 대한 지식이 있는 사람',
      'Back-End와 협업을 통해서 프로젝트를 완성시키고, 서비스를 배포까지 해본 경험이 있는 사람',
    ],
    keywords: ['EXPRESS', 'NEXT.JS', 'DJANGO', 'AWS'],
  },
  server: {
    id: 2,
    color: '#4186F4',
    title: 'Server / Cloud',
    description:
      'EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고 운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의 모임',
    preferred: [
      '2개 이상의 웹 프레임워크/라이브러리를 활용하여 프로젝트 경험이 있는 사람',
      'MVC, MVVM 디자인 패턴에 대한 지식이 있는 사람',
      'Back-End와 협업을 통해서 프로젝트를 완성시키고, 서비스를 배포까지 해본 경험이 있는 사람',
    ],
    keywords: ['spring', 'django', 'rest', 'go'],
  },
  ai: {
    id: 3,
    color: '#EA4236',
    title: 'AI / ML',
    description:
      'EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고 운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의 모임',
    preferred: [
      '2개 이상의 웹 프레임워크/라이브러리를 활용하여 프로젝트 경험이 있는 사람',
      'MVC, MVVM 디자인 패턴에 대한 지식이 있는 사람',
      'Back-End와 협업을 통해서 프로젝트를 완성시키고, 서비스를 배포까지 해본 경험이 있는 사람',
    ],
    keywords: ['인공지능', '기계학습', '머신러닝', '딥러닝'],
  },
};
