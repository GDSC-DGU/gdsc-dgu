'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Navigation component
 * @returns Navigation component
 * @example
 * ```tsx
 * <Navigation />
 * ```
 * @see Navigation
 * @since 24.04.10
 */

interface NavItem {
  label: string;
  link?: string;
  isModalShow?: boolean;
  onClick?: () => void;
}

const selectStyle = 'text-mono_200';
export default function Navigation() {
  const pathname = usePathname(); // 현재 경로를 가져오기

  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const onProjectClick = () => {
    setIsProjectOpen(!isProjectOpen);
  };

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const onSideBarClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  // 전체적인 모달들을 관리하는 함수
  const isModalOpen = isProjectOpen || isSideBarOpen;
  const setIsModalClose = () => {
    setIsProjectOpen(false);
    setIsSideBarOpen(false);
  };

  useEffect(() => {
    // 경로 변경 시 setIsProjectOpen을 false로 설정
    setIsModalClose();
  }, [pathname]); // 경로 변경을 감지하는 의존성 배열

  const NavgationList: NavItem[][] = [
    // [{ label: 'Timeline', link: '/timeline' }],
    [{ label: 'Seminar', link: '/seminar' }],
    [
      {
        label: 'Project',
        link: '/project',
        isModalShow: isProjectOpen,
        onClick: onProjectClick,
      },
      { label: 'Project', link: '/project' },
      { label: 'Solution Challenge', link: '/solutionChallenge' },
    ],
    [{ label: 'Member', link: '/member' }],
    [{ label: 'Recuit', link: '/recruit' }],
  ];

  return (
    <>
      <div className=" fixed z-[99999] w-lvw flex flex-col justify-center items-center bg-black">
        <div className="max-w-[1200px] w-full flex justify-between items-center tablet:px-10 px-4 py-6 ">
          <Link className="H6" href="/">
            GDSC DGU
          </Link>

          {/* 데스크탑 */}
          <div className="gap-10 desktop:flex hidden">
            {NavgationList.map((item, index) => {
              return item.length == 1 ? (
                <NavButton
                  key={index}
                  label={item[0].label}
                  link={item[0].link}
                />
              ) : (
                <NavToggle
                  key={index}
                  label={item[0]}
                  navList={item.slice(1)}
                />
              );
            })}
          </div>
          {/* 데스크탑 */}

          {/* 테블릿, 모바일 */}
          {isSideBarOpen ? (
            <img
              className="w-6 h-6 bg-red-400 desktop:hidden"
              onClick={onSideBarClick}
            />
          ) : (
            <img
              className="w-6 h-6 bg-red-200 desktop:hidden"
              onClick={onSideBarClick}
            />
          )}

          {/* 테블릿, 모바일 */}
        </div>

        {/* -- 사이드 바 -- */}
        {isSideBarOpen ? (
          <div className=" bg-mono_900 w-full tablet:px-10 px-4 pt-4 pb-16 rounded-b-lg desktop:hidden">
            <div className="gap-10 flex flex-col ">
              {NavgationList.map((item, index) => {
                return item.length == 1 ? (
                  <NavButton
                    key={index}
                    label={item[0].label}
                    link={item[0].link}
                  />
                ) : (
                  <NavSubLabel
                    key={index}
                    label={item[0]}
                    navList={item.slice(1)}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          ''
        )}

        {/* -- 사이드 바 -- */}
      </div>

      {/* 모달이 열린채로, 다른 부분을 클릭하면 모달이 닫힘 */}
      {isModalOpen ? (
        <div
          className={`fixed left-0 top-0 z-0 w-lvw h-lvh mix-blend-multiply  ${
            isSideBarOpen ? ' desktop:bg-transparent bg-mono_200' : ''
          }`}
          onClick={setIsModalClose}
        />
      ) : (
        ''
      )}
      {/* 모달이 열린채로, 다른 부분을 클릭하면 모달이 닫힘 */}
    </>
  );
}

const NavButton: React.FC<NavItem> = ({ label, link }) => {
  // 현재 경로와 링크가 일치하는지 확인하여 클래스를 할당
  const pathname = usePathname();
  const isActive = pathname === link ? selectStyle : '';

  return (
    <Link
      className={`H6 cursor-pointer flex-shrink-1 whitespace-nowrap rounded-md  ${isActive}`}
      href={link || '/'}
    >
      {label}
    </Link>
  );
};

const NavToggle: React.FC<{ label: NavItem; navList: NavItem[] }> = ({
  label,
  navList,
}) => {
  const pathname = usePathname();

  const isActive = navList.some((item) => item.link === pathname)
    ? selectStyle
    : '';

  return (
    <div
      className={`H6 cursor-pointer relative flex gap-2 justify-center items-center rounded-md`}
      onClick={label.onClick}
    >
      <p className={`${isActive}`}>{label.label}</p>
      {label.isModalShow ? (
        <img className="w-6 h-6" src="/svg/icons/common/up.svg" />
      ) : (
        <img className="w-6 h-6" src="/svg/icons/common/down.svg" />
      )}

      {label.isModalShow ? (
        <div className="absolute px-6 py-4 z-999 bg-mono_900 flex flex-col rounded-lg  gap-3  right-0 top-10">
          {navList.map((item, index) => {
            return (
              <NavButton key={index} label={item.label} link={item.link} />
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const NavSubLabel: React.FC<{ label: NavItem; navList: NavItem[] }> = ({
  label,
  navList,
}) => {
  return (
    <div
      className={`H6 cursor-pointer relative flex flex-col gap-4 rounded-md `}
      onClick={label.onClick}
    >
      <p>{label.label}</p>

      <div className="flex flex-col rounded-lg  gap-6 px-2 py-2 right-0 top-12 text-mono_200">
        {navList.map((item, index) => {
          return <NavButton key={index} label={item.label} link={item.link} />;
        })}
      </div>
    </div>
  );
};
