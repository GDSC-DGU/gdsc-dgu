import { AnimationScope, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

/**
 * 토글 효과 함수: 토글 메뉴를 클릭하면 토클 내용을 보여줌(모션을 적용).
 * @param {boolean} isOpen - 토글의 열림 여부
 * @returns {AnimationScope<any>} - ref={scope}로 모션 적용
 */

export const toggle = (isOpen: boolean): AnimationScope<any> => {
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('.toggle-arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.25 });

    animate(
      '.toggle-menu-box',
      isOpen ? { height: 'max-content' } : { height: 0 },
      {
        duration: 0.5,
      },
    );

    animate(
      '.toggle-menu',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.25,
        delay: isOpen ? staggerMenuItems : 0,
      },
    );
  }, [isOpen]);

  return scope;
};
