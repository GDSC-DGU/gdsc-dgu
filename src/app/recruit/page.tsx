import React from 'react';
import BannerImg from '../../../public/images/recruit_banner.png';

export const metadata = {
  title: 'Recruit',
};

const RecruitPage = () => {
  return (
    <div>
      {/* -------------------- 배너 --------------------*/}

      <div
        className="w-full flex-col justify-center items-center gap-2.5 inline-flex h-[35.75rem] 2xl:h-[40rem] min-h-fit my-10"
        style={{
          backgroundImage: `url(${BannerImg.src})`,
          backgroundSize: 'cover', // 배경 이미지가 div에 꽉 차도록 설정
          backgroundPosition: 'center', // 배경 이미지를 가운데로 정렬
        }}
      >
        <div className="flex flex-col justify-start items-center">
          {/* 모집 */}
          <div className=" w-3/6 flex flex-row items-center">
            <hr className="flex-grow border-t" />
            <div className="mx-4">Recruitment</div>
            <hr className="flex-grow border-t" />
          </div>
          {/* 동국대 로고 */}
          <div className="px-4 flex-col justify-center items-center gap-2.5 flex text-3xl mb-10">
            <span>Google Student Developer Clubs</span>
            <span>Dongguk University</span>
          </div>

          <div className="flex-col justify-start items-center flex mt-20">
            <div className="text-center text-white text-xs font-normal leading-[14px] tracking-wide">
              2023/08/28 ~ 2023/09/14
            </div>

            <div className="border  mt-5 py-2 px-28 border-solid text-zinc-500 text-sm font-medium">
              모집 기간이 아닙니다.
            </div>
          </div>
        </div>

        <div className="w-6 h-6 justify-center items-center inline-flex">
          <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
        </div>
      </div>
      {/* -----------------------------------------------*/}
      {/* -------------------- 인재상 -------------------*/}
      {/* -----------------------------------------------*/}
      <div className="w-full h-[328px] py-16 bg-zinc-900 flex-col justify-start items-center inline-flex">
        <div className="self-stretch h-[200px] px-10 flex-col justify-center items-center gap-10 flex">
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-2xl font-normal  leading-7">
              같이해서 가치를 만들고{' '}
            </div>
            <div className="text-center text-white text-2xl font-normal  leading-7">
              세상에 스며들다
            </div>
          </div>
          <div className="self-stretch h-[132px] flex-col justify-center items-center gap-5 flex">
            <div className="self-stretch justify-center items-center gap-1 inline-flex">
              <div className="text-center text-white text-base font-medium  leading-7 tracking-tight">
                혼자만의 성장이 아닌,
              </div>
              <div className="text-center text-white text-base font-medium  leading-7 tracking-tight">
                언제든 사람들과 만나 서로의 이야기를
              </div>
              <div className="text-center text-white text-base font-medium  leading-7 tracking-tight">
                공유하고자 커뮤니티를 만들었습니다.
              </div>
            </div>
            <div className="self-stretch text-center text-white text-base font-normal  leading-7">
              공유를 통해 같이 성장하며, 사회의 문제점을 해결하기 위한 공간을
              지향합니다.
              <br />
              우리는 단순한 개발실력 향상과 프로젝트 진행이 아닌,
              <br />
              모두가 함께 열정적으로 지식을 공유하며 더 많은 사람들과 함께
              성장하고자 합니다.
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------*/}
      {/* -------------------- 모집상 -------------------*/}
      {/* -----------------------------------------------*/}
      <div className="w-[1200px] h-[1612px] px-10 py-40 flex-col justify-center items-start gap-16 inline-flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="w-[544px] pb-8 flex-col justify-start items-start gap-10 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="text-white text-5xl font-normal  leading-[56px]">
                    Recruitment
                  </div>
                </div>
                <div className="text-white text-5xl font-normal  leading-[56px]">
                  Target
                </div>
              </div>
              <div className="w-[487px] text-white text-base font-normal  leading-7">
                아래 3가지 모두 해당 되는 분이라면, 누구든 지원 가능해요!
                <br />
                이런 분들과 함께 하고 싶어요!
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="h-14 justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-xl font-medium  leading-7 tracking-tight">
                지원 자격
              </div>
            </div>
            <div className="self-stretch h-[136px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-10 text-white text-base font-medium  leading-7 tracking-tight">
                  활동
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  1년 활동에 지장이 없는 사람
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-10 text-white text-base font-medium  leading-7 tracking-tight">
                  공유
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  자신의 경험과 기술을 공유하 고싶은 사람
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-10 text-white text-base font-medium  leading-7 tracking-tight">
                  성장
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  나눔을 통해 성장하는 가치를 추구하는 사람
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="w-10 text-white text-base font-medium  leading-7 tracking-tight">
                  열정
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  개발에 열정이 있으며, 팀활동에 적극적으로 참여할 수 있는 사람
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[1004px] flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch h-[164px] flex-col justify-start items-start gap-10 flex">
            <div className="px-1 flex-col justify-start items-start gap-8 flex">
              <div className="w-6 h-6 justify-center items-center inline-flex">
                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-[34px] font-normal  leading-10 tracking-tight">
                  Part
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  하나의 파트에 국한 되지 않고 세가지 분야로 이루어져
                  <br />
                  서로의 지식과 경험을 공유하며 함께 성장해나가고자 합니다.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 p-8 bg-black rounded flex-col justify-start items-start gap-10 inline-flex">
              <div className="w-[352px] h-60 relative opacity-20 bg-green-600 rounded-[9px] blur-[120px]" />
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute" />
              </div>
              <div className="self-stretch h-28 flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-xl font-medium  leading-7 tracking-tight">
                  Web / App
                </div>
                <div className="self-stretch text-white text-sm font-normal  leading-normal">
                  EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고
                  운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의
                  모임
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-8 bg-zinc-900 rounded flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[120px] flex-col justify-start items-start gap-2 flex">
                <div className="text-white text-xl font-medium  leading-7 tracking-tight">
                  Preferred
                </div>
                <div className="self-stretch text-white text-base font-normal  leading-7">
                  2개 이상의 웹 프레임워크/라이브러리를 활용하여 프로젝트 경험이
                  있는 사람
                  <br />
                  MVC, MVVM 디자인 패턴에 대한 지식이 있는 사람
                  <br />
                  Back-End와 협업을 통해서 프로젝트를 완성시키고, 서비스를
                  배포까지 해본 경험이 있는 사람
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="justify-start items-start gap-3 flex">
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      React
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Anguler
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Vue
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Svelte
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Flutter
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Kotlin
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Swift
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 p-8 bg-black rounded flex-col justify-start items-start gap-10 inline-flex">
              <div className="w-[352px] h-60 relative opacity-20 bg-blue-500 rounded-[9px] blur-[120px]" />
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute" />
              </div>
              <div className="self-stretch h-28 flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-xl font-medium  leading-7 tracking-tight">
                  Server / Cloud
                </div>
                <div className="self-stretch text-white text-sm font-normal  leading-normal">
                  EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고
                  운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의
                  모임
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-8 bg-zinc-900 rounded flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[120px] flex-col justify-start items-start gap-2 flex">
                <div className="text-white text-xl font-medium  leading-7 tracking-tight">
                  Preferred
                </div>
                <div className="self-stretch text-white text-base font-normal  leading-7">
                  2개 이상의 웹 프레임워크/라이브러리를 활용하여 프로젝트 경험이
                  있는 사람
                  <br />
                  MVC, MVVM 디자인 패턴에 대한 지식이 있는 사람
                  <br />
                  Back-End와 협업을 통해서 프로젝트를 완성시키고, 서비스를
                  배포까지 해본 경험이 있는 사람
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="justify-start items-start gap-3 flex">
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      React
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Anguler
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Vue
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Svelte
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Flutter
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Kotlin
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Swift
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 p-8 bg-black rounded flex-col justify-start items-start gap-10 inline-flex">
              <div className="w-[352px] h-60 relative opacity-20 bg-red-500 rounded-[9px] blur-[120px]" />
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute" />
              </div>
              <div className="self-stretch h-28 flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-xl font-medium  leading-7 tracking-tight">
                  AI / ML
                </div>
                <div className="self-stretch text-white text-sm font-normal  leading-normal">
                  EXPRESS, NEXT.JS, DJANGO 등을 사용하여 서비스를 배포하고
                  운영하며, AWS같은 클라우드 환경을 익숙하게 다루는 사람들의
                  모임
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-8 bg-zinc-900 rounded flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[120px] flex-col justify-start items-start gap-2 flex">
                <div className="text-white text-xl font-medium  leading-7 tracking-tight">
                  Preferred
                </div>
                <div className="self-stretch text-white text-base font-normal  leading-7">
                  2개 이상의 웹 프레임워크/라이브러리를 활용하여 프로젝트 경험이
                  있는 사람
                  <br />
                  MVC, MVVM 디자인 패턴에 대한 지식이 있는 사람
                  <br />
                  Back-End와 협업을 통해서 프로젝트를 완성시키고, 서비스를
                  배포까지 해본 경험이 있는 사람
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="justify-start items-start gap-3 flex">
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      React
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Anguler
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Vue
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Svelte
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Flutter
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Kotlin
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-700 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-sm font-medium  leading-none">
                      Swift
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------*/}
      {/* -------------------- 스케쥴 -------------------*/}
      {/* -----------------------------------------------*/}
      <div className="w-full h-[568px] bg-gray-50 flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="self-stretch h-[568px] px-10 py-40 bg-gray-50 flex-col justify-start items-center gap-32 flex">
          <div className="self-stretch h-[248px] flex-col justify-start items-center gap-2.5 flex">
            <div className="self-stretch h-[248px] flex-col justify-start items-start flex">
              <div className="px-1 pb-10 justify-start items-end gap-8 inline-flex">
                <div className="text-black text-5xl font-normal  leading-[56px]">
                  Schedule
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-5 inline-flex">
                <div className="grow shrink basis-0 px-5 py-8 bg-gray-200 rounded flex-col justify-start items-center gap-1 inline-flex">
                  <div className="text-black text-xl font-medium  leading-7 tracking-tight">
                    서류 모집
                  </div>
                  <div className="w-24 flex-col justify-center items-center flex">
                    <div className="text-black text-base font-normal  leading-7">
                      2023/08/28
                    </div>
                    <div className="text-black text-base font-normal  leading-7">
                      ~ 2023/09/08
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 px-5 py-8 bg-gray-200 rounded flex-col justify-start items-center gap-1 inline-flex">
                  <div className="text-black text-xl font-medium  leading-7 tracking-tight">
                    1차 발표
                  </div>
                  <div className="w-[81px] flex-col justify-center items-center flex">
                    <div className="text-black text-base font-normal  leading-7">
                      2023/09/10
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 px-5 py-8 bg-gray-200 rounded flex-col justify-start items-center gap-1 inline-flex">
                  <div className="text-black text-xl font-medium  leading-7 tracking-tight">
                    인터뷰
                  </div>
                  <div className="w-[78px] flex-col justify-center items-center flex">
                    <div className="text-black text-base font-normal  leading-7">
                      2023/09/11
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 px-5 py-8 bg-gray-200 rounded flex-col justify-start items-center gap-1 inline-flex">
                  <div className="text-black text-xl font-medium  leading-7 tracking-tight">
                    최종 발표
                  </div>
                  <div className="w-24 flex-col justify-center items-center flex">
                    <div className="text-black text-base font-normal  leading-7">
                      2023/09/14
                    </div>
                    <div className="text-black text-base font-normal  leading-7">
                      ~ 2024/08/28
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 px-5 py-8 bg-gray-200 rounded flex-col justify-start items-center gap-1 inline-flex">
                  <div className="text-black text-xl font-medium  leading-7 tracking-tight">
                    오리엔테이션
                  </div>
                  <div className="w-[81px] flex-col justify-center items-center flex">
                    <div className="text-black text-base font-normal  leading-7">
                      2023/09/15
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ////////// FAQ*/}
      <div className="w-[1200px] h-[1176px] px-10 py-[120px] flex-col justify-start items-center gap-32 inline-flex">
        <div className="self-stretch h-[936px] flex-col justify-start items-center gap-10 flex">
          <div className="self-stretch h-[848px] flex-col justify-start items-start flex">
            <div className="self-stretch h-[152px] px-1 pb-10 flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch justify-start items-end gap-10 inline-flex">
                <div className="text-white text-5xl font-normal  leading-[56px]">
                  Frequently
                  <br />
                  Asked Questions
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  자주 묻는 질문
                </div>
              </div>
            </div>
            <div className="self-stretch h-[696px] rounded flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-[120px] p-7 bg-zinc-900 rounded flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-2xl font-normal  leading-7">
                  질문
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  질문 답변
                </div>
              </div>
              <div className="self-stretch h-[120px] p-7 bg-zinc-900 rounded flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-2xl font-normal  leading-7">
                  질문
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  질문 답변
                </div>
              </div>
              <div className="self-stretch h-[120px] p-7 bg-zinc-900 rounded flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-2xl font-normal  leading-7">
                  질문
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  질문 답변
                </div>
              </div>
              <div className="self-stretch h-[120px] p-7 bg-zinc-900 rounded flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-2xl font-normal  leading-7">
                  질문
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  질문 답변
                </div>
              </div>
              <div className="self-stretch h-[120px] p-7 bg-zinc-900 rounded flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-2xl font-normal  leading-7">
                  질문
                </div>
                <div className="text-white text-base font-normal  leading-7">
                  질문 답변
                </div>
              </div>
            </div>
          </div>
          <div className="w-[352px] py-4 bg-zinc-900 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-sm font-medium  leading-none">
              문의하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitPage;
